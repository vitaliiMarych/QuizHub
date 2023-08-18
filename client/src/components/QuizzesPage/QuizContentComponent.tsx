import React, { useState } from 'react';
import QuizzesListComponent from './QuizzesListComponent';
import cl from './style/Quizzes.module.css';
import QuizzesFindComponent from './QuizFindComponent';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { Quiz } from '../../types/QuizzesTypes';
import { optionValueInSort } from '../../types/HTMLtypes';


const QuizzesContent = () => {
  const {quizzesForRender, loadingQuizzes, errorQuizzes} = useTypedSelector(state => state.quizzes)
  const {fetchQuizzes} = useActions();

  React.useEffect( () => {
    fetchQuizzes();
  }, []);

  return (
    <div className={cl.quizzes}>
      <div className={cl.quizzes_content}>
          <QuizzesFindComponent/>
          <QuizzesListComponent quizzes={quizzesForRender} errorQuizzes={errorQuizzes} loadingQuizzes={loadingQuizzes}/>
      </div>
    </div>

  );
}

export default QuizzesContent;