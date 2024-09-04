import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import 'aos/dist/aos.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;


// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './Components/Navbar';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import Projects from './Components/Projects';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<About />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;











// import { useState } from 'react'
// // import './App.css'
// import Navbar from './Components/Navbar'
// import About from './Components/About'
// import Contact from './Components/Contact'
// import Projects from './Components/Projects'

// function App() {

//   return (
//     <>
//     <Navbar/>
//     <About/>
//     <Projects/>
//     <Contact/>
//     </>
//   )
// }

// export default App
