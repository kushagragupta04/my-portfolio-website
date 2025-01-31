import { useState, useEffect } from 'react';
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './index.css';

const App = () => {

  const [darkMode, setDarkMode] = useState(true);


  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    document.body.classList.add(`transition-colors`, `duration-500`);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };


  return (
    // the body already has a dark class, see above in this code
    <div className={`transition-colors duration-500 bg-slate-200  dark:bg-black`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode}/>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};
// dark:bg-[#0A0A09]
export default App;
