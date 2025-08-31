
import { pool } from "./db.js"

// "https://...search?key=..."

const query = `SELECT
a.appointment_id,
a.date_and_time,
  l.street_name,
  s.service_name
--   ar.first_name
FROM appointment AS a
LEFT JOIN location  AS l  ON l.location_id = a.location_id
LEFT JOIN service   AS s  ON s.service_id  = a.service_id
-- JOIN artist AS ar ON ar.artist_id = a.artist_id
where a.client_id= 1
;`

export const getMyBookings = async (req, res)=>{
   
    try{

        // get location, date & time, service and artist_id from appointment table
        // select
    const [rows] = await pool.query(query)
     res.send({data: rows})
     console.log(rows)
    } catch (err){
     console.error(err)
    }
}