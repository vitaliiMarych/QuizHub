import { body } from 'express-validator';

export const registerValidation = [
    body('email', 'Bad email format').isEmail(),
    body('fullname', 'FullName at least 3 characters').isLength({min: 3}),
    body('password', 'Password at least 5 characters').isLength({min: 5}),
    body('avatarUrl', 'Bad avatar url').optional().isURL(),
];

export const loginValidation = [
    body('email', 'Bad email format').isEmail(),
    body('password', 'Password at least 5 characters').isLength({min: 5}),
]