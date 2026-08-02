import React, { useState, useEffect } from 'react';

const projects = [
  {
  name: 'Distributed Video Transcoding Platform',
  description:
    'Distributed, event-driven video transcoding platform that automatically converts uploaded videos into adaptive multi-resolution HLS streams using AWS cloud services, Redis queues, and containerized FFmpeg workers.',

  details: [
    'Designed an event-driven architecture leveraging AWS S3, Lambda, EventBridge, Redis-based job queues, and asynchronous workers to automatically trigger transcoding workflows on every video upload.',

    'Built containerized FFmpeg transcoding workers on AWS ECS Fargate to generate adaptive HLS streams in 480p, 720p, and 1080p with signed URLs for secure media delivery.',

    'Implemented Redis pub/sub for real-time job tracking, live progress updates, rate limiting, and reliable task orchestration while decoupling upload, processing, and delivery into independent scalable services.',

    'Engineered a horizontally scalable backend using Node.js, Express.js, Docker, and MongoDB, enabling resilient asynchronous processing, fault isolation, and cloud-native deployment.',
  ],

  tags: [
    'Node.js',
    'Express.js',
    'AWS S3',
    'AWS Lambda',
    'AWS ECS',
    'EventBridge',
    'Redis',
    'MongoDB',
    'Docker',
    'FFmpeg',
    'HLS',
  ],

  github: 'https://github.com/kushagragupta04/Video-transcoder',
  live: null,
  demo: 'https://www.youtube.com/watch?v=i0EtH3EJCYY',
  image: '/photos/Transcoding.webp',

  burst: [
    '#1a3a2a',
    '#0d2b1e',
    '#2e6b4f',
    '#0a0a0a',
    '#1a3a2a',
    '#0d2b1e',
    '#0a0a0a',
    '#2e6b4f',
  ],
},
  {
    name: 'HyperRAG-X',
    description:
      'Enterprise-grade multi-agent Retrieval-Augmented Generation (RAG) platform with tripartite memory architecture, hybrid retrieval, and intelligent agent orchestration.',
    details: [
      'Designed a 6-node LangGraph workflow with Planner, Adaptive Retrieval, Web Search, Memory Builder, Synthesizer, and Verifier agents, enabling conditional retries and explainable multi-step reasoning.',

      'Implemented a tripartite memory architecture combining a Direct Memory Cache, Qdrant vector database, and NetworkX knowledge graph to optimize latency, semantic retrieval, and multi-hop reasoning across heterogeneous knowledge sources.',

      'Built hybrid retrieval supporting Private, Online, and Hybrid modes with automatic fallback across Tavily, Firecrawl, and DuckDuckGo, improving resilience while grounding responses using both enterprise documents and live web data.',

      'Developed a full-stack platform using FastAPI, React, Supabase Authentication, and Groq Llama 3.3 70B, featuring document ingestion, semantic chunking, force-directed knowledge graph visualization, artifact rendering, and background contradiction detection through the Macrophage Agent.',
    ],
    tags: [
      'Python',
      'FastAPI',
      'LangGraph',
      'LangChain',
      'Groq',
      'Qdrant',
      'NetworkX',
      'React',
      'Supabase',
      'Tailwind CSS',
      'Framer Motion',
    ],
    github: 'https://github.com/kushagragupta04/HyperRAG-X',
    live: null,
    demo: 'https://youtu.be/Z3liL53QTs0',
    image: '/photos/HyperRagX.webp',
    burst: [
      '#2a1a4a',
      '#4b2a8c',
      '#6d4cff',
      '#15151f',
      '#2a1a4a',
      '#4b2a8c',
      '#15151f',
      '#6d4cff',
    ],
  },
  {
  name: 'SafeTrail',
  description:
    'Real-time emergency response platform with live location sharing, geospatial intelligence, AI-powered threat analysis, and low-latency SOS workflows.',

  details: [
    'Architected a real-time emergency response platform using Socket.IO with live location sharing under 200ms latency, continuously streaming user location to trusted contacts during active trips.',

    'Built an asynchronous SOS pipeline using Redis and BullMQ, delivering emergency alerts while maintaining API response times below 150ms during concurrent usage.',

    'Implemented a geospatial intelligence engine using PostgreSQL (PostGIS) to identify nearby hospitals, police stations, and emergency services within a 50km radius in under 50ms, achieving nearly 70% faster location lookups.',

    'Integrated AI-powered route risk analysis, voice-triggered SOS detection, incident reporting, and an interactive Mapbox interface to provide proactive travel safety with offline-capable navigation.',
  ],

  tags: [
    'React',
    'Node.js',
    'Express.js',
    'Socket.IO',
    'PostgreSQL',
    'PostGIS',
    'Redis',
    'BullMQ',
    'Mapbox',
    'AI/ML',
  ],

  github: 'https://github.com/kushagragupta04/safetrail',
  live: 'https://safetrail-safety.vercel.app/',
  demo: null,
  image: '/photos/safetrail.webp',

  burst: [
    '#0d1f3a',
    '#07152b',
    '#1e3d6b',
    '#0a0a0a',
    '#0d1f3a',
    '#1e3d6b',
    '#0a0a0a',
    '#0d2a50',
  ],
},
  {
  name: 'SkillSwap',
  description:
    'Community-driven peer-to-peer learning platform that enables users to exchange skills through real-time collaboration, scheduling, and reputation-based matching.',

  details: [
    'Developed a skill exchange marketplace where users can showcase skills they can teach, discover mentors, and connect with learners through intelligent skill matching.',

    'Implemented real-time messaging and session coordination using Socket.IO, enabling seamless communication between mentors and learners without page refreshes.',

    'Built a karma-based reputation system that rewards successful teaching sessions, improving trust and surfacing highly rated instructors in search results.',

    'Integrated session scheduling with calendar management, email reminders via NodeMailer, responsive dashboards, and secure authentication for a complete peer learning experience.',
  ],

  tags: [
    'React',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Socket.IO',
    'NodeMailer',
  ],

  github: 'https://github.com/kushagragupta04/SkillSwap',
  live: 'https://skillswap-learning.vercel.app/',
  demo: 'https://youtu.be/ZdHsg276cD0',
  image: '/photos/SkillSwap.webp',

  burst: [
    '#1f0d3a',
    '#120826',
    '#4a1e7a',
    '#0a0a0a',
    '#1f0d3a',
    '#4a1e7a',
    '#0a0a0a',
    '#2d1050',
  ],
},
  {
  name: 'Intelligent Gas Detection & Classification',
  description:
    'Transformer-powered industrial safety system that classifies hazardous gases using multimodal MQ sensor data with interpretable self-attention and state-of-the-art accuracy.',

  details: [
    'Designed a custom SensorTransformer leveraging a 2-layer, 4-head Transformer Encoder with self-attention across 7 MQ gas sensors to classify 4 hazardous gas categories from over 6,400 multimodal sensor samples.',

    'Developed a complete ML pipeline including data preprocessing, feature scaling, semantic sensor embeddings, model training, and evaluation while benchmarking against K-Nearest Neighbors, Random Forest, Support Vector Machine, and Logistic Regression baselines.',

    'Implemented attention visualization and gradient attribution to provide interpretable predictions by identifying sensor contributions for every gas classification, enabling explainable AI for industrial safety applications.',

    'Built an interactive analytics dashboard showcasing model performance, confusion matrices, attention heatmaps, architecture visualization, and real-time inference insights, achieving up to ~98.5% classification accuracy.',
  ],

  tags: [
    'Python',
    'PyTorch',
    'Transformer',
    'Self-Attention',
    'Machine Learning',
    'Deep Learning',
    'Scikit-learn',
    'Pandas',
    'NumPy',
    'Industrial AI',
  ],

  github: 'https://github.com/kushagragupta04/Multi-Class-Multimodal-Gas-Detection-using-ML',
  live: null,
  demo: 'https://gas-detection-multimodal.vercel.app/',
  image: '/photos/GasDetection.webp',

  burst: [
    '#0f2b33',
    '#154454',
    '#2b8c99',
    '#0a0a0a',
    '#0f2b33',
    '#154454',
    '#0a0a0a',
    '#2b8c99',
  ],
},
  {
  name: 'InvoSync',

  description:
    'AI-powered invoice and purchase order reconciliation platform that automates OCR extraction, discrepancy detection, and standardized report generation to eliminate manual verification.',

  details: [
    'Built an end-to-end document reconciliation pipeline using Tesseract OCR to extract structured data from scanned invoices and purchase orders, supporting both images and PDF documents.',

    'Implemented intelligent discrepancy detection using RapidFuzz fuzzy matching to identify and correct vendor, quantity, pricing, and item inconsistencies, significantly reducing manual review effort.',

    'Developed a modular Flask backend with dedicated OCR, parsing, comparison, and export services, generating corrected invoice records alongside detailed discrepancy reports in CSV format.',

    'Engineered a responsive React + Vite frontend with secure file uploads, review dashboards, export management, and seamless API integration for an intuitive invoice validation workflow.',
  ],

  tags: [
    'React',
    'Vite',
    'Tailwind CSS',
    'Python',
    'Flask',
    'Tesseract OCR',
    'RapidFuzz',
    'Pandas',
    'Regex',
    'Pillow',
    'pdf2image',
  ],

  github: 'https://github.com/kushagragupta04/InvoSync',
  live: null,
  demo: 'https://youtu.be/r7-kpqDxxr4',
  image: '/photos/InvoSync.webp',

  burst: [
    '#183153',
    '#24476b',
    '#4b83d1',
    '#0a0a0a',
    '#183153',
    '#24476b',
    '#0a0a0a',
    '#4b83d1',
  ],
},
];

/** Build conic-gradient sunburst from an 8-stop palette. */
const buildSunburst = (palette) => {
  const sliceSize = 360 / (palette.length * 2);
  const stops = palette.flatMap((color, i) => {
    const start = i * sliceSize * 2;
    const mid = start + sliceSize;
    const end = mid + sliceSize;
    return [
      `${color} ${start}deg`,
      `${color} ${mid}deg`,
      `${palette[(i + 1) % palette.length]} ${mid}deg`,
      `${palette[(i + 1) % palette.length]} ${end}deg`,
    ];
  });
  return `conic-gradient(from 0deg at 50% 55%, ${stops.join(', ')})`;
};

/* ─── Project Detail Modal ──────────────────────────────────────────────── */
const ProjectModal = ({ project, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  // Prevent body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      style={{ background: 'rgba(0,0,0,0.72)' }}
      onClick={onClose}
    >
      {/* Modal card — liquid glass */}
      <div
        className="relative w-full max-w-6xl rounded-3xl overflow-hidden"
        style={{
          background: 'rgba(18, 18, 22, 0.55)',
          backdropFilter: 'blur(28px) saturate(180%)',
          WebkitBackdropFilter: 'blur(28px) saturate(180%)',
          border: '1px solid rgba(255,255,255,0.13)',
          boxShadow: '0 30px 80px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.1)',
          animation: 'modalIn 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top parallel shimmer line (liquid glass top edge) */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        <div className="flex flex-col md:flex-row min-h-[420px]">

          {/* ── LEFT: Image 1/3 ───────────────────────────── */}
          <div className="md:w-1/3 relative flex-shrink-0 overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none min-h-[240px] md:min-h-0 flex items-center justify-center p-5 bg-black/30 modal-image-smudge">
            {/* Sunburst as background behind image */}
            <div
              className="absolute inset-0"
              style={{ background: buildSunburst(project.burst), opacity: 0.65 }}
            />
            {/* Scrim */}
            <div className="absolute inset-0 bg-black/30" />
            {/* Image (fits container completely without clipping) */}
            <img
              src={project.image}
              alt={project.name}
              onError={(e) => { e.target.style.display = 'none'; }}
              className="relative z-10 max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              style={{ opacity: 0.95 }}
            />
          </div>

          {/* ── RIGHT: Content 2/3 ────────────────────────── */}
          <div className="flex-1 flex flex-col p-6 md:p-7 gap-4 overflow-y-auto" style={{ maxHeight: '80vh' }}>

            {/* Header: Name + close */}
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-lg md:text-xl font-bold text-white leading-tight font-sans">
                {project.name}
              </h2>
              <button
                onClick={onClose}
                className="w-7 h-7 rounded-full border border-white/15 bg-white/[0.06] flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/15 transition-all flex-shrink-0 mt-0.5"
                aria-label="Close"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Parallel line divider */}
            <div className="flex flex-col gap-0.5">
              <div className="h-px bg-white/12" />
              <div className="h-px bg-white/5" />
            </div>

            {/* Short description */}
            <p className="text-sm text-neutral-300 leading-relaxed">
              {project.description}
            </p>

            {/* Detail bullets */}
            {project.details && project.details.length > 0 && (
              <ul className="space-y-2">
                {project.details.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-400 leading-relaxed">
                    <span className="text-emerald-400 font-mono mt-0.5 flex-shrink-0 text-xs">▸</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Spacer */}
            <div className="flex-1" />

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono text-neutral-300 border border-white/12 bg-white/[0.05] px-2.5 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/15 bg-white/[0.06] hover:bg-white/[0.12] text-sm font-medium text-white transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                <span>View Code</span>
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-emerald-500/40 bg-emerald-500/15 hover:bg-emerald-500/25 text-sm font-semibold text-emerald-300 hover:text-white transition-all"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  <span>Live Site</span>
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-amber-500/40 bg-amber-500/15 hover:bg-amber-500/25 text-sm font-semibold text-amber-300 hover:text-white transition-all"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Watch Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom parallel shimmer line */}
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Modal entrance animation */}
      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
};

/* ─── Project Card ──────────────────────────────────────────────────────── */
const ProjectCard = ({ project, isAnyHovered, isThisHovered, onEnter, onLeave, onClick }) => {
  return (
    <div
      className="group relative rounded-xl border border-white/10 bg-[#0f0f11] overflow-hidden cursor-pointer"
      style={{
        transition: 'opacity 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
        opacity: isAnyHovered && !isThisHovered ? 0.38 : 1,
        boxShadow: isThisHovered ? '0 8px 40px rgba(0,0,0,0.6)' : 'none',
        borderColor: isThisHovered ? 'rgba(255,255,255,0.28)' : 'rgba(255,255,255,0.1)',
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      {/* ── Image preview area ───────────────────────────── */}
      <div className="relative overflow-hidden" style={{ height: '200px' }}>

        {/* Conic sunburst background */}
        <div
          className="absolute inset-0"
          style={{
            background: buildSunburst(project.burst),
            opacity: isThisHovered ? 1 : 0,
            transition: 'opacity 0.15s ease',
          }}
        />

        {/* Screenshot container — shrinks to bottom on hover */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            overflow: 'hidden',
            zIndex: 20,
          }}
        >
          <img
            src={project.image}
            alt={project.name}
            style={{
              width: '90%',
              height: isThisHovered ? '76%' : '80%',
              objectFit: 'contain',
              transition: 'all .35s ease',
            }}
          />
        </div>

        {/* Project name — moves to center on hover */}
        <div
          className="absolute top-3 z-30"
          style={{
            left: isThisHovered ? '50%' : '14px',
            transform: isThisHovered ? 'translateX(-50%)' : 'translateX(0)',
            transition: 'left 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          <span className="text-sm font-semibold text-white drop-shadow-lg font-sans" style={{ whiteSpace: 'nowrap' }}>
            {project.name}
          </span>
        </div>
      </div>

      {/* ── Card Info ─────────────────────────────── */}
      <div className="p-3.5 flex flex-col gap-2 border-t border-white/6">

        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[15px] md:text-base font-bold text-white leading-tight font-sans">
            {project.name}
          </h3>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-lg border border-white/10 bg-white/[0.04] flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 flex-shrink-0 transition-all"
            aria-label="GitHub"
            onClick={(e) => e.stopPropagation()}
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
        </div>

        <p className="text-xs md:text-sm text-neutral-400 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-0.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] md:text-[11px] font-mono text-neutral-400 border border-white/10 bg-white/[0.03] px-2 py-0.5 rounded-md"
            >
              {tag}
            </span>
          ))}
          <div className="ml-auto flex items-center gap-1.5">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] md:text-[11px] font-mono font-semibold text-emerald-400 border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 rounded-md hover:bg-emerald-500/20 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Live ↗
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] md:text-[11px] font-mono font-semibold text-amber-400 border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 rounded-md hover:bg-amber-500/20 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Demo ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── Projects Section ──────────────────────────────────────────────────── */
const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="w-full bg-[#080809] py-10">
      <div className="max-w-3xl mx-auto px-6">

        {/* Parallel Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[11px] font-mono font-semibold text-emerald-400 tracking-wider">02 //</span>
          <h2 className="text-sm md:text-base font-bold text-white uppercase tracking-wider font-sans">
            Featured Projects
          </h2>
          <div className="flex-1 flex flex-col gap-1">
            <div className="h-px bg-white/15 w-full" />
            <div className="h-px bg-white/5 w-full" />
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              isAnyHovered={hoveredIndex !== null}
              isThisHovered={hoveredIndex === i}
              onEnter={() => setHoveredIndex(i)}
              onLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
