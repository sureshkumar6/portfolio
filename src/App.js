import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//components
import NavBar from './components/Nav';
import Intro from './components/Introduction';
import Multiple from './components/Multiple';
import Skills from './components/Skills';
import Projects from './components/Projects';
import SocialMedia from './components/SocialMedia';
import Resume from './components/Resume';
import Aicontent from './components/Aicontent';

//files
import bio1 from './Images/working.png';
import bio from './Images/bio.png';


function App() {
  const introData = {
    title: "LET ME INTRODUCE MYSELF",
    paragraphs: [
      " A tech enthusiast with a love for programming...",
      "I enjoy coding and solving coding-related issues, particularly in languages such as C, C++, Python, Node.js, and React",
      "I have completed my BCA from IMS Noida, CCS University.",
      "Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks  like React.js and Next.js"
    ],
    imageSrc: bio,
    altText: "introduction"
  };

  const data1 = {
    title: "Know Who I'M",
    paragraphs: [
      "Hi Everyone, I am Suresh Kumar from Delhi, India.",
      "I have completed my BCA from IMS Noida, CCS University.",
      "I am a technology enthusiast, having explored various fields during my college years. I delved into Artificial Intelligence and Web Development",
      "Apart from coding, some other activities that I love to do!",
      "  -> Playing Games",
      "  -> Creating Content Using Ai Tools Like Stable Diffusion",
      "  -> Driving Cars and Riding Bikes",
      "  -> Travelling"
    ],
    imageSrc: bio1,
    altText: "working-png"
  };

  return (
    <Router>
      <div className="App" id='home'>
        <header className="header">
          <NavBar />
        </header>
        <div className="App-body">
          <Routes>
            <Route path="/" element={<>
              <Intro />
              <Multiple {...introData} id="about" />
              <Multiple {...data1} />
              <Skills />
              <Projects />
              <SocialMedia />
            </>} />
            <Route path='/about' element={<>
              <Multiple {...data1}/>
              <Skills/>
            </>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='Ai' element={<Aicontent/>}/>
            <Route path="/resume" element={<Resume/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
