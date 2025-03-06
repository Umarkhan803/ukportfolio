import { useEffect } from "react";
import "animate.css";

const Hero = () => {
  return (
    <section id="hero" className="bg-neutral-900 text-white min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 animate__animated animate__fadeInLeft">
            <h1 className="text-4xl md:text-6xl font-semibold mb-4">
              <span className="text-[#1E88E5]">MERN Stack</span>
              <span className="block">Developer</span>
            </h1>
            <h2 className=" md:text-2xl mb-6 text-gray-300">
              Crafting innovative web solutions with
              <span className="text-[#FFC107]"> MongoDB, Express, React &amp; Node.js</span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              I build scalable, responsive and modern web applications that deliver exceptional user experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-[#1E88E5] hover:bg-[#1976D2] text-white font-medium py-3 px-8 rounded-md transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border-2 border-[#FFC107] text-[#FFC107] hover:bg-[#FFC107] hover:text-neutral-900 font-medium py-3 px-8 rounded-md transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 animate__animated animate__fadeInRight">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#1E88E5] to-[#FFC107] opacity-75 blur"></div>
              <div className="relative bg-neutral-800 p-8 rounded-lg shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-gray-300 font-mono mb-4">
                  <span className="text-[#1E88E5]">const</span> <span className="text-[#FFC107]">developer</span> = {`{` }
                </div>
                <div className="text-gray-300 font-mono ml-4 mb-2">
                  name: <span className="text-green-400">'Mohammed Umar Khan'</span>,
                </div>
                <div className="text-gray-300 font-mono ml-4 mb-2">
                  skills: [<span className="text-green-400">'MongoDB'</span>, <span className="text-green-400">'Express'</span>, <span className="text-green-400">'React'</span>, <span className="text-green-400">'Node.js'</span>],
                </div>
                <div className="text-gray-300 font-mono ml-4 mb-2">
                  passion: <span className="text-green-400">'Building scalable web applications'</span>,
                </div>
                <div className="text-gray-300 font-mono ml-4 mb-2">
                  status: <span className="text-green-400">'Available for new projects'</span>
                </div>
                <div className="text-gray-300 font-mono mb-2">{`}`};</div>
                <div className="flex items-center">
                  <span className="text-gray-300 font-mono">_</span>
                  <span className="animate-ping ml-0.5 h-4 w-0.5 bg-white"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" aria-label="Scroll down">
            <svg
              className="w-10 h-10 text-[#FFC107]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
