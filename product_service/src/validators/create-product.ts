import { body } from 'express-validator'

export const validateCreateProduct = [
    body('name')
        .notEmpty()
        .withMessage('required name'),
    body('price')
        .notEmpty()
        .withMessage('required price')
        .bail()
        .isNumeric()
        .withMessage('price must be number'),
    body('quantity')
        .notEmpty()
        .withMessage('required quantity')
        .bail()
        .isNumeric()
        .withMessage('quantity must be number')
]