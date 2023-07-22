import React from 'react';
import '../styles/Home.css';
import HomeButton from './UI/button/HomeButton';


const HomeMainComponent = () => {
  return (
    <div className="home">
      <div className="home_content">
        <div className="home_content_title">
          <h1 className="home_content_title_1">Quiz</h1>
          <h1 className="home_content_title_2">Hub</h1>
        </div>

        <div className='home_content_desc'>
          <p className="home_content_paragraph">
              QuizHub - is a web application that allows users to create and take online quizzes. The application provides an opportunity to create questions, determine the correct answers, create tests on various topics and take them in real time.
          </p>
        </div>

        <div className="home_content_button_wrapper">
          <HomeButton>
            Start
          </HomeButton>
        </div>
      </div>

    </div>
    );
}

export default HomeMainComponent;