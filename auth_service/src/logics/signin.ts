import { BadRequestError } from '@martfoodgrab/common'
import { Request, Response } from 'express'
import { findEmailExist } from '../repositories/signin'
import { Password } from '../services/password'
import jwt from 'jsonwebtoken'

export const signin = async (req: Request, res: Response) => { 
    const { email, password } = req.body

    const user = await findEmailExist(email)

    if (!user) { 
        throw new BadRequestError('Invalid credentials')
    }

    const passwordMatch = await Password.compare(user.password, password)

    if (!passwordMatch) { 
        throw new BadRequestError('Invalid credentials')
    }

    const userJwt = jwt.sign({
        id: user.id,
        email: user.email,
        name: user.name
    }, process.env.JWT_KEY!)

    req.session = {
        jwt: userJwt
    }

    res.status(200).send(user)
}
