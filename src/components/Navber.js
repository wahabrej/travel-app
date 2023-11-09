// Navbar.js
import React from 'react';
import "./Navber.css"
import { Link } from 'react-router-dom';
//import Img from "./images/startup.png"
function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">

        <div className="logo">
          <img src="https://uploads.turbologo.com/uploads/design/preview_image/80437/preview_image20230419-18343-1p5s0y2.png" />
          
        </div>
        
        <ul className="nav-links">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/dest'>Destination</Link></li>
        <li><Link to='/About'>About</Link></li>
        <li><Link to='/Contact'>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
