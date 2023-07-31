
import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema(
    {
        question: {
            type: String,
            require: true,
        },

        options: {
            type: Array(String),
            default: [],
        },

        correctOptionIndex: {
            type: Number,
            require: true,
        }

    },
    {
        timestamps: true
    }
);

export default mongoose.model('Question', QuestionSchema);