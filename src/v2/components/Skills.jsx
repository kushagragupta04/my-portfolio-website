import React from 'react';

const skills = {
  'Languages': [
    'Java',
    'Python',
    'JavaScript',
    'TypeScript',
    'SQL',
    'C'
  ],

  'Backend & APIs': [
    'Spring Boot',
    'Node.js',
    'Express',
    'FastAPI',
    'REST APIs',
    'gRPC',
    'JWT Authentication',
    'WebSockets',
    'Microservices'
  ],

  'Frontend': [
    'React',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Vite'
  ],

  'Databases & Caching': [
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'SQLite',
    'DuckDB',
    'SQL Query Optimization',
    'Database Indexing'
  ],

  'Cloud & DevOps': [
    'AWS S3',
    'AWS EC2',
    'AWS Lambda',
    'AWS ECS',
    'AWS EventBridge',
    'Docker',
    'GitHub Actions',
    'CI/CD',
    'Linux'
  ],

  'AI & Machine Learning': [
    'PyTorch',
    'LangGraph',
    'Retrieval-Augmented Generation (RAG)',
    'Tesseract OCR',
    'Pandas',
    'RapidFuzz',
    'CNN'
  ],

  'Distributed Systems & Messaging': [
    'Redis Queues',
    'Event-Driven Architecture',
    'FFmpeg',
    'HLS Streaming'
  ],

  'Developer Tools': [
    'Git',
    'GitHub',
    'Postman',
    'Maven',
    'npm',
    'VS Code'
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="w-full bg-[#080809] py-10">
      <div className="max-w-3xl mx-auto px-6">

        {/* Parallel Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[11px] font-mono font-semibold text-emerald-400 tracking-wider">01 //</span>
          <h2 className="text-sm md:text-base font-bold text-white uppercase tracking-wider font-sans">
            Technical Skills
          </h2>
          <div className="flex-1 flex flex-col gap-1">
            <div className="h-px bg-white/15 w-full" />
            <div className="h-px bg-white/5 w-full" />
          </div>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="group">
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                <h3 className="text-xs md:text-sm font-semibold text-neutral-200 tracking-wide font-sans">
                  {category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 pl-3 border-l border-white/10 hover:border-white/20 transition-colors">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] md:text-xs font-mono text-neutral-300 border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/30 hover:text-white hover:shadow-[0_0_12px_rgba(255,255,255,0.06)] px-2.5 py-1 rounded-md transition-all duration-200 cursor-default"
                  >
                    {skill}
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

export default Skills;
