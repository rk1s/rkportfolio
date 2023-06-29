import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Courses" element={<Courses />} />
      

          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
