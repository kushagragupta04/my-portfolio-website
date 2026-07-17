import React from 'react';
import Hero from './components/Hero';
import About from './components/About';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-yellow-500/30 selection:text-yellow-200">
      <Hero />
      <About />
    </div>
  );
};

export default App;
