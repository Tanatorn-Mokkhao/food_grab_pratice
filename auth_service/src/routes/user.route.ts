import express from 'express'
import { signinUp } from '../logics/siginup'
import { vlidateSignup } from '../validators/signup'
import { validateRequest } from '@martfoodgrab/common'
const router = express.Router()


router.post('/', vlidateSignup , validateRequest ,signinUp)


export  { router as userRoutes }