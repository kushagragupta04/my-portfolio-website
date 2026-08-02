import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import StatsCards from './components/StatsCards';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-[#080809] text-white font-sans antialiased">
      <Hero />
      <Skills />
      <StatsCards />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
};

export default App;
