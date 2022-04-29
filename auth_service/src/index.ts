import { app } from './app'
import mongoose from 'mongoose'


const start = async () => { 

    if (!process.env.MONGO_URL) { 
        throw new Error('MONGO_URI must be defined')
    }

    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('connected to mongodb')
    } catch (err) { 
        console.log(err)
    }


    app.listen(3000, () => { 
        console.log('server is running on port 3000!!!!_test.v2')
    })
}

start()