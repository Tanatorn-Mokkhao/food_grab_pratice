import express from 'express'
import { createProduct } from '../logics/newProduct'
const router = express.Router()

router.get('/create', createProduct)

export { router as productRoutes}