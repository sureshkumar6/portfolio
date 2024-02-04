import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import "./SocialMedia.css";

const socialIcon = [
  { icon: <FaGithub />, link: "https://github.com/sureshkumar6" },
  { icon: <FaTwitter />, link: "https://twitter.com/home" },
  { icon: <FaInstagramSquare />, link: "https://www.instagram.com/suresh_mahtoji/" },
  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/suresh-mahto/" },
  { icon: <SiGmail />, link: "mailto:sureshmahtoji@gmail.com" },
];
const SocialMedia = () => {
  return (
    <div className="social-container">
      <h1 className="social-heading">FIND ME ON</h1>
      <div className="social-icon-container">
        {socialIcon.map((item, index) => (
          <a
            key={index}
            className="social-icon-wrapper"
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
};
export default SocialMedia;
