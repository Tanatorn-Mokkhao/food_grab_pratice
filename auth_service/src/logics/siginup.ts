import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { createNewUser, findEmailExist } from '../repositories/signup'
import { BadRequestError } from '@martfoodgrab/common'
export const signinup = async (req: Request, res: Response) => { 

    const userExist = await findEmailExist(req.body.email)

    if (userExist) { 
        throw new BadRequestError('this email already  use')
    }

    const user = await createNewUser(req.body)
    
    const userJwt = jwt.sign({
        id: user.id,
        email: user.email,
        name: user.name
    }, process.env.JWT_KEY!)

    req.session = {
        jwt: userJwt
    }

    res.status(201).send(user)
}