import React from 'react';
import cl from './Navbar.module.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
      <div className={cl.navbar}>
        <div className={cl.navbar_content}>
          <div className={cl.logo}>
            {/* <img src="https://i.ibb.co/z4z4z4z/logo.png" alt="logo" /> */}
            <h1 className={cl.logo_text}>QuizHub</h1>
          </div>
          <div className={cl.menu}>
            <ul className={cl.links}>
              <li><Link className={cl.link} to="/">Home</Link></li>
              <li><Link className={cl.link} to="/quizzes">Quizzes</Link></li>
              <li><Link className={cl.link} to="#contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Navbar;


