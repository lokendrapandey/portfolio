// src/pages/Projects.js
import React from "react";
import ProjectCard from "../Components/ProjectCard.jsx";  // Ensure correct import path
import image2 from "../assets/image2.png";
import image1 from "../assets/image1.png";
import image3 from "../assets/image3.png";

import p1 from "../assets/p1.png";
import p11 from "../assets/p11.png";
import p111 from "../assets/p111.png";
import p1111 from "../assets/p1111.png";

import p2 from "../assets/p2.png";
import p22 from "../assets/p22.png";

const projects = [
  {
    title: "Blog Website",
    description: "A full-featured blog application where users can create, read, update, and delete posts. It includes user authentication and image uploads.",
    images: [p1, p11, p111, p1111],
    sourceCodeLink: "https://github.com/lokendrapandey/Blog-App",
  },
  {
    title: "News Website",
    description: "A news aggregation website that fetches articles from various sources and presents them in a user-friendly interface. Users can filter news by categories.",
    images: [image1, image2, image3],
    sourceCodeLink: "https://github.com/lokendrapandey/NewsWebsite",
  },
  {
    title: "Todo App",
    description: "A simple yet efficient todo application allowing users to add, edit, and delete tasks. It helps users manage their daily tasks effectively and this is responsive and easy to use.",
    images: [p2, p22],
    sourceCodeLink: "https://github.com/lokendrapandey/react-projects",
  },
];

const Projects = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-indigo-500 min-h-screen flex flex-col items-center justify-center text-center p-8" >
      <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" >
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title} 
            images={project.images}
            description={project.description}
            sourceCodeLink={project.sourceCodeLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;







