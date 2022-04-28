import { app } from './app'



const start = () => { 
    app.listen(3000, () => { 
        console.log('server is running on port 3000!!!!_test.v2')
    })
}

start()