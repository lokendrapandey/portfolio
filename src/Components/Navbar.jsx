import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <nav className="bg-blue-600 p-4 w-full sticky top-0 z-50 shadow-lg">
    <nav className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 w-full sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">Lokendra_Pandey</Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
        <ul className={`flex-col md:flex md:flex-row md:space-x-4 absolute md:static bg-gradient-to-r w-full md:w-auto left-0 md:left-auto mt-4 md:mt-0 transition-transform duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
          <li>
            <Link to="/" className="block py-2 text-white hover:text-gray-300 md:py-0">Home</Link>
          </li>
          <li>
            <Link to="/about" className="block py-2 text-white hover:text-gray-300 md:py-0">About</Link>
          </li>
          <li>
            <Link to="/projects" className="block py-2 text-white hover:text-gray-300 md:py-0">Projects</Link>
          </li>
          <li>
            <Link to="/contact" className="block py-2 text-white hover:text-gray-300 md:py-0">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-blue-600 p-4 w-full">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-white font-bold text-xl">
//           Lokendra
//         </div>
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-white focus:outline-none">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//             </svg>
//           </button>
//         </div>
//         <ul className={`flex-col md:flex md:flex-row md:space-x-4 absolute md:static bg-blue-600 w-full md:w-auto left-0 md:left-auto mt-4 md:mt-0 ${isOpen ? 'block' : 'hidden'}`}>
//           <li>
//             <Link to="/" className="block py-2 text-white hover:text-gray-300 md:py-0">Home</Link>
//           </li>
//           <li>
//             <Link to="/about" className="block py-2 text-white hover:text-gray-300 md:py-0">About</Link>
//           </li>
//           <li>
//             <Link to="/projects" className="block py-2 text-white hover:text-gray-300 md:py-0">Projects</Link>
//           </li>
//           <li>
//             <Link to="/contact" className="block py-2 text-white hover:text-gray-300 md:py-0">Contact</Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
