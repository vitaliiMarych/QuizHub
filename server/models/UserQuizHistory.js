
import mongoose from 'mongoose';

const UserQuizHistorySchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            require: true,
        },

        quiz: {
            type: mongoose.Types.ObjectId,
            ref: 'Quiz',
            require: true,
        },

        score: {
            type: Number,
            default: 0,
        }

    },
    {
        timestamps: true
    }
);

export default mongoose.model('UserQuizHistory', UserQuizHistorySchema);