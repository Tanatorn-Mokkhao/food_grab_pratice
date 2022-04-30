import express from 'express'
import 'express-async-errors'
import {ErrorHandle, NotfoundError } from '@martfoodgrab/common'
import { userRoutes } from './routes/user.route'
import cookieSession from 'cookie-session'

const app = express()
app.set('trust proxy', true)
app.use(express.json())

app.use(
    cookieSession({
        signed: false,
        secure: process.env.NODE_ENV !== 'test' // if we are running mpn run test it will defined with test then return false
    })
)

app.use('/api/users', userRoutes)

app.all('*', () => { 
    throw new NotfoundError()
})


app.use(ErrorHandle)

export { app }