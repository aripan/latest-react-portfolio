import React, { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div>
      <header>
        <div
          onClick={toggleMenu}
          className={`menu-btn ${showMenu ? "close" : ""}`}
          // className="menu-btn"
        >
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </div>

        <nav className={`menu ${showMenu ? "show" : ""}`}>
          <div className={`menu-branding ${showMenu ? "show" : ""}`}>
            <div className="portrait"></div>
          </div>
          <ul className={`menu-nav ${showMenu ? "show" : ""}`}>
            <li className={`nav-item current ${showMenu ? "show" : ""}`}>
              <a href="#!" className="nav-link">
                Home
              </a>
            </li>
            <li className={`nav-item ${showMenu ? "show" : ""}`}>
              <a href="#!" className="nav-link">
                About Me
              </a>
            </li>
            <li className={`nav-item ${showMenu ? "show" : ""}`}>
              <a href="#!" className="nav-link">
                My Work
              </a>
            </li>
            <li className={`nav-item ${showMenu ? "show" : ""}`}>
              <a href="#!" className="nav-link">
                How To Reach Me
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
