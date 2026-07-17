
import React from 'react'
import { useState, useEffect } from 'react'


const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <nav className={`transition-color duration-500 {/*${scroll > 300 ? `bg-gray-900/100 shadow-lg` : `bg-gray-900/0`}*/} text-white font-mono  px-7 py-4 fixed w-full top-0 z-10 `}>
      {/* // <nav className="bg-gray-900 "> */}
      <div className="container mx-auto flex justify-between items-center w-full relative">
        <h1 className={`md:text-xl text-sm text text-black dark:text-white bg-slate-400/0 backdrop-blur-[7px] px-5 py-2 font-bold transition-opacity duration-500 ${scroll > 300 ? `opacity-100` : `opacity-0`}`}>Kushagra Gupta</h1>
        {/* navbar linkss */}
        <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6 lg:space-x-16 py-3 px-5 bg-slate-400/0 backdrop-blur-[7px] text-black dark:text-orange-600 font-bold shadow-2xl" >
          <li><a href="#hero" className="hover:text-blue-500 transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500 transition-colors">About</a></li>
          <li><a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a></li>
        </ul>
        {/* DarkToggle Button Desktop */}
        <button
            onClick={toggleDarkMode}
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full dark:text-black dark:bg-slate-200 dark:hover:bg-slate-400  text-white bg-black hover:bg-slate-400    focus:outline-none"
          >
            {darkMode ? (
              // Sun Icon (for dark mode)
              <svg viewBox="0 0 24 24"
                width="19"
                height="19"
                fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_1300_106215)">
                  <path d="M12 0C12.5523 0 13 0.447715 13 1V4C13 4.55228 12.5523 5 12 5C11.4477 5 11 4.55228 11 4V1C11 0.447715 11.4477 0 12 0Z" fill="currentColor"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z" fill="currentColor"></path>
                  <path d="M20.4852 4.92894C20.8757 4.53841 20.8757 3.90525 20.4852 3.51472C20.0947 3.1242 19.4615 3.1242 19.071 3.51472L16.9496 5.63605C16.5591 6.02657 16.5591 6.65974 16.9496 7.05026C17.3402 7.44078 17.9733 7.44078 18.3639 7.05026L20.4852 4.92894Z" fill="currentColor"></path>
                  <path d="M24 12C24 12.5523 23.5523 13 23 13H20C19.4477 13 19 12.5523 19 12C19 11.4477 19.4477 11 20 11H23C23.5523 11 24 11.4477 24 12Z" fill="currentColor"></path>
                  <path d="M19.0711 20.4853C19.4616 20.8758 20.0948 20.8758 20.4853 20.4853C20.8758 20.0948 20.8758 19.4616 20.4853 19.0711L18.364 16.9498C17.9734 16.5592 17.3403 16.5592 16.9497 16.9498C16.5592 17.3403 16.5592 17.9735 16.9497 18.364L19.0711 20.4853Z" fill="currentColor"></path>
                  <path d="M12 24C11.4477 24 11 23.5523 11 23V20C11 19.4477 11.4477 19 12 19C12.5523 19 13 19.4477 13 20V23C13 23.5523 12.5523 24 12 24Z" fill="currentColor"></path>
                  <path d="M3.51482 19.0711C3.12429 19.4616 3.12429 20.0948 3.51482 20.4853C3.90534 20.8758 4.53851 20.8758 4.92903 20.4853L7.05035 18.364C7.44087 17.9734 7.44087 17.3403 7.05035 16.9497C6.65983 16.5592 6.02666 16.5592 5.63614 16.9497L3.51482 19.0711Z" fill="currentColor"></path>
                  <path d="M0 12C0 11.4477 0.447715 11 1 11H4C4.55228 11 5 11.4477 5 12C5 12.5523 4.55228 13 4 13H1C0.447715 13 0 12.5523 0 12Z" fill="currentColor"></path>
                  <path d="M4.92894 3.5147C4.53841 3.12417 3.90525 3.12417 3.51472 3.5147C3.1242 3.90522 3.1242 4.53838 3.51472 4.92891L5.63605 7.05023C6.02657 7.44075 6.65974 7.44075 7.05026 7.05023C7.44078 6.6597 7.44078 6.02654 7.05026 5.63601L4.92894 3.5147Z" fill="currentColor"></path>
                </g> <defs>
                    <clipPath id="clip0_1300_106215">
                      <rect width="24" height="24" fill="white"></rect> </clipPath> </defs>
                </g></svg>

            ) : (
              // Moon Icon (for light mode)

              <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              width="19"
                height="19"
              xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M19.9001 2.30719C19.7392 1.8976 19.1616 1.8976 19.0007 2.30719L18.5703 3.40247C18.5212 3.52752 18.4226 3.62651 18.298 3.67583L17.2067 4.1078C16.7986 4.26934 16.7986 4.849 17.2067 5.01054L18.298 5.44252C18.4226 5.49184 18.5212 5.59082 18.5703 5.71587L19.0007 6.81115C19.1616 7.22074 19.7392 7.22074 19.9001 6.81116L20.3305 5.71587C20.3796 5.59082 20.4782 5.49184 20.6028 5.44252L21.6941 5.01054C22.1022 4.849 22.1022 4.26934 21.6941 4.1078L20.6028 3.67583C20.4782 3.62651 20.3796 3.52752 20.3305 3.40247L19.9001 2.30719Z" fill="currentColor"></path>
                  <path d="M16.0328 8.12967C15.8718 7.72009 15.2943 7.72009 15.1333 8.12967L14.9764 8.52902C14.9273 8.65407 14.8287 8.75305 14.7041 8.80237L14.3062 8.95987C13.8981 9.12141 13.8981 9.70107 14.3062 9.86261L14.7041 10.0201C14.8287 10.0694 14.9273 10.1684 14.9764 10.2935L15.1333 10.6928C15.2943 11.1024 15.8718 11.1024 16.0328 10.6928L16.1897 10.2935C16.2388 10.1684 16.3374 10.0694 16.462 10.0201L16.8599 9.86261C17.268 9.70107 17.268 9.12141 16.8599 8.95987L16.462 8.80237C16.3374 8.75305 16.2388 8.65407 16.1897 8.52902L16.0328 8.12967Z" fill="currentColor"></path>
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor"></path>
                </g></svg>
            )}
          </button>
        {/* hamburger menu */}
        <div className="flex md:hidden">
          <button className="text-gray-600 hover:text-gray-400  focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>
      {/* sidebar */}
      <div className={`fixed top-0 right-0 h-full w-64 md:w-1/3 z-10 bg-slate-900/30  backdrop-blur-[7px] text-black shadow-xl ${isOpen ? 'translate-x-0' : 'translate-x-full'} transform transition-transform duration-500 ease-in-out`}>
        <button className="p-6 w-full place-items-end dark:text-slate-300" onClick={() => setIsOpen(false)}>
          <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>

        </button>
        <ul className="text-lg font-bold flex flex-col items-start dark:text-orange-600" >
          <li className="hover:text-blue-500 transition-colors p-4 block w-full" onClick={() => setIsOpen(false)}><a href="#hero" className="block w-full">Home</a></li>
          <li className="hover:text-blue-500 transition-colors p-4 block w-full" onClick={() => setIsOpen(false)}><a href="#about" className="w-full block">About</a></li>
          <li className="hover:text-blue-500 transition-colors p-4 block w-full" onClick={() => setIsOpen(false)}><a href="#skills" className="w-full block">Skills</a></li>
          <li className="hover:text-blue-500 transition-colors p-4 block w-full" onClick={() => setIsOpen(false)}><a href="#projects" className="w-full block">Projects</a></li>
          <li className="hover:text-blue-500 transition-colors p-4 block w-full" onClick={() => setIsOpen(false)}><a href="#contact" className="w-full block">Contact</a></li>
        </ul>
        <div className="w-full place-items-end px-6">
          <button
            onClick={toggleDarkMode}
            className=" flex items-center justify-center w-10 h-10 rounded-full dark:text-black dark:bg-slate-200 dark:hover:bg-slate-400  text-white bg-black hover:bg-slate-400    focus:outline-none"
          >
            {darkMode ? (
              // Sun Icon (for dark mode)
              <svg viewBox="0 0 24 24"
                width="19"
                height="19"
                fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_1300_106215)">
                  <path d="M12 0C12.5523 0 13 0.447715 13 1V4C13 4.55228 12.5523 5 12 5C11.4477 5 11 4.55228 11 4V1C11 0.447715 11.4477 0 12 0Z" fill="currentColor"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z" fill="currentColor"></path>
                  <path d="M20.4852 4.92894C20.8757 4.53841 20.8757 3.90525 20.4852 3.51472C20.0947 3.1242 19.4615 3.1242 19.071 3.51472L16.9496 5.63605C16.5591 6.02657 16.5591 6.65974 16.9496 7.05026C17.3402 7.44078 17.9733 7.44078 18.3639 7.05026L20.4852 4.92894Z" fill="currentColor"></path>
                  <path d="M24 12C24 12.5523 23.5523 13 23 13H20C19.4477 13 19 12.5523 19 12C19 11.4477 19.4477 11 20 11H23C23.5523 11 24 11.4477 24 12Z" fill="currentColor"></path>
                  <path d="M19.0711 20.4853C19.4616 20.8758 20.0948 20.8758 20.4853 20.4853C20.8758 20.0948 20.8758 19.4616 20.4853 19.0711L18.364 16.9498C17.9734 16.5592 17.3403 16.5592 16.9497 16.9498C16.5592 17.3403 16.5592 17.9735 16.9497 18.364L19.0711 20.4853Z" fill="currentColor"></path>
                  <path d="M12 24C11.4477 24 11 23.5523 11 23V20C11 19.4477 11.4477 19 12 19C12.5523 19 13 19.4477 13 20V23C13 23.5523 12.5523 24 12 24Z" fill="currentColor"></path>
                  <path d="M3.51482 19.0711C3.12429 19.4616 3.12429 20.0948 3.51482 20.4853C3.90534 20.8758 4.53851 20.8758 4.92903 20.4853L7.05035 18.364C7.44087 17.9734 7.44087 17.3403 7.05035 16.9497C6.65983 16.5592 6.02666 16.5592 5.63614 16.9497L3.51482 19.0711Z" fill="currentColor"></path>
                  <path d="M0 12C0 11.4477 0.447715 11 1 11H4C4.55228 11 5 11.4477 5 12C5 12.5523 4.55228 13 4 13H1C0.447715 13 0 12.5523 0 12Z" fill="currentColor"></path>
                  <path d="M4.92894 3.5147C4.53841 3.12417 3.90525 3.12417 3.51472 3.5147C3.1242 3.90522 3.1242 4.53838 3.51472 4.92891L5.63605 7.05023C6.02657 7.44075 6.65974 7.44075 7.05026 7.05023C7.44078 6.6597 7.44078 6.02654 7.05026 5.63601L4.92894 3.5147Z" fill="currentColor"></path>
                </g> <defs>
                    <clipPath id="clip0_1300_106215">
                      <rect width="24" height="24" fill="white"></rect> </clipPath> </defs>
                </g></svg>

            ) : (
              // Moon Icon (for light mode)

              <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              width="19"
                height="19"
              xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M19.9001 2.30719C19.7392 1.8976 19.1616 1.8976 19.0007 2.30719L18.5703 3.40247C18.5212 3.52752 18.4226 3.62651 18.298 3.67583L17.2067 4.1078C16.7986 4.26934 16.7986 4.849 17.2067 5.01054L18.298 5.44252C18.4226 5.49184 18.5212 5.59082 18.5703 5.71587L19.0007 6.81115C19.1616 7.22074 19.7392 7.22074 19.9001 6.81116L20.3305 5.71587C20.3796 5.59082 20.4782 5.49184 20.6028 5.44252L21.6941 5.01054C22.1022 4.849 22.1022 4.26934 21.6941 4.1078L20.6028 3.67583C20.4782 3.62651 20.3796 3.52752 20.3305 3.40247L19.9001 2.30719Z" fill="currentColor"></path>
                  <path d="M16.0328 8.12967C15.8718 7.72009 15.2943 7.72009 15.1333 8.12967L14.9764 8.52902C14.9273 8.65407 14.8287 8.75305 14.7041 8.80237L14.3062 8.95987C13.8981 9.12141 13.8981 9.70107 14.3062 9.86261L14.7041 10.0201C14.8287 10.0694 14.9273 10.1684 14.9764 10.2935L15.1333 10.6928C15.2943 11.1024 15.8718 11.1024 16.0328 10.6928L16.1897 10.2935C16.2388 10.1684 16.3374 10.0694 16.462 10.0201L16.8599 9.86261C17.268 9.70107 17.268 9.12141 16.8599 8.95987L16.462 8.80237C16.3374 8.75305 16.2388 8.65407 16.1897 8.52902L16.0328 8.12967Z" fill="currentColor"></path>
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor"></path>
                </g></svg>
            )}
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
// import React from "react";

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-900 text-white px-6 py-4 fixed w-full top-0 z-10 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-2xl font-bold">MyPortfolio</h1>
//         <ul className="flex space-x-6">
//           <li><a href="#hero" className="hover:text-blue-400">Home</a></li>
//           <li><a href="#about" className="hover:text-blue-400">About</a></li>
//           <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
//           <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
//           <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

