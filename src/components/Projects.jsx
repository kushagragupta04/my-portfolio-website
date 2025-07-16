import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "UniRank",
      description: "A web platform  to connect with peers and recruiters through real-time interactions and personalized profiles.",
      // demoLink: "https://uni-rank.vercel.app/",
      codeLink: "https://github.com/kushagragupta04/UniRank-student-platform",
      image: "/photos/unified_platform.png",
    },
    {
      name: "Typic",
      description: "A sleek and responsive typing speed test web app. Test typing skills through word-count or timed modes, displaying results in WPM (words per minute). ",
      demoLink: "https://typic.vercel.app/",
      codeLink: "https://github.com/kushagragupta04/typic",
      image: "/photos/typic.png",
    },
    {
      name: "QuizBliz",
      description: "A fast-paced quiz app that tests your knowledge with timed, multiple-choice questions. It offers instant feedback and real-time scoring for a fun, engaging experience. ",
      demoLink: "https://quizbliz.vercel.app/",
      codeLink: "https://github.com/kushagragupta04/QuizBliz",
      image: "/photos/quizbliz.png",
    },
    {
      name: "DeepShield",
      description: "A deepfake detection web application that uses a custom-trained Convolutional Neural Network to analyze facial features for signs of manipulation.",
      demoLink: "",
      codeLink: "https://github.com/kushagragupta04/deepfake-detector",
      image: "/photos/deepshield.png",
    },
    {
      name: "CurrencyNoteClassifier",
      description: "A deepfake detection web application that uses a custom-trained Convolutional Neural Network to analyze facial features for signs of manipulation.",
      demoLink: "",
      codeLink: "https://github.com/kushagragupta04/deepfake-detector",
      image: "/photos/currencyclassifier.png",
    },
    {
      name: "Portfolio Website",
      description: "A clean and responsive portfolio built using React, Tailwind CSS, and modern web technologies for a fast and responsive user experience.",
      demoLink: "#",
      codeLink: "https://github.com/kushagragupta04/my-portfolio-website",
      image: "/photos/portfolio_screenshot.png",
    },
    
    
  ];
  
  return (
    <section id="projects" className="dark:text-white py-32 px-6 md:mx-28 min-h-max">
      <div className="container mx-auto text-center">
        <h2 className="uppercase font-extrabold my-4 text-5xl py-4 px-7">Projects</h2>
        <div className="font-poppins grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
                    <div className="mt-auto text-sm flex gap-2">
                      {project.demoLink ? (
                        <>
                          <a
                            href={project.demoLink}
                            className="w-1/2 bg-green-500/25 flex items-center justify-center gap-2 border-2 border-green-500 hover:translate-y-0.5 hover:bg-green-500 transform text-green-500 hover:text-black px-4 py-2 rounded-lg shadow-md transition"
                          >
                            View Project
                          </a>

                          <a
                            href={project.codeLink}
                            className="w-1/2 flex items-center justify-center gap-2 border-2 dark:border-gray-200 dark:hover:bg-gray-200 hover:translate-y-0.5 transform text-gray-200 dark:hover:text-black bg-black hover:bg-slate-800 px-4 py-2 rounded-lg shadow-md transition"
                          >
                            View Code
                            {/* GitHub Icon here */}
                          </a>
                        </>
                      ) : (
                        <a
                          href={project.codeLink}
                          className="w-full flex items-center justify-center gap-2 border-2 dark:border-gray-200 dark:hover:bg-gray-200 hover:translate-y-0.5 transform text-gray-200 dark:hover:text-black bg-black hover:bg-slate-800 px-4 py-2 rounded-lg shadow-md transition"
                        >
                          View Code
                          {/* GitHub Icon here */}
                        </a>
                      )}
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
