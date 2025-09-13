import type { Request, Response } from "express";
import type { ResultSetHeader, RowDataPacket } from 'mysql2';

import { pool } from "./db.ts"

const getBookingsQuery = `SELECT
a.appointment_id,
a.date_and_time,
  l.street_name,
   l.street_number,
    l.postcode,
  s.service_name
--   ar.first_name
FROM appointment AS a
LEFT JOIN location  AS l  ON l.location_id = a.location_id
LEFT JOIN service   AS s  ON s.service_name = a.service_name
-- JOIN artist AS ar ON ar.artist_id = a.artist_id
where a.client_id= 1;`



export const getMyBookings = async (req:Request, res: Response)=>{
   
    try{

    // get location, date & time, service and artist_id from appointment table

    const [rows] = await pool.query(getBookingsQuery)
     res.send({data: rows})
     console.log(rows)
    } catch (err){
     console.error(err)
    }
}

export const sendBookingstoDB = async(req:Request, res:Response)=>{
  const {
    client_id,
    artist_id,
    instructions,
    date_and_time,
    service_name,
    street_name, 
    street_number,
     postcode 
  } = req.body;



    const conn = await pool.getConnection();

    try{
     await conn.beginTransaction();
    //  set location_id if it does not exist in location table, if it does exist, extract the PK (location_id)

    // ResultSetHeader describes the object returned by INSERT query
    const [locationResponse] = await conn.execute <ResultSetHeader>(
        `INSERT INTO location (street_name, street_number, postcode)
        VALUES (?, ?, ?) 
        ON DUPLICATE KEY UPDATE location_id = LAST_INSERT_ID(location_id)`,
        [street_name, street_number, postcode]
    )

      const location_id = locationResponse.insertId

      const [appointmentResponse] = await conn.execute<ResultSetHeader>(
       `INSERT INTO appointment (client_id, location_id, artist_id, instructions, date_and_time, service_name)
       VALUES (?, ?, ?, ?, ?, ?)`,
       [client_id, location_id, artist_id, instructions, date_and_time, service_name]
      )
      await conn.commit();


      return res.status(201).json({
      appointment_id: appointmentResponse.insertId,
      location_id,
      service_name,
    });

    } catch(err){

        await conn.rollback()
        console.error(err)

        return res.status(500).json({error: 'Cannot add an appointment', code: err})
    } finally{
        conn.release()
    }
}