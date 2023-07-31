import { UserController } from '../controllers/index.js';
import { registerValidation, loginValidation } from '../validations/authValidation.js';
import { checkAuth, handleValidationErrors } from '../utils/index.js';
import express from 'express';

const router = express.Router();

router.post('/register', registerValidation, handleValidationErrors, UserController.register);

router.post('/login', loginValidation, handleValidationErrors, UserController.login);

router.get('/me', checkAuth, UserController.getMe);

export default router;