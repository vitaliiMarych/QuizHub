import React from 'react';
import { Quiz } from '../../types/QuizzesTypes';
import StandartImage from './image/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'
import cl from './style/Quizzes.module.css';

interface QuizComponentProps {
    quiz: Quiz,
}

const QuizItemComponent: React.FC<QuizComponentProps> = ({
    quiz,

}) => {

  const haveImg = quiz.imageUrl === '';

  const returnImage = (path:string) => { 
    return <img className={cl.quiz_image} alt='' src={path}></img>
  }


  const date = new Date(quiz.createdAt).toLocaleDateString();

  return (
    // <div className={cl.quiz_item_wrapper}>
      <a href='' className={cl.quiz_item}>
        <div className={cl.quiz_item_info}>
          <img className={cl.quiz_item_image} src={StandartImage}></img>
          
          <div className={cl.quiz_item_title}>{quiz.title}</div>
          <div className={cl.quiz_item_desc}>{quiz.description}</div>
        </div>

        <div className={cl.additional_info}>
            <div className={cl.quiz_item_author}>{quiz.author.fullname}</div>
            <div className={cl.quiz_item_created}>{date}</div>
        </div>
      </a>
    // </div>
  );
}

export default QuizItemComponent;