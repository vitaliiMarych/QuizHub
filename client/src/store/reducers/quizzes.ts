import { optionValueInSort } from "../../types/HTMLtypes"
import { QuizzesAction, QuizzesActionType, QuizzesState } from "../../types/QuizzesTypes"



const initialState: QuizzesState = {
  allQuizzes: [],
  quizzesForRender: [],
  loadingQuizzes: false,
  errorQuizzes: '',
}

export const quizzesReducer = (state = initialState, action:QuizzesAction) => {
    
  switch (action.type) {
    case QuizzesActionType.FETCH_QUIZZES: {
      return {
        loadingQuizzes: true,
        errorQuizzes: '',
        allQuizzes: [],
        quizzesForRender: [],
      }
    }

    case QuizzesActionType.FETCH_QUIZZES_ERROR: {
      return {
        loadingQuizzes: false,
        errorQuizzes: action.payload,
        allQuizzes: [],
        quizzesForRender: [],
      }
    }

    case QuizzesActionType.FETCH_QUIZZES_SUCCESS : {
      return {
        loadingQuizzes: false,
        errorQuizzes: '',
        allQuizzes: action.payload,
        quizzesForRender: action.payload,
      }
    }

    case QuizzesActionType.SORT_QUIZZES : {
      const sortedQuizzes = [...state.quizzesForRender].sort((a, b) => {
        const valueA = a[action.payload].toString();
        const valueB = b[action.payload].toString();

        if (action.payload === optionValueInSort.date) return -valueA.localeCompare(valueB);

        return valueA.localeCompare(valueB)
      });

      return {...state, quizzesForRender: sortedQuizzes}
    }

    case QuizzesActionType.SELECT_QUIZZES : {
      return {...state, quizzesForRender: state.allQuizzes.filter(str => str.title.includes(action.payload))}
    }
    
    default: 
        return state;
  }

}