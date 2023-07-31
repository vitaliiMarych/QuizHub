
interface Quiz {
    title: string;
    questions: Question[];
    author: User;
    imageUrl: string;
    createdAt: Date;
}

interface Question {
    question: string,
    options: string[],
    correctOptionIndex: number
}

export enum QuizzesActionType {
    FETCH_QUIZZES = 'FETCH_QUIZZES',
    FETCH_QUIZZES_SUCCESS = 'FETCH_QUIZZES_SUCCESS',
    FETCH_QUIZZES_ERROR = 'FETCH_QUIZZES_ERROR',
}

export interface QuizzesState {
    quizzes: Quiz[];
    loadingQuizzes: boolean;
    errorQuizzes: string;
}

interface QuizzesActionFetch {
    type: QuizzesActionType.FETCH_QUIZZES;

}

interface QuizzesActionFetchSuccess {
    type: QuizzesActionType.FETCH_QUIZZES_SUCCESS;
    payload: Quiz[];

}

interface QuizzesActionFetchError {
    type: QuizzesActionType.FETCH_QUIZZES_ERROR;
    payload: string;
}

export type QuizzesAction = QuizzesActionFetch | QuizzesActionFetchSuccess | QuizzesActionFetchError