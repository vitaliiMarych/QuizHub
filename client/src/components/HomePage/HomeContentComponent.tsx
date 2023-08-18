import React from 'react';
import HomeButton from '../UI/myButton/myButton';
import cl from './style/Home.module.css';


const HomeContentComponent = () => {
  return (
    <div className={cl.home}>
      <div className={cl.home_content}>
        <div className={cl.home_content_title}>
          <h1 className={cl.home_content_title_1}>Quiz</h1>
          <h1 className={cl.home_content_title_2}>Hub</h1>
        </div>

        <div className={cl.home_content_desc}>
          <p className={cl.home_content_paragraph}>
              QuizHub - is a web application that allows users to create and take online quizzes. The application provides an opportunity to create questions, determine the correct answers, create tests on various topics and take them in real time.
          </p>
        </div>

        <a href='/quizzes' className={cl.home_content_button_wrapper}>
          <HomeButton size='big'>
            Start
          </HomeButton>
        </a>
      </div>
    </div>
    );
}

export default HomeContentComponent;