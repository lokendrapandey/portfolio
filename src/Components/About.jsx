import React from 'react';

const About = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-indigo-500 min-h-screen p-8">
    <div className="bg-gradient-to-r from-blue-400 to-indigo-500 min-h-screen p-8">
      {/* <div className="container mx-auto bg-white shadow-2xl rounded-lg p-8 md:p-16 max-w-2xl"> */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Lokendra Pandey</h1>
          <p className="text-lg text-gray-600">Software Engineer & Web Developer</p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">About Me</h2>
          <p className="mt-4 text-gray-700">
            I am a passionate and motivated fresher engineer with a B.Tech in Computer Science Engineering. I am eager to apply my technical skills and knowledge to contribute to innovative projects and grow as a professional in the field of software development.
          </p>
        </div>
        <div className="mt-8" >
          <h2 className="text-2xl font-semibold text-gray-800">Technical Skills</h2>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" >
            <li className="text-gray-800 bg-blue-200 p-4 rounded-lg shadow-md text-center hover:bg-blue-300 transition duration-200">
              Python
            </li>
            <li className="text-gray-800 bg-blue-200 p-4 rounded-lg shadow-md text-center hover:bg-blue-300 transition duration-200">
              Node.js
            </li>
            <li className="text-gray-800 bg-blue-200 p-4 rounded-lg shadow-md text-center hover:bg-blue-300 transition duration-200">
              React.js
            </li>
            <li className="text-gray-800 bg-blue-200 p-4 rounded-lg shadow-md text-center hover:bg-blue-300 transition duration-200">
              JavaScript
            </li>
            <li className="text-gray-800 bg-blue-200 p-4 rounded-lg shadow-md text-center hover:bg-blue-300 transition duration-200">
              Express.js
            </li>
            <li className="text-gray-800 bg-blue-200 p-4 rounded-lg shadow-md text-center hover:bg-blue-300 transition duration-200">
              HTML & CSS
            </li>
            <li className="text-gray-800 bg-blue-200 p-4 rounded-lg shadow-md text-center hover:bg-blue-300 transition duration-200">
              MongoDB
            </li>
            <li className="text-gray-800 bg-blue-200 p-4 rounded-lg shadow-md text-center hover:bg-blue-300 transition duration-200">
              MySQL
            </li>
            <li className="text-gray-800 bg-blue-200 p-4 rounded-lg shadow-md text-center hover:bg-blue-300 transition duration-200">
              Git & GitHub
            </li>
          </ul>
        </div>
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
          <p className="mt-4 text-gray-700">
            I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
