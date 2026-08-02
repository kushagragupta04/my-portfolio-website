import React from 'react';

const experience = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Nexarats Technical Solutions Pvt. Ltd.',
    period: 'Jul 2026 – Present',
    description:
      'Re-architected the Tauri IPC bridge from Node.js NAPI to direct C++ FFI by migrating 183 Tauri commands to cross-platform shared libraries. Ported the CSV, JSON, and Excel import/export pipeline from Rust to C++, enabling reliable processing of 1M+ row datasets while reducing peak memory usage by 27% and improving CSV import performance by 14%.',
    tags: [
      'C++',
      'Rust',
      'Tauri',
      'Node.js',
      'FFI',
      'TypeScript'
    ],
  },
  {
    role: 'Research Intern',
    company: 'Indian Institute of Technology Bombay',
    period: 'Jan 2026 – Mar 2026',
    description:
      'Integrated a healthcare-focused backend ML inference API and built a socket-based communication pipeline to stream live inference results. Contributed to IV infusion data annotation workflows, enabling real-time monitoring and reducing analysis turnaround time by 60%.',
    tags: [
      'Python',
      'FastAPI',
      'Machine Learning',
      'Sockets',
      'Backend',
      'Healthcare AI'
    ],
  },
];
const Experience = () => {
  return (
    <section id="experience" className="w-full bg-[#080809] py-10">
      <div className="max-w-3xl mx-auto px-6">

        {/* Parallel Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[11px] font-mono font-semibold text-emerald-400 tracking-wider">03 //</span>
          <h2 className="text-sm md:text-base font-bold text-white uppercase tracking-wider font-sans">
            Work Experience
          </h2>
          <div className="flex-1 flex flex-col gap-1">
            <div className="h-px bg-white/15 w-full" />
            <div className="h-px bg-white/5 w-full" />
          </div>
        </div>

        {/* Timeline List */}
        <div className="space-y-6 pl-1">
          {experience.map((item, i) => (
            <div key={i} className="relative pl-5 border-l-2 border-white/15 hover:border-emerald-400/80 transition-colors duration-300 group">
              {/* Dot marker */}
              <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[#080809] border-2 border-emerald-400 group-hover:bg-emerald-400 transition-all duration-300" />

              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="text-base md:text-[17px] font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {item.role}
                  </h3>
                  <p className="text-xs md:text-sm font-medium text-neutral-400 mt-0.5">
                    {item.company}
                  </p>
                </div>
                <span className="text-[11px] font-mono text-emerald-400/90 border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 rounded">
                  {item.period}
                </span>
              </div>

              <p className="text-xs md:text-sm text-neutral-300 mt-2.5 leading-relaxed">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono text-neutral-400 border border-white/10 bg-white/[0.03] px-2 py-0.5 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
