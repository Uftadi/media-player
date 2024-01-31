import { body } from 'express-validator';

export const signupSchema = [
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email address is required')
    .if(body('email').notEmpty())
    .isEmail()
    .withMessage('Email address is not valid')
    .normalizeEmail(),

  body('password')
    .exists({ checkFalsy: true })
    .isString()
    .matches(/[a-zA-Z]/)
    .withMessage('Password must contain at least one letter')
    .matches(/[0-9]/)
    .withMessage('Password must contain at least one number')
    .isLength({ min: 8, max: 40 })
    .withMessage('Password must be at least 8 characters long'),

  body('firstName').notEmpty().withMessage('FirstName is required').escape(),

  body('lastName').notEmpty().withMessage('LastName is required').escape(),
];
