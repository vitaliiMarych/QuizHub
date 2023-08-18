
import QuizModel from '../models/Quiz.js';
import QuestionModel from '../models/Question.js';
import addQuestions from '../utils/addQuestions.js';
import mongoose from 'mongoose';

export const getOne = async (req,res) => {
    try{

        const quizId = req.params.id;
        const quiz = await QuizModel.findById(quizId).populate(['questions', 'author']).exec();

        res.json(quiz);

    } catch(err){
        console.log(err);
        res.status(404).json({
            message: 'Failed to get quiz'
        })
    }
}

export const create = async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const response = await addQuestions(req.body.questions, session);
        if (!response.success) {
            throw new Error('Failed to add questions');
        }

        const doc = new QuizModel({
            title : req.body.title,
            questions : response.questionIdArray,
            author: req.userId,
            description: req.body.description,
            imageUrl: req.body.imageUrl
        });

        const Quiz = await doc.save({ session: session });
        await session.commitTransaction();
        res.json(Quiz);

      } catch (err) {
        console.log(err);
        await session.abortTransaction();
        res.status(500).json({
            message: 'Failed to create'
        })

      } finally {
        session.endSession();
      }
}

export const getAll = async (req,res) => {
    try{
        const quizzes = await QuizModel.find().populate(['questions', 'author']).exec();

        res.json(quizzes);

    } catch(err){
        console.log(err);
        res.status(404).json({
            message: 'Failed to get quizzes'
        })
    }
}

export const remove = async (req,res) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {    
        const quizId = req.params.id;
    
        const quiz = await QuizModel.findById(quizId);
        if (!quiz) {
          return res.status(404).json({ message: 'Failed to get quiz' });
        }
    
        await QuestionModel.deleteMany({ _id: { $in: quiz.questions } });
        await QuizModel.findByIdAndDelete(quizId);
    
        res.json({ success: true });

    } catch (err) {
        console.error(error);
        await session.abortTransaction();
        res.status(500).json({ message: 'Failed to delete quiz' });
    
    } finally {
        session.endSession();
    }
}

export const update = async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    
    try {    
        const quizId = req.params.id;
    
        const quiz = await QuizModel.findById(quizId);

        if (!quiz) {
          return res.status(404).json({ message: 'Failed to get quiz' });
        }

        await QuestionModel.deleteMany({ _id: { $in: quiz.questions } });

        const response = await addQuestions(req.body.questions, session);
        if (!response.success) {
            throw new Error('Failed to add questions');
        }

        await QuizModel.findByIdAndUpdate(quizId, 
            {
                title: req.body.title,
                questions: response.questionIdArray,
                description: req.body.description,
                imageUrl: req.body.imageUrl,
            });

        await session.commitTransaction();
        res.json({ success : true });

      } catch (err) {
        console.error(err);
        await session.abortTransaction();
        res.status(500).json({ message: 'Failed to update quiz' });

      } finally {
        session.endSession();
      }
}
