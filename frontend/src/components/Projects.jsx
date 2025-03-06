import React from 'react'

const Projects = () => {
  return (
    <>
      <section id="projects" className="py-20 bg-white">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-[#212121] mb-4">My Projects</h2>
      <div className="w-24 h-1 bg-[#FFC107] mx-auto mb-8"></div>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Showcasing my best work with the MERN stack and other web technologies
      </p>
    </div>

   

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 project-container">
      <div className="project-card bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" data-category="fullstack" style={{display:"block"}}>
        <div className="relative overflow-hidden">
          <div className="h-64 bg-neutral-200 flex items-center justify-center">
            <svg className="w-16 h-16 text-neutral-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path>
            </svg>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-4 w-full">
              <div className="flex justify-end gap-2">
                <a href="#" className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors" aria-label="View Demo">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors" aria-label="View Code">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-bold text-[#212121]">E-Commerce Platform</h3>
            <div className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#1E88E5] bg-blue-100">
              Full Stack
            </div>
          </div>
          <p className="text-gray-600 mb-4">
            A complete e-commerce solution with user authentication, product management, shopping cart, and payment integration.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">MongoDB</span>
            <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">Express.js</span>
            <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">React</span>
            <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">Node.js</span>
            <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">Redux</span>
          </div>
          <div className="flex justify-between">
            <a href="#" className="text-[#1E88E5] hover:text-[#1976D2] font-medium flex items-center">
              View Details
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      
      <div className="project-card bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" data-category="frontend"  style={{display:"block"}}>
        <div className="relative overflow-hidden">
          <div className="h-64 bg-neutral-200 flex items-center justify-center">
            <svg className="w-16 h-16 text-neutral-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path>
            </svg>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-4 w-full">
              <div className="flex justify-end gap-2">
                <a href="#" className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors" aria-label="View Demo">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors" aria-label="View Code">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-bold text-[#212121]">Dashboard UI</h3>
            <div className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-100">
              Frontend
            </div>
          </div>
          <p className="text-gray-600 mb-4">
            A responsive admin dashboard with interactive charts, data tables, and customizable widgets built with React.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">React</span>
            <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">Redux</span>
            <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">Chart.js</span>
            <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">Material UI</span>
          </div>
          <div className="flex justify-between">
            <a href="#" className="text-[#1E88E5] hover:text-[#1976D2] font-medium flex items-center">
              View Details
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
   
      <div className="project-card bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" data-category="backend"  style={{display:"block"}}>
        <div className="relative overflow-hidden">
          <div className="h-64 bg-neutral-200 flex items-center justify-center">
            <svg className="w-16 h-16 text-neutral-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path>
            </svg>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-4 w-full">
              <div className="flex justify-end gap-2">
                <a href="#" className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors" aria-label="View Demo">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors" aria-label="View Code">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-bold text-[#212121]">RESTful API Service</h3>
            <div className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-100">
              Backend
            </div>
          </div>
          <p className="text-gray-600 mb-4">
            A secure and scalable RESTful API built with Node.js and Express.js for a content management system.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">Node.js</span>
            <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">Express.js</span>
            <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">MongoDB</span>
            <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">JWT</span>
          </div>
          <div className="flex justify-between">
            <a href="#" className="text-[#1E88E5] hover:text-[#1976D2] font-medium flex items-center">
              View Details
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      

      <div className="project-card bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" data-category="fullstack" style={{display:"block"}}>
        <div className="relative overflow-hidden">
          <div className="h-64 bg-neutral-200 flex items-center justify-center">
            <svg className="w-16 h-16 text-neutral-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path>
            </svg>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-4 w-full">
              <div className="flex justify-end gap-2">
                <a href="#" className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors" aria-label="View Demo">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors" aria-label="View Code">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-bold text-[#212121]">Task Management App</h3>
            <div className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#1E88E5] bg-blue-100">
              Full Stack
            </div>
          </div>
          <p className="text-gray-600 mb-4">
            A collaborative task management application with real-time updates, user assignments, and progress tracking.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">MongoDB</span>
            <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">Express.js</span>
            <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">React</span>
            <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">Node.js</span>
            <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">Socket.io</span>
          </div>
          <div className="flex justify-between">
            <a href="#" className="text-[#1E88E5] hover:text-[#1976D2] font-medium flex items-center">
              View Details
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
     
      <div className="project-card bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" data-category="frontend"  style={{display:"block"}}>
        <div className="relative overflow-hidden">
          <div className="h-64 bg-neutral-200 flex items-center justify-center">
            <svg className="w-16 h-16 text-neutral-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path>
            </svg>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-4 w-full">
              <div className="flex justify-end gap-2">
                <a href="#" className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors" aria-label="View Demo">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors" aria-label="View Code">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-bold text-[#212121]">Weather Forecast App</h3>
            <div className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-100">
              Frontend
            </div>
          </div>
          <p className="text-gray-600 mb-4">
            A weather forecasting application with location detection, weather reports, and interactive maps.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">React</span>
            <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">Redux</span>
            <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">OpenWeather API</span>
            <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">Mapbox</span>
          </div>
          <div className="flex justify-between">
            <a href="#" className="text-[#1E88E5] hover:text-[#1976D2] font-medium flex items-center">
              View Details
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      
      <div className="project-card bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" data-category="backend"  style={{display:"block"}}>
        <div className="relative overflow-hidden">
          <div className="h-64 bg-neutral-200 flex items-center justify-center">
            <svg className="w-16 h-16 text-neutral-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path>
            </svg>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-4 w-full">
              <div className="flex justify-end gap-2">
                <a href="#" className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors" aria-label="View Demo">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors" aria-label="View Code">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-bold text-[#212121]">Authentication Service</h3>
            <div className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-100">
              Backend
            </div>
          </div>
          <p className="text-gray-600 mb-4">
            A secure authentication and authorization microservice with OAuth, JWT, and role-based access control.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">Node.js</span>
            <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">Express.js</span>
            <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">JWT</span>
            <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">MongoDB</span>
            <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">OAuth</span>
          </div>
          <div className="flex justify-between">
            <a href="#" className="text-[#1E88E5] hover:text-[#1976D2] font-medium flex items-center">
              View Details
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="text-center mt-12">
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md bg-[#212121] px-6 py-3 text-white hover:bg-[#1E88E5] transition-colors duration-300">
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path>
        </svg>
        View More Projects on GitHub
      </a>
    </div>
  </div>
</section>
    </>
  )
}

export default Projects
