import { QuizzesAction, QuizzesActionType, QuizzesState } from "../../types/QuizzesTypes"



const initialState: QuizzesState = {
    quizzes: [],
    loadingQuizzes: false,
    errorQuizzes: '',
}

export const quizzesReducer = (state = initialState, action:QuizzesAction) => {
    
    switch (action.type) {
        case QuizzesActionType.FETCH_QUIZZES: {
          return {
            loadingNotes: true,
            notes: [],
          }
        }

        case QuizzesActionType.FETCH_QUIZZES_ERROR: {
          return {
            loadingNotes: false,
            notes: [],
            error: action.payload,
          }
        }

        case QuizzesActionType.FETCH_QUIZZES_SUCCESS : {
          return {
            loadingNotes: false,
            notes: action.payload,
          }
        }
        
        default: 
            return state;
    }

}