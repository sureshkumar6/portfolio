import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

import { IoMdMenu, IoMdClose } from "react-icons/io";

const NavBar = () => {
  const [isCollapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  const handlleMenuClick = () => {
    setCollapsed(false);
  };

  return (
    <div className={`Navbar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="toggle-button" onClick={toggleCollapse}>
        <div className="menu-icon">
          {isCollapsed ? <IoMdClose /> : <IoMdMenu />}
        </div>
      </div>
      <ul>
        <li>
          {/* <scrollLink to="home" spy={true} smooth={true} offset={50} duration={500} >Home</scrollLink> */}
          <Link to="/" onClick={handlleMenuClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={handlleMenuClick}>
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={handlleMenuClick}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/Ai" onClick={handlleMenuClick}>
            AI-Content
          </Link>
        </li>
        <li>
          <Link to="/resume" onClick={handlleMenuClick}>
            Resume
          </Link>
        </li>
        <li>
          <Link
            to="https://github.com/sureshkumar6"
            target="_blank"
            onClick={handlleMenuClick}
          >
            GitHub
          </Link>
        </li>
        <li>
          <Link
            to="https://forms.gle/n8W7woBh6L4pzwjR7"
            target="_blank"
            onClick={handlleMenuClick}
          >
            Feedback
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
