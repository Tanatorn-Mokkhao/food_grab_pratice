import express from 'express'
import { signinUp } from '../logics/siginup'
const router = express.Router()


router.post('/', signinUp)


export  { router as userRoutes }