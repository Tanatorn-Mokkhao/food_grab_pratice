import request from "supertest"
import { app } from '../../app'
import { ProductModel } from '../../models/product'

it('return 400 if not entries filed correctly', async () => {
    await request(app)
        .post('/api/products/create')
        .send({})
        .expect(400)
    
    await request(app)
        .post('/api/products/create')
        .send({
            name: 'test'
        })
        .expect(400)
    
    await request(app)
        .post('/api/products/create')
        .send({
            name: 'test',
            price: 100
        })
        .expect(400)
})



it('return 400 if entry string in price and quantity', async () => {
    await request(app)
        .post('/api/products/create')
        .send({
            name: 'test',
            price: '1asdas',
            quantity: 200
        })
        .expect(400)
    
    
    await request(app)
        .post('/api/products/create')
        .send({
            name: 'test',
            price: 100,
            quantity: 'asdasd'
        })
        .expect(400)

})


it('return 400 if create duplicate product name', async () => {
    await request(app)
        .post('/api/products/create')
        .send({
            name: 'test',
            price: 100,
            quantity: 20
        })
        .expect(201)
    
    await request(app)
        .post('/api/products/create')
        .send({
            name: 'test',
            price: 100,
            quantity: 20
        })
        .expect(400)

})


it('return 200 create product success', async () => {
    let product = await ProductModel.find({})
    expect(product.length).toEqual(0);

    const response = await request(app)
        .post('/api/products/create')
        .send({
            name: 'test',
            price: 100,
            quantity: 20
        })
        .expect(201)
    
    product = await ProductModel.find({})

    expect(product.length).toEqual(1);
    expect(product[0].name).toBe('test')
    expect(product[0].price).toBe(100)
    expect(product[0].quantity).toBe(20)
})