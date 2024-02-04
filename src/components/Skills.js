// Skills.js
import React from "react";
import "./skills.css";
import {
  SiCplusplusbuilder,
  SiMongodb,
  SiNotepadplusplus,
} from "react-icons/si";
import {
  FaReact,
  FaHtml5,
  FaGithub,
  FaPython,
  FaWordpress,
  FaWindows,
} from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandVscode } from "react-icons/tb";

const skillsIcon = [
  { icon: <SiCplusplusbuilder /> },
  { icon: <FaReact /> },
  { icon: <DiNodejs /> },
  { icon: <IoLogoJavascript /> },
  { icon: <FaHtml5 /> },
  { icon: <FaGithub /> },
  { icon: <FaPython /> },
  { icon: <FaWordpress /> },
  { icon: <SiMongodb /> },
];

const toolsIcon = [
  { icon: <FaWindows /> },
  { icon: <TbBrandVscode /> },
  { icon: <SiNotepadplusplus /> },
];

const Skills = () => {
  return (
    <div className="container">
      <h1 className="title">Professional Skillset</h1>
      <div className="icon-container">
        {skillsIcon.map((item, index) => (
          <div key={index} className="icon-wrapper common-icon icon">
            {item.icon}
          </div>
        ))}
      </div>
      <div>
        <h1 className="title">Tools I use</h1>
        <div className="icon-container">
          {toolsIcon.map((item, index) => (
            <div key={index} className="icon-wrapper common-icon icon">
              {item.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
