import { Request, Response } from 'express'


export const createProduct = async(req: Request, res: Response) => { 
    res.send('mart hello world')
}