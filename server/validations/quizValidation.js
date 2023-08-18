import { body } from 'express-validator';

export const quizValidation = [
    body('title', 'Bad title format').isLength({min: 5}),
    body('questions', 'Bad question format').isArray({min: 1}),
    body('questions.*.question', 'Question short').isLength({min: 5}),
    body('questions.*.options', 'Min 2 options').isArray({min: 2}),
    body('questions.*.correctOptionIndex', 'Bad index').isInt().notEmpty(),
    body('imageUrl', 'Bad image url').optional().isString(),
    body('description', 'Bad description format').isString().isLength({min:5}),

    body().custom((value, { req }) => {

        const allowedKeys = ['title', 'questions', 'imageUrl', 'description'];
        const extraKeys = Object.keys(req.body).filter(key => !allowedKeys.includes(key));
        
        if (extraKeys.length > 0) {
          throw new Error('Invalid request data');
        }
        return true;
      }),
] 
