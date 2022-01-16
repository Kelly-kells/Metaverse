import React, { useState } from "react";
import {  NavLink } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo">
          <img src="/images/vector-logo.png" alt="" />
          
        </NavLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
          <NavLink to="/"
             activeclassName="active" id="nav-links"
             onClick={handleClick}>
              Market place
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/pack" 
            activeclassName="active" id="nav-links"
            onClick={handleClick}>
              Packs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/metaverse" 
            activeclassName="active" id="nav-links"
            onClick={handleClick}>
              Metaverse
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Yesp-token" 
            activeclassName="active" id="nav-links"
            onClick={handleClick}>
              Yesp Token
            </NavLink>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;