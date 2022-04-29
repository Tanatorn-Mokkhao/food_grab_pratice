import { Request, Response } from 'express'
import { createNewUser }  from '../repositories/signup'
export const signinUp = async (req: Request, res: Response) => { 
    const user = await createNewUser(req.body)
    
    res.status(201).send(user)
}