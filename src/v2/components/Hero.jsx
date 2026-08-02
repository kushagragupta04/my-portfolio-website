import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="w-full bg-[#080809]">

      {/* ── Cover Photo Container ─────────────────────────────────────────── */}
      <div className="relative w-full h-[260px] md:h-[300px] overflow-hidden">
        {/* Cover image */}
        <img
          src="/photos/person-working-at-desk-in-modern-office-photo.jpg"
          alt="Cover header"
          className="w-full h-full object-cover object-center opacity-65 scale-105 transition-transform duration-700 hover:scale-100"
        />

        {/* Ambient dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-[#080809]" />

        {/* ── Parallel Lines Aesthetic across cover ────────────────────────────── */}
        <div className="absolute inset-x-0 top-1/4 flex flex-col gap-1.5 opacity-25 pointer-events-none">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
        <div className="absolute inset-x-0 top-1/2 flex flex-col gap-1 opacity-15 pointer-events-none">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
        <div className="absolute inset-x-0 bottom-6 flex flex-col gap-1.5 opacity-30 pointer-events-none">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      </div>

      {/* ── Profile Header & Details (Wider Container: max-w-3xl) ───────────────────── */}
      <div className="max-w-3xl mx-auto px-6 -mt-16 md:-mt-20 relative z-10">

        {/* Avatar & Status Badge Row */}
        <div className="flex items-end justify-between gap-4 mb-4 flex-wrap">
          <div className="relative group">
            {/* Ambient avatar glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 to-sky-500/30 rounded-full blur-md opacity-50 group-hover:opacity-100 transition duration-500" />
            <img
              src="/photos/Kushagra_photo.webp"
              alt="Kushagra Gupta"
              className="relative w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-2 border-[#1c1c20] ring-1 ring-white/15 shadow-2xl"
            />
          </div>

          {/* Active Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/25 bg-emerald-950/30 backdrop-blur-sm mb-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono font-medium text-emerald-300 tracking-wide">
              Open for Internships and Full Time Roles 
            </span>
          </div>
        </div>

        {/* Name & Title */}
        <div className="mb-3">
          <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Kushagra Gupta
          </h1>
          <p className="text-sm md:text-base font-medium text-neutral-400 mt-1 flex items-center gap-2">
            <span>Backend Developer</span>
            <span className="text-neutral-600">//</span>
            <span className="text-neutral-400 font-mono text-xs md:text-sm">CS Undergrad</span>
          </p>
        </div>

        {/* Parallel Lines Divider */}
        <div className="w-full flex flex-col gap-1 my-4">
          <div className="h-px w-full bg-white/15" />
          <div className="h-px w-full bg-white/5" />
        </div>

        {/* Bio */}
        <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-normal">
          I build scalable backend systems, distributed applications, and AI-powered products using Java, Spring Boot, Node.js, Python, and AWS. Passionate about designing reliable APIs, event-driven architectures, and solving real-world engineering problems.
        </p>

        {/* Social Links & Resume CTA */}
        <div className="flex items-center gap-3.5 mt-5 flex-wrap">
          {/* GitHub */}
          <a
            href="https://github.com/kushagragupta04"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/25 text-neutral-300 hover:text-white transition-all text-xs md:text-sm font-medium"
            aria-label="GitHub"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            <span>GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/kushagragupta08/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/25 text-neutral-300 hover:text-white transition-all text-xs md:text-sm font-medium"
            aria-label="LinkedIn"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
            <span>LinkedIn</span>
          </a>

          {/* Email */}
          <a
            href="mailto:kushagra2808gupta@gmail.com"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/25 text-neutral-300 hover:text-white transition-all text-xs md:text-sm font-medium"
            aria-label="Email"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <span>Email</span>
          </a>

          {/* Resume View */}
          <a
            href="https://drive.google.com/file/d/1NRof_TmCUJ6wcDMxS9qj1rdZRaPHXQda/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 hover:border-emerald-400 text-emerald-300 hover:text-white transition-all text-xs md:text-sm font-semibold shadow-sm"
          >
            <span>Resume</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </div>

      {/* Parallel Lines Section Transition */}
      <div className="max-w-3xl mx-auto px-6 mt-10">
        <div className="w-full flex flex-col gap-1">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
