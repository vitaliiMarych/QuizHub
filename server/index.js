import express from 'express';
import mongoose from 'mongoose';

import { registerValidation, loginValidation } from './validations/authValidation.js';
import { quizValidation } from './validations/quizValidation.js';

import { checkAuth, handleValidationErrors } from './utils/index.js';

import { UserController, QuizController } from './controllers/index.js';


mongoose.connect(
    'mongodb+srv://vitmar170408:LoSZmuEHgLR4tDXw@quizhub.1rl8qlo.mongodb.net/Quizhub?retryWrites=true&w=majority'
    ).then(()=> console.log("DB OK"))
    .catch((err) => console.log("DB ERROR : ", err));

const app = express();

app.use(express.json());

// auth api
app.post('/api/auth/register', registerValidation, handleValidationErrors, UserController.register);
app.post('/api/auth/login', loginValidation, handleValidationErrors, UserController.login);
app.get('/api/auth/me', checkAuth, UserController.getMe);


// quiz api
app.get('/api/quiz/:id', QuizController.getOne);
app.post('/api/quiz', checkAuth, quizValidation, handleValidationErrors, QuizController.create);
app.get('/api/quiz', QuizController.getAll);
app.delete('/api/quiz/:id', checkAuth, QuizController.remove);
app.patch('/api/quiz/:id', checkAuth, quizValidation, handleValidationErrors, QuizController.update);

app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }

    return console.log("Server OK");
})