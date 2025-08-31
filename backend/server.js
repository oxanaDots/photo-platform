import dotenv from 'dotenv';
import express from 'express';
import bookingsRouter from './routes/bookings.js'
import cors from 'cors'

const app = express()
app.use(express.json(), cors({origin:'http://localhost:5173'}))
const PORT = 3000

// takes two arguments: route name and a handler function that runs whenever the route is accessed 
// app.get('/', (req, res)=>{
//     res.send('Yoda')
// })

// app.get('/user/:name', (req, res)=>{
//     const username = req.params.name
//     res.send(`Welcome, ${username}`)
// })



app.use('/mybookings', bookingsRouter)



app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})