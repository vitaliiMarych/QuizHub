import QuestionModel from '../models/Question.js';

export default async (questions, session) => {
    let response = {
        success: false,
        questionIdArray: [],
    };

    try {
        for (const question of questions) {
            const docQuestion = new QuestionModel({
              question: question.question,
              options: question.options,
              correctOptionIndex: question.correctOptionIndex
            });
          
            const savedQuestion = await docQuestion.save({ session: session });
            response.questionIdArray.push(savedQuestion._doc._id);
        }
        
        response.success = true;

    } catch (err) {
        console.log(err);

    } finally {
        return response;
    }
}

