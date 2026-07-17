import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative min-h-screen w-full flex flex-col justify-between px-6 py-8 md:px-16 md:py-12 overflow-hidden bg-cover bg-center bg-no-repeat font-sans"
      style={{
        backgroundImage: `url('/photos/person-working-at-desk-in-modern-office-photo.jpg')`
      }}
    >
      {/* Dark gradient overlay to ensure text contrast and premium feel */}
      {/* <div className="absolute inset-10 bg-gradient-to-r from-black/90 via-black/75 to-transparent z-0"></div> */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Top Navigation / Logo */}
      <div className="relative z-10 w-full flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Custom golden geometric overlapping logo */}
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/http://www.w3.org/2000/svg">
            <path d="M12 2L3 11L12 20L21 11L12 2z" stroke="#ECC94B" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M12 5.5L6.5 11L12 16.5L17.5 11L12 5.5z" stroke="#D69E2E" strokeWidth="1.5" strokeLinejoin="round" opacity="0.8" />
            <path d="M12 9L9 11L12 13L15 11L12 9z" stroke="#B7791F" strokeWidth="1.5" strokeLinejoin="round" opacity="0.6" />
          </svg>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col justify-center items-start flex-grow max-w-4xl mt-16 md:mt-24">
        {/* Name Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white mb-8">
          Kushagra Gupta
        </h1>

        {/* Roles/Descriptions */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide mb-1">
            FullStack Developer
          </h2>
          <p className="text-xs md:text-sm font-semibold tracking-[0.25em] text-neutral-400 uppercase">
            CS UNDERGRAD
          </p>
        </div>

        {/* Glassmorphic Download Resume Button with Aurora Video background */}
        <div className="relative mb-8 group">
          {/* External Aurora Mesh Glow (Teal/Emerald/Sky) */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 via-emerald-400 to-sky-500 rounded-full blur-md opacity-25 group-hover:opacity-75 transition duration-500 group-hover:duration-300 group-hover:-translate-y-1"></div>
          
          <a
            href="/resume.pdf"
            download
            className="relative inline-flex items-center gap-12 px-8 py-3.5 rounded-full border border-white/20 bg-slate-950/30 hover:border-white/40 transition-all duration-500 backdrop-blur-md hover:-translate-y-1 text-white z-10 overflow-hidden"
          >
            {/* Background looping aurora video */}
            <video 
              src="/videos/Aurora.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-85 transition-opacity duration-500 -z-10"
            />
            
            <span className="text-lg font-medium tracking-wide z-10">Resume</span>
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/15 group-hover:bg-white/25 transition-colors duration-300 z-10">
              <svg className="w-4 h-4 text-white transform group-hover:translate-y-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </span>
          </a>
        </div>

        {/* Contact Email */}
        <a
          href="mailto:kushagra2808gupta@gmail.com"
          className="text-base text-neutral-300 hover:text-white transition-colors duration-300 tracking-wide mb-8"
        >
          kushagra2808gupta@gmail.com
        </a>

        {/* Social Links */}
        <div className="flex items-center gap-6 mt-2">
          {/* LinkedIn */}
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white hover:scale-110 transition-all duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </a>

          {/* Instagram */}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white hover:scale-110 transition-all duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2a3.6 3.6 0 0 0-3.6 3.6v8.4A3.6 3.6 0 0 0 7.6 20h8.4a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m8.4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2m-4 2a4 4 0 1 1-4 4 4 4 0 0 1 4-4m0 2a2 2 0 1 0 2 2 2 2 0 0 0-2-2z" />
            </svg>
          </a>

          {/* Facebook */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white hover:scale-110 transition-all duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3.2 8.3h-1.8v1.8h1.8v2.7h-1.8v4.5h-2.7v-4.5H9.8v-2.7h.9V9.8a2.7 2.7 0 0 1 2.7-2.7h1.8v3.2z" />
            </svg>
          </a>

          {/* Twitter / X */}
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white hover:scale-110 transition-all duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
