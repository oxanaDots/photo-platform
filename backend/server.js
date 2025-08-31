import express from 'express';
import bookingsRouter from './routes/bookings.js'
const app = express()
const PORT = 3000

// takes two arguments: route name and a handler function that runs whenever the route is accessed 
// app.get('/', (req, res)=>{
//     res.send('Yoda')
// })

// app.get('/user/:name', (req, res)=>{
//     const username = req.params.name
//     res.send(`Welcome, ${username}`)
// })

const bookings = [
    {"bookingId": "123", "clientId": "client123"}
]

app.post('/mybookings', express.json(), (req, res)=>{
    const {bookingId, clientId} = req.body
    res.json({
     message: `Booking ${bookingId} was booked by client ${clientId}`
    })
})


app.use('/mybookings', bookingsRouter)



app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})