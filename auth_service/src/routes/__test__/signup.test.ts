import request from 'supertest'
import { app } from '../../app'

it('return 201 on success signup', async () => { 
    return request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',
            password: 'pass',
            name: 'mart'
        })
    .expect(201)
})

it('return 400 invalid input', async () => { 
    return request(app)
        .post('/api/users/signup')
        .expect(400)
})

it('return 400 duplicate email', async () => { 
    await request(app)
    .post('/api/users/signup')
    .send({
        email: 'test@test.com',
        password: 'pass',
        name: 'mart'
    })
    .expect(201)

    await request(app)
    .post('/api/users/signup')
    .send({
        email: 'test@test.com',
        password: 'pass',
        name: 'mart'
    })
    .expect(400)
})

it('set a cookie after signup success', async () => { 
    const response =     await request(app)
    .post('/api/users/signup')
    .send({
        email: 'test@test.com',
        password: 'pass',
        name: 'mart'
    })
    .expect(201)
    
    expect(response.get('Set-Cookie')).toBeDefined()
    
})