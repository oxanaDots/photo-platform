import dotenv from 'dotenv';
import express from 'express';
import bookingsRouter from './routes/bookings.ts'
import cors from 'cors'

const app = express()
app.use(express.json(), cors({origin:'http://localhost:5173',
methods:['GET', 'POST', 'OPTIONS']}))
const PORT = 3000


app.use('/mybookings', bookingsRouter)



app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})