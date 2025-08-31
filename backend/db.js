import express from 'express';
import mysql from 'mysql2/promise';
const app = express();
app.use(express.json());

export const pool =  mysql.createPool({
  host: 'database-db.cqz8ceiwks7m.us-east-1.rds.amazonaws.com',
  port: 3306,
  user: 'admin',
  password: 'NewStrongPass!1',
  waitForConnections: true,
  database: 'myplatform',
  connectionLimit: 10,
})

const [rows] = await pool.query('select * from services');
console.log('Tables:', rows)

