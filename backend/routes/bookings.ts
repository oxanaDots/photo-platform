import express from 'express'
import { getMyBookings, sendBookingstoDB } from '../constroller'
import { Router } from 'express'
const router = Router()

router.get('/', getMyBookings)
router.post('/new', sendBookingstoDB)

export default router