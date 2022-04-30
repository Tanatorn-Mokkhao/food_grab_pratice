import { body } from 'express-validator'

export const validateSignin = [
    body('email')
        .isEmail()
        .withMessage('Email must bew valid'),
    body('password')
        .trim()
        .notEmpty()
        .withMessage('You must suppy a password')
]