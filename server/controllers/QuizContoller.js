
import { validationResult } from 'express-validator';

import QuizModel from '../models/Quiz.js';
import QuestionModel from '../models/Question.js';

export const getOne = async (req,res) => {
    try{

        const quizId = req.params.id;
        const quiz = await QuizModel.findById(quizId).populate('questions').exec();

        res.json(quiz);

    } catch(err){
        console.log(err);
        res.status(404).json({
            message: 'Failed to get quiz'
        })
    }
}

export const create = async (req, res) => {
    try {

        const errors = validationResult(req);

        if (!errors.isEmpty()){
            return res.status(400).json(errors.array());
        }

        const questions = req.body.questions;
        let questionIdArray = [];

        for (const question of questions) {
            const docQuestion = new QuestionModel({
              question: question.question,
              options: question.options,
              correctOptionIndex: question.correctOptionIndex
            });
          
            const savedQuestion = await docQuestion.save();
            questionIdArray.push(savedQuestion._doc._id);
        }

        const doc = new QuizModel({
            title : req.body.title,
            questions : questionIdArray,
        })

        const Quiz = await doc.save();
        res.json(Quiz);

      } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Failed to create'
        })
      }
}

export const getAll = async (req,res) => {
    try{
        const quizzes = await QuizModel.find().populate('questions').exec();

        res.json(quizzes);

    } catch(err){
        console.log(err);
        res.status(404).json({
            message: 'Failed to get quizzes'
        })
    }
}

export const remove = async (req,res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()){
            return res.status(400).json(errors.array());
        }
    
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
        res.status(500).json({ message: 'Failed to delete quiz' });
    }
}

export const update = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
          return res.status(400).json(errors.array());
        }
    
        const quizId = req.params.id;
        const quizData = req.body;
    
        const quiz = await QuizModel.findById(quizId);

        if (!quiz) {
          return res.status(404).json({ message: 'Failed to get quiz' });
        }


        await QuestionModel.deleteMany({ _id: { $in: quiz.questions } });

        let questionIdArray = [];
        for (const question of quizData.questions) {
            const docQuestion = new QuestionModel({
              question: question.question,
              options: question.options,
              correctOptionIndex: question.correctOptionIndex
            });
          
            const savedQuestion = await docQuestion.save();
            questionIdArray.push(savedQuestion._doc._id);
        }

        await QuizModel.findByIdAndUpdate(quizId, 
            {
                title: quizData.title,
                questions: questionIdArray,
            });

        res.json({ success : true });

      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to update quiz' });
      }



}


