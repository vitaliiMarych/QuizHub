import React from "react";
import Home from '../pages/Home';
import '../styles/App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Quizzes from '../pages/Quizzes';
import Navbar from './UI/navbar/Navbar';


const AppRouter = () => {
    return (
        <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/quizzes' element={<Quizzes/>}/>
            <Route path='/*' element={<Navigate to="/" />}/>
          </Routes>
        </div>
      </BrowserRouter>
    );
}

export default AppRouter;
