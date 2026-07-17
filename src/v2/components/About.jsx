import React, { useRef } from 'react';
import LiquidGlass from 'liquid-glass-react';

const About = () => {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black"
      style={{ minHeight: '200vh' }}
    >
      {/* Scrolling background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/photos/officedesk.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'local',
        }}
      />
      <div className="absolute inset-0 z-0 bg-black/65" />

      {/* ABOUT heading — sticky at top */}
      <div className="sticky top-0 z-10 pt-10 pb-4 px-8 md:px-20 pointer-events-none">
        <h2
          className="text-6xl md:text-8xl font-black uppercase text-white tracking-tight"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          ABOUT
        </h2>
      </div>

      {/* Single sticky LiquidGlass rectangle with all content inside */}
      <div className="sticky top-0 z-20 h-screen flex items-center justify-center px-6 w-full">
        <LiquidGlass
          mouseContainer={sectionRef}
          displacementScale={100}
          blurAmount={10.07}
          saturation={145}
          aberrationIntensity={10}
          elasticity={0}
          cornerRadius={20}
          style={{ width: 'min(800px, 92vw)', display: 'block', margin: '0 auto' }}
        >
          <div className="p-8 md:p-12 flex flex-col gap-8 w-full box-border">
            {/* Name row */}
            <div className="flex items-center gap-4 border-b border-white/15 pb-6">
              <div className="w-1 h-10 rounded-full bg-gradient-to-b from-teal-400 to-sky-500 flex-shrink-0" />
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Kushagra Gupta</h3>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-teal-400 mt-1">
                  FullStack Developer · CS Undergrad
                </p>
              </div>
            </div>

            {/* About bio */}
            <p className="text-base md:text-lg text-white/85 leading-relaxed font-light">
              I'm a passionate full-stack developer and CS undergraduate who loves turning complex
              ideas into elegant, performant digital experiences. I thrive at the intersection of
              design and engineering — building things that are not just functional, but genuinely
              feel great to use.
            </p>

            {/* Quick stats
            <div className="grid grid-cols-3 gap-4 border-t border-b border-white/10 py-6">
              {[
                { value: '3+', label: 'Years Coding' },
                { value: '10+', label: 'Projects Built' },
                { value: '5+', label: 'Technologies' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center text-center">
                  <span className="text-3xl md:text-4xl font-black text-white">{stat.value}</span>
                  <span className="text-xs text-white/50 uppercase tracking-widest mt-1">{stat.label}</span>
                </div>
              ))}
            </div> */}

            {/* Interests / tags */}
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'Python', 'Machine Learning', 'UI/UX', 'Cloud', 'Open Source'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium text-teal-300 border border-teal-500/30 bg-teal-500/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Contact row */}
            <div className="flex items-center gap-2 text-sm text-white/50">
              <svg className="w-4 h-4 text-teal-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <a
                href="mailto:kushagra2808gupta@gmail.com"
                className="hover:text-white transition-colors duration-200 pointer-events-auto"
              >
                kushagra2808gupta@gmail.com
              </a>
            </div>
          </div>
        </LiquidGlass>
      </div>
    </section>
  );
};

export default About;
