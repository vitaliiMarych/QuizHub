import mongoose from 'mongoose';

const QuizSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
        },

        description: {
            type: String,
            require: true,
        },

        questions: {
            type: Array({
                type: mongoose.Types.ObjectId,
                ref: 'Question',
            })
        },

        author: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: true
        },

        imageUrl: {
            type: String,
        }

    },
    {
        timestamps: true
    }
);

export default mongoose.model('Quiz', QuizSchema);