import mongoose from 'mongoose'
import { Password } from '../services/password'

export interface UserAttrs { 
    email: string,
    password: string,
    name: string
}


interface UserDoc extends mongoose.Document { 
    email: string,
    password: string,
    name: string,
    createdAt: Date,
    updateAt: Date
}

interface UserModel extends mongoose.Model<UserDoc> { 
    build(attrs: UserAttrs): UserDoc
}

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}, {
    toJSON: {
        transform(doc, ret) { 
            ret.id = ret._id
            delete ret._id
            delete ret.password
            delete ret.__v
        }
    },
    timestamps: true
})

UserSchema.pre('save', async function (done) { 
    if (this.isModified('password')) { 
        const hashed = await Password.toHash(this.get('password'))
        this.set('password', hashed)
    }

    done()
})

UserSchema.statics.build = (attrs: UserAttrs) => { 
    return new User(attrs)
}

const User = mongoose.model<UserDoc, UserModel>('User', UserSchema)


export { User as UserModel }