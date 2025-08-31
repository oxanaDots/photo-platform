import express from 'express'
import { getMyBookings } from '../constroller.js'
import { Router } from 'express'
const router = Router()

router.get('/', getMyBookings)

export default router