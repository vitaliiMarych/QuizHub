import express from 'express';
import mongoose from 'mongoose';

import { registerValidation } from './validations/authValidation.js';
import { quizValidation } from './validations/quizValidation.js';

import checkAuth from './utils/checkAuth.js';
 
import * as UserController from './controllers/UserController.js';
import * as QuizController from './controllers/QuizContoller.js';

mongoose.connect(
    'mongodb+srv://vitmar170408:LoSZmuEHgLR4tDXw@quizhub.1rl8qlo.mongodb.net/Quizhub?retryWrites=true&w=majority'
    ).then(()=> console.log("DB OK"))
    .catch((err) => console.log("DB ERROR : ", err));

const app = express();

app.use(express.json());

// auth api
app.post('/api/auth/register', registerValidation, UserController.register);
app.post('/api/auth/login', UserController.login);
app.get('/api/auth/me', checkAuth, UserController.getMe);


// quiz api
app.get('/api/quiz/:id', QuizController.getOne);
app.post('/api/quiz', checkAuth, quizValidation, QuizController.create);
app.get('/api/quiz', QuizController.getAll);
app.delete('/api/quiz/:id', checkAuth, QuizController.remove);
app.patch('/api/quiz/:id', checkAuth, QuizController.update);

app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }

    return console.log("Server OK");
})