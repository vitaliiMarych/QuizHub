import { combineReducers } from "redux";
import { quizzesReducer } from "./quizzes";

export const rootReducer = combineReducers({
    quizzes: quizzesReducer
})

export type rootState = ReturnType<typeof rootReducer>;