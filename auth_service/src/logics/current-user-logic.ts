import { Request, Response } from 'express'


export const currentUserLogic = (req: Request,res: Response) => { 
    res.send({currentUser: req.currentUser || null })    
}