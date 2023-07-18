import mongoose from 'mongoose';

const QuizSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
        },

        questions: {
            type: Array({
                type: mongoose.Types.ObjectId,
                ref: 'Question',
            })
        }

    },
    {
        timestamps: true
    }
);

export default mongoose.model('Quiz', QuizSchema);