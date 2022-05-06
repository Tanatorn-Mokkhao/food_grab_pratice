import { app } from './app'
import mongoose from 'mongoose'
import { kafkaWrapper } from './kafka-wrapper'


const start = async () => { 

    if (!process.env.MONGO_URL) { 
        throw new Error('MONGO_URI must be defined')
    }

    if (!process.env.JWT_KEY) { 
        throw new Error('JWT_KEY must be defined')
    }

    try {
        await kafkaWrapper.connect('test', ['kafka1-service:9092'])

        await mongoose.connect(process.env.MONGO_URL)
        console.log('connected to mongodb')
    } catch (err) { 
        console.log(err)
    }


    app.listen(3000, () => { 
        console.log('server is running on port 3000!!!!_product.new-zone-test')
    })
}

start()