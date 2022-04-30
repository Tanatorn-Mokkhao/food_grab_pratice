import { UserModel } from '../models/user'

export const findEmailExist = async (email: string) => { 
    const user = await UserModel.findOne({ email })
    
    return user
}