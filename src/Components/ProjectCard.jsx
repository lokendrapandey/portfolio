import React, { useState } from "react";
import { Transition } from "@headlessui/react";

const ProjectCard = ({ title, description, images, sourceCodeLink }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white" >
      <div className="relative h-64">
        <div className="flex justify-between absolute top-1/2 transform -translate-y-1/2 w-full z-10" >
          <button
            onClick={handlePrevious}
            className="bg-gray-900 text-white p-2 rounded-l hover:bg-gray-700 transition duration-300"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-900 text-white p-2 rounded-r hover:bg-gray-700 transition duration-300"
          >
            &gt;
          </button>
        </div>
        {images.map((image, index) => (
          <Transition
            key={index}
            show={index === currentIndex}
            enter="transition-opacity duration-700"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-700"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <img
              className="w-full h-full object-cover rounded-t-lg"
              src={image}
              alt={`${title} screenshot ${index + 1}`}
            />
          </Transition>
        ))}
      </div>
      <div className="px-6 py-4 text-center bg-gray-900">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-300 text-base mb-4">{description}</p>
        <a
          href={sourceCodeLink}
          className="inline-block bg-purple-700 hover:bg-purple-900 text-white font-semibold py-2 px-4 rounded transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;








// // src/components/ProjectCard.js
// import React, { useState } from "react";
// import { Transition } from "@headlessui/react";

// const ProjectCard = ({ title, description, images, sourceCodeLink }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
//       <div className="relative h-64">
//         <div className="flex justify-between absolute top-1/2 transform -translate-y-1/2 w-full z-10">
//           <button
//             onClick={handlePrevious}
//             className="bg-gray-800 text-white p-2 rounded-l"
//           >
//             &lt;
//           </button>
//           <button
//             onClick={handleNext}
//             className="bg-gray-800 text-white p-2 rounded-r"
//           >
//             &gt;
//           </button>
//         </div>
//         {images.map((image, index) => (
//           <Transition
//             key={index}
//             show={index === currentIndex}
//             enter="transition-opacity duration-500"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="transition-opacity duration-500"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <img
//               className="w-full h-full object-cover"
//               src={image}
//               alt={`${title} screenshot ${index + 1}`}
//             />
//           </Transition>
//         ))}
//       </div>
//       <div className="px-6 py-4 text-center">
//         <div className="font-bold text-xl mb-2">{title}</div>
//         <p className="text-gray-700 text-base mb-4">{description}</p> {/* Added description */}
//         <a
//           href={sourceCodeLink}
//           className="text-blue-500 hover:text-blue-700"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           View Source Code
//         </a>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;
