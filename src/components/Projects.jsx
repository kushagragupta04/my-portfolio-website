import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Portfolio Website",
      description: "A clean and responsive portfolio built using React, Tailwind CSS, and modern web technologies for a fast and responsive user experience.",
      demoLink: "#",
      codeLink:"https://github.com/kushagragupta04/my-portfolio-website",
      image: "/photos/portfolio_screenshot.png",
    },
    {
      name: "UniRank-Unified College Placement Platform",
      description: "Building a web platform  to connect with peers and recruiters through real-time interactions and personalized profiles.",
      demoLink: "",
      codeLink:"https://github.com/kushagragupta04/UniRank-student-platform",
      image: "/photos/unified_platform.png",
    },

  ];

  return (
    <section id="projects" className="dark:text-white py-32 px-6 md:mx-28 min-h-max">
      <div className="container mx-auto text-center">
        <h2 className="uppercase font-extrabold my-4 text-5xl py-4 px-7">Projects</h2>
        <div className="font-poppins flex flex-col md:flex-row gap-10">
          {/* grid-cols-1 md:grid-cols-2 lg:grid-cols-2  */}
          {projects.map((project, index) => (
            <div key={index} className="h-full max-w-xs md:max-w-xs mx-auto">
              <div className="card h-full ">
                <div className="card2 p-4 bg-gray-300 dark:bg-slate-900 shadow-md rounded-lg flex flex-col h-full">
                  {/* Image */}
                  <img
                    className="w-full h-40 object-cover rounded-lg"
                    src={project.image}
                    alt={project.name}
                  />

                  {/* Content */}
                  <div className="p-1 flex flex-col flex-grow ">
                    <h3 className="text-xl font-bold text-left mt-2">{project.name}</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm text-left flex-grow my-5">{project.description}</p>

                    {/* View project  */}
                    <div className="mt-auto text-sm flex justify-between gap-2">
                      {/* github Button */}
                      
                      <a
                        href={project.demoLink}
                        className="w-1/2 bg-green-500/25 flex items-center justify-center gap-2 border-2 border-green-500 hover:translate-y-0.5 hover:bg-green-500 tranform text-green-500 hover:text-black px-4 py-2 rounded-lg shadow-md transition"
                      >
                        View Project
                      </a>

                      {/* View Code Button */}
                      <a
                        href={project.codeLink}
                        className="w-1/2 flex items-center justify-center gap-2 border-2 dark:border-gray-200 dark:hover:bg-gray-200 hover:translate-y-0.5  tranform text-gray-200 dark:hover:text-black bg-black hover:bg-slate-800 px-4 py-2 rounded-lg shadow-md transition"
                      >
                        View Code
                        <svg width="18px" height="18px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="currentColor"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
