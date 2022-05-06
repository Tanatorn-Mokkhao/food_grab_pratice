import { ProductModel, ProductAttrs } from '../models/product'

export const createNewProduct = async (payload: ProductAttrs) => { 
    const product = ProductModel.build(payload)
    await product.save()
    return product
}


export const findProductExist = async (name: string) => { 
    const product = await ProductModel.findOne({ name })
    
    return product
}