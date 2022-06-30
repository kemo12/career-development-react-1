import React from 'react';
import userImg from './../../assets/images/user-img-navbar.jpg';
import './Navbar.css';
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="menu">
        <ul>
          <li>
            <a href="#">Gmail</a>
          </li>
          <li>
            <a href="#">Images</a>
          </li>
        </ul>
      </div>
      <div className="img-container">
        <img src={userImg} alt="user-img" />
      </div>
    </div>
  );
};

export default Navbar;
