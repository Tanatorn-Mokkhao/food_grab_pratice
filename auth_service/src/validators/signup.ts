import { body } from 'express-validator'

export const vlidateSignup = [
    body('email')
        .isEmail()
        .withMessage('Email must bew valid'),
    body('password')
        .trim()
        .isLength({ min: 4, max: 20 })
        .withMessage('Password must be between 4 and 20 charecters'),
    body('name')
        .notEmpty()
        .withMessage('require name')
    
]