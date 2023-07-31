import { Dispatch } from "react";
import { QuizzesAction, QuizzesActionType } from "../../types/QuizzesTypes";
import axios from '../../axios/myAxios'

export const fetchQuizzes = () => {
    return async (dispatch: Dispatch<QuizzesAction>) => {
        try {
            dispatch({type: QuizzesActionType.FETCH_QUIZZES});

            const response = await axios.get('quizzes');
            console.log(response.data);
            dispatch({type: QuizzesActionType.FETCH_QUIZZES_SUCCESS, payload: response.data});

        } catch (err) {
            dispatch({
                type: QuizzesActionType.FETCH_QUIZZES_ERROR,
                payload: 'Error in loading quizzes'
            })
        }
    }
}
