import express from 'express'
import 'express-async-errors'
import {ErrorHandle, NotfoundError } from '@martfoodgrab/common'
import { userRoutes } from './routes/user.route'
const app = express()
app.use(express.json())

app.use('/api/users', userRoutes)

app.all('*', () => { 
    throw new NotfoundError()
})


app.use(ErrorHandle)

export { app }