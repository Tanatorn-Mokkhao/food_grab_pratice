import express from 'express'
import { createProduct } from '../logics/new-product'
import { validateCreateProduct } from '../validators/create-product'
import { validateRequest, currentUser } from '@martfoodgrab/common'
const router = express.Router()

router.post('/create', validateCreateProduct, validateRequest ,createProduct)

export { router as productRoutes}