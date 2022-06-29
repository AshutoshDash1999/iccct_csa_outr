import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import logo from '../../assets/IEEElogo.png';
// import slogo from '../../assets/Slogo.png';
import iccct from '../../assets/ICCT.png';
import './navbar.css';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links_logo">
        <img src={iccct} style={{ height: '2.5rem', margin: '3px' }} />
      </div>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#about">About</a></p>
          <p><a href="#home">Schedules</a></p>
          <p><a href="#home">Registation</a></p>
          <p><a href="#home">Submission</a></p>
          <p><a href="#wgpt3">Members</a></p>
          <p><a href="#possibility">Contact</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">For Authors</a></p>
            <p><a href="#possibility">Committee</a></p>
            <p><a href="#features">Registration</a></p>
            <p><a href="#blog">Industry Forum</a></p>
            <p><a href="#blog">Contact Us</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
