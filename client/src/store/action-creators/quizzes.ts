import { Dispatch } from "react";
import { QuizzesAction, QuizzesActionType } from "../../types/QuizzesTypes";
import axios from '../../axios/myAxios';
import { optionValueInSort } from "../../types/HTMLtypes";

export const fetchQuizzes = () => {
    return async (dispatch: Dispatch<QuizzesAction>) => {
        try {
            dispatch({type: QuizzesActionType.FETCH_QUIZZES});

            const response = await axios.get('quiz');
            dispatch({type: QuizzesActionType.FETCH_QUIZZES_SUCCESS, payload: response.data});

        } catch (err) {
            dispatch({
                type: QuizzesActionType.FETCH_QUIZZES_ERROR,
                payload: 'Error in loading quizzes'
            })
        }
    }
}

export const selectAndSortQuizzes = (findPart:string, type: optionValueInSort) => {
    return async (dispatch: Dispatch<QuizzesAction>) => {
        dispatch({type: QuizzesActionType.SELECT_QUIZZES, payload: findPart});
        dispatch({type: QuizzesActionType.SORT_QUIZZES, payload: type});
    }
}

