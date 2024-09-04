import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-indigo-500 min-h-screen flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-5xl font-bold text-white mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg text-white mb-8">
        I'm Lokendra Pandey, a passionate Software Engineer and Web Developer.
      </p>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
        <Link to="/about" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          About Me
        </Link>
        <Link to="/projects" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          My Projects
        </Link>
        <Link to="/contact" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          Contact Me
        </Link>
      </div>
      <footer className="mt-12">
        <p className="text-white text-sm">© 2024 Lokendra Pandey. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
