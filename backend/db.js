import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
import mysql from 'mysql2/promise';

export const pool =  mysql.createPool({
  host:process.env.AWS_MYSQL_HOST,
  user:process.env.AWS_MYSQL_USER,
  password:process.env.AWS_MYSQL_PASSWORD,
  port: 3306,
  waitForConnections: true,
  database:process.env.AWS_MYSQL_DATABASE,
  connectionLimit: 10,
})



