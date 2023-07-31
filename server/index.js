import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import multer from 'multer';

import quizRouter from './routes/quizRouter.js';
import authRouter from './routes/authRouter.js'
import checkAuth from './utils/checkAuth.js';

mongoose.connect(
    'mongodb+srv://vitmar170408:LoSZmuEHgLR4tDXw@quizhub.1rl8qlo.mongodb.net/Quizhub?retryWrites=true&w=majority'
    ).then(()=> console.log("DB OK"))
    .catch((err) => console.log("DB ERROR : ", err));

const app = express();

app.use(express.json());
app.use(cors());

// Multer
const storage = multer.diskStorage({
    destination: (_, __, cb) => {
        cb(null, 'uploads');
    },

    filename: (_, file, cb) => {
        cb(null, file.originalname);
    }
})

const upload = multer({ storage: storage});

// API
app.post('/api/upload', checkAuth, upload.single('image'), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`
    })
})

app.use('/api/auth', authRouter);

app.use('/api/quiz', quizRouter);


app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }

    return console.log("Server OK");
})