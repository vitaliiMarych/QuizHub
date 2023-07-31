import { QuizController } from '../controllers/index.js';
import { checkAuth, handleValidationErrors } from '../utils/index.js';
import { quizValidation } from '../validations/quizValidation.js';
import express from 'express';

const router = express.Router();

router.get('/:id', QuizController.getOne);

router.post('/', checkAuth, quizValidation, handleValidationErrors, QuizController.create);

router.get('/', QuizController.getAll);

router.delete('/:id', checkAuth, QuizController.remove);

router.patch('/:id', checkAuth, quizValidation, handleValidationErrors, QuizController.update);


export default router;