import { Request, Response } from 'express'
import { findProductExist, createNewProduct } from '../repositories/create-product'
import { BadRequestError } from '@martfoodgrab/common'

export const createProduct = async (req: Request, res: Response) => { 
    const productExist = await findProductExist(req.body.name)
    if (productExist) { 
        throw new BadRequestError('this name already  use')
    }

    const product = await createNewProduct(req.body)

    res.status(201).send(product)
}