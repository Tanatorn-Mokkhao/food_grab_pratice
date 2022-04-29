import express from 'express'
import 'express-async-errors'
import {ErrorHandle, NotfoundError } from '@martfoodgrab/common'

const app = express()
app.use(express.json())

app.use('/api/users/test', (req, res) => { 
    console.log('test')
    res.send("his")
})

app.all('*', () => { 
    throw new NotfoundError()
})


app.use(ErrorHandle)

export { app }