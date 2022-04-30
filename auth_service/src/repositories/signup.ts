import { UserModel, UserAttrs } from '../models/user'

export const createNewUser = async (payload: UserAttrs) => { 
    const user = UserModel.build(payload)
    await user.save()
    return user
}

export const findEmailExist = async (email: string) => { 
    const user = await UserModel.findOne({ email })
    
    return user
}