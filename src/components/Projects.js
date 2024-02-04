import React, { useState } from "react";
import project1 from '../Images/working.png'
import project2 from '../Images/JCU_MDS_July2.webp'
import './Projects.css'
const projectData = [
  // Define your project data here
  {
    id: 1,
    title: "Dynamic Weather App",
    description: "This project is a Weather App designed to provide real-time weather information for any location. Users can input a specific location, and the app retrieves and displays details such as temperature, wind speed, atmospheric pressure, and humidity. Additionally, the app enhances user experience by dynamically changing the background image based on the entered weather conditions.",
    image: project1, // Replace with actual image file name
    githubLink: "https://github.com/project1",
    category: "small",
  },
  {
    id: 2,
    title: "ChatGPT API with Advanced Features",
    description: "This project involves the development of a ChatGPT API that empowers users to harness the capabilities of GPT-3.5 and additional advanced features. Users can generate images, leverage text-to-speech functionality, and interact with ChatGPT for tasks beyond traditional text-based conversations. The API supports extended features, including Vision ChatGPT 4, allowing users to explore innovative applications that combine natural language processing with visual and auditory elements.",
    image: project2, // Replace with actual image file name
    githubLink: "https://github.com/project2",
    category: "big",
  },
  {
    id: 3,
    title: "User-friendly Blogger Platform",
    description: "This project involves the creation of a user-friendly Blogger platform, allowing users to seamlessly engage in the blogging experience. Users can sign up and log in to the platform, where they gain the ability to compose, edit, and publish articles or posts. The platform prioritizes a smooth and intuitive user interface, encouraging content creation and sharing. With features like account management, article drafting, and publishing capabilities, this Blogger platform aims to provide an accessible space for individuals to share their thoughts and insights with a wider audience.",
    image: project1, // Replace with actual image file name
    githubLink: "https://github.com/project1",
    category: "mid-range",
  },
  {
    id: 4,
    title: "WazirX Crypto App",
    description: "The WazirX Crypto App is designed to provide users with real-time information about 10 cryptocurrencies. Users can access details such as the latest market price, buy and sell prices, and trading volume for each of the selected cryptocurrencies. The app aims to offer a simplified and efficient interface, allowing users to stay informed about the crypto market trends. With a focus on essential information, this app caters to users interested in tracking key metrics for popular cryptocurrencies on the WazirX platform.",
    image: project1, // Replace with actual image file name
    githubLink: "https://github.com/project1",
    category: "small",
  },
  {
    id: 5,
    title: "Analysis and Recognition of Cancer Regions",
    description: "This is an UGP i.e, Undergraduate project, worked under prof. of IIT Kanpur Prof. Tushar Sandhan. Deal with HAM10000 datasets for various type of cancer detection and recognition. Use TensorFlow and Pytorch in the project",
    image: project1, // Replace with actual image file name
    githubLink: "https://github.com/project1",
    category: "big",
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects =
    selectedCategory === "all"
      ? projectData
      : projectData.filter((project) => project.category === selectedCategory);

  return (
    <div id="projects">
      <h1>My Projects</h1>
      <h6>Here are a few projects I've worked on recently</h6>

      <div className="project-btn">
        <button onClick={() => handleCategoryChange("all")}>All Projects</button>
        <button onClick={() => handleCategoryChange("small")}>Small Projects</button>
        <button onClick={() => handleCategoryChange("mid-range")}>Mid-range Projects</button>
        <button onClick={() => handleCategoryChange("big")}>Big Projects</button>
      </div>

      <div className="projects-container">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-content">
            <img src={project.image} alt={project.title} />
            <h5>{project.title}</h5>
            <p>{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              GitHub Link
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;