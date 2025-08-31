import express from 'express';
import mysql from 'mysql2/promise';
const app = express();
app.use(express.json());

export const pool =  mysql.createPool({
   host: process.env.AWS_MYSQL_HOST,
  user: process.env.AWS_MYSQL_USER,
  password: process.env.AWS_MYSQL_PASSWORD,
  port: 3306,
  waitForConnections: true,
  database: process.env.AWS_MYSQL_DATABASE,
  connectionLimit: 10,
})

const [rows] = await pool.query('select * from services');
console.log('Tables:', rows)

