import React from "react";
import resumeImg from "../Images/resume.jpg";
import resumePDF from "../Images/resume.pdf";
import "./resume.css";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Resume.pdf";
    link.click();
  };

  return (
    <div className="resume-container" id="resume">
      <div className="resume-pdf">
        <img src={resumeImg} alt="resume" width="80%" height="500px" />
      </div>
      <div>
        <button onClick={handleDownload}>Donwnload</button>
      </div>
    </div>
  );
};

export default Resume;
