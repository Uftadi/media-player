import { body } from 'express-validator';

export const signupSchema = [
  body('email')
    .trim()
    .isEmail()
    .withMessage('Email address is not valid')
    .normalizeEmail(),
  body('password')
    .isLength({ min: 8, max: 40 })
    .withMessage('Password must be at least 8 characters long'),
  body('firstName').exists().withMessage('firstName is required').escape(),
  body('lastName').exists().withMessage('lastName is required').escape(),
];
