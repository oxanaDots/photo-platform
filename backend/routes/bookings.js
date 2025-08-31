import express from 'express'
import { getMyBookings } from '../constroller.js'
const router = express.Router()

router.get('/search', getMyBookings)

export default router