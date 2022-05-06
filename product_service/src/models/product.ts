import mongoose from 'mongoose'

export interface ProductAttrs { 
    name: string
    price: number
    quantity: number
}

interface ProductDoc extends mongoose.Document { 
    name: string
    price: number
    quantity: number
    createdAt: Date
    updateAt: Date
}

interface ProductModel extends mongoose.Model<ProductDoc> { 
    build(attrs: ProductAttrs): ProductDoc
}

const ProductSchema = new mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number
    }
}, {
    toJSON: {
        transform(doc, ret) { 
            ret.id = ret._id
            delete ret._id
            delete ret.__v
        }
    },
    timestamps: true
})

ProductSchema.statics.build = (attrs: ProductAttrs) => { 
    return new Product(attrs)
}

const Product = mongoose.model<ProductDoc, ProductModel>('Product', ProductSchema)

export { Product as ProductModel }