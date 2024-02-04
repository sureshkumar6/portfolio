import React from "react";
import Typewriter from "./Typewriter";
import myProfile from "../Images/myProfile.webp";
import "./Intro.css"; // Import the CSS file

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="introText">
        <h2>Hi There!</h2>
        <h2>I'm Suresh Kumar</h2>
        <h2>Studied from IMS Noida</h2>
        <div className="typewriter-container">
          <Typewriter />
        </div>
      </div>
      <div className="profile">
        <img
          src={myProfile}
          alt="Profile-photo"
        />
      </div>
    </div>
  );
};

export default Intro;
