import express from 'express'
import { signinup } from '../logics/siginup'
import { vlidateSignup } from '../validators/signup'
import { validateRequest, currentUser } from '@martfoodgrab/common'
import { validateSignin } from '../validators/signin'
import { signin } from '../logics/signin'
import { signout } from '../logics/signout'
import { currentUserLogic } from '../logics/current-user-logic'
const router = express.Router()

router.get('/currentuser', currentUser, currentUserLogic)

router.post('/signup', vlidateSignup, validateRequest, signinup)

router.post('/signin', validateSignin, validateRequest, signin)

router.post('/signout', signout)


export  { router as userRoutes }