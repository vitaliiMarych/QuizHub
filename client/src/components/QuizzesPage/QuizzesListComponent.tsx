import React from 'react';
import QuizItemComponent from './QuizItemComponent';
import cl from './style/Quizzes.module.css';
import LoadingSpinner from '../UI/loadingSpinner/LoadingSpinner';
import { Quiz } from '../../types/QuizzesTypes';

interface QuizzesListComponentProps {
  quizzes: Quiz[],
  loadingQuizzes: boolean,
  errorQuizzes: string,

}


const QuizzesListComponent:React.FC<QuizzesListComponentProps> = ({
  errorQuizzes,
  loadingQuizzes,
  quizzes,
}) => {

  if (loadingQuizzes){
    return (
      <div className={cl.spinner_container}>
        <LoadingSpinner/>
      </div>
    )
  }

  if (errorQuizzes !== ''){
    return (
      <h1 style={{color:'white'}}>error: {errorQuizzes}</h1>
    )
  }

  const returnNotFound = () => {
    return (
      <h1 style={{textAlign:'center', color:'white'}}>Not Found</h1>
    )
  }

  const returnQuizzes = (quizzes: Quiz[]) => {
    return (
      quizzes.map((quiz) => (
        <QuizItemComponent key={quiz._id} quiz={quiz}></QuizItemComponent>
      ))
    )
  }

  return (
    <div className={cl.quizzes_list}>
      {quizzes.length === 0 ? returnNotFound() : returnQuizzes(quizzes)}    
    </div>
  );
}

export default QuizzesListComponent;