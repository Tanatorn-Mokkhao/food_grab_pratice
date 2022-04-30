import request from "supertest"
import { app } from '../../app'



it('signin success', async () => {
    await request(app)
    .post('/api/users/signup')
    .send({
        email: 'test@test.com',
        password: 'pass',
        name: 'mart'
    })
    .expect(201)
    
    await request(app)
    .post('/api/users/signin')
    .send({
        email: 'test@test.com',
        password: 'pass',
    })
    .expect(200)
})

it('invaalid username', async () => { 
    await request(app)
    .post('/api/users/signup')
    .send({
        email: 'test@test.com',
        password: 'pass',
        name: 'mart'
    })
    .expect(201)
    
    await request(app)
    .post('/api/users/signin')
    .send({
        email: 'asdasdasd@test.com',
        password: 'pass',
    })
    .expect(400)
    
})

it('invaalid password', async () => { 
    await request(app)
    .post('/api/users/signup')
    .send({
        email: 'test@test.com',
        password: 'pass',
        name: 'mart'
    })
    .expect(201)
    
    await request(app)
    .post('/api/users/signin')
    .send({
        email: 'test@test.com',
        password: 'cxzczxc',
    })
    .expect(400)
    
})

it('responds with a cookie when given valid credentials', async () => { 
    await request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',
            password: 'passsword',
            name: 'mart'
        })
        .expect(201)
    
    const response = await request(app)
        .post('/api/users/signin')
        .send({
            email: 'test@test.com',
            password: 'passsword'
        })
        .expect(200)
    
    expect(response.get('Set-Cookie')).toBeDefined()
})