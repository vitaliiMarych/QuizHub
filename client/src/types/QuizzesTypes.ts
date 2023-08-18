import { optionValueInSort } from "./HTMLtypes";
import { User } from "./UserTypes";

export interface Quiz {
    _id: string;
    title: string;
    questions: Question[];
    author: User;
    description: string,
    imageUrl: string;
    createdAt: Date;
}

interface Question {
    _id: string;
    question: string,
    options: string[],
    correctOptionIndex: number;
    createdAt: Date;
}

export enum QuizzesActionType {
    FETCH_QUIZZES = 'FETCH_QUIZZES',
    FETCH_QUIZZES_SUCCESS = 'FETCH_QUIZZES_SUCCESS',
    FETCH_QUIZZES_ERROR = 'FETCH_QUIZZES_ERROR',
    SORT_QUIZZES = 'SORT_QUIZZES',
    SELECT_QUIZZES = 'SELECT_QUIZZES',
}

export interface QuizzesState {
    allQuizzes: Quiz[];
    quizzesForRender: Quiz[];
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

interface QuizzesActionSort {
    type: QuizzesActionType.SORT_QUIZZES;
    payload: optionValueInSort;
}

interface QuizzesActionSelect {
    type: QuizzesActionType.SELECT_QUIZZES;
    payload: string;
}

export type QuizzesAction = QuizzesActionFetch | QuizzesActionFetchSuccess | QuizzesActionFetchError |
                            QuizzesActionSelect | QuizzesActionSort;
