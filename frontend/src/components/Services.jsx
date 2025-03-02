import React from "react";

const services = [
  {
    title: "Front-End Development",
    description:
      "Creating responsive and interactive user interfaces using React.js and modern JavaScript. Turning your design into pixel-perfect web applications.",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    color: "#1E88E5",
    list: ["React.js Development", "Redux & zustand State Management", "Responsive Web Design", "Tailwindcss","React native"],
  },
  {
    title: "Back-End Development",
    description:
      "Building robust and scalable server-side applications with Node.js and Express.js. Creating RESTful APIs and database integrations.",
    icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01",
    color: "#FFC107",
    list: ["Node.js & Express.js",'Sails.js', "RESTful API Development", "MongoDB & Mongoose", "Authentication & Authorization",  'CRUD Operation'],
  },
  {
    title: "Full Stack Development",
    description:
      "End-to-end development of web applications using the complete MERN stack. Creating seamless experiences from database to user interface.",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    color: "#4CAF50",
    list: ["Complete MERN Applications", "E-commerce Solutions", "Real-time Applications", "Full Project Architecture"],
  },

];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-bold text-[#212121] mb-4">My Services</h2>
        <div className="w-24 h-1 bg-[#FFC107] mx-auto mb-8"></div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Professional web development services I offer with expertise in the MERN stack
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-8 border-t-4 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            style={{ borderColor: service.color, animationDelay: `${index * 0.1}s` }}
          >
            <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-8" style={{ backgroundColor: `${service.color}20` }}>
              <svg className="w-8 h-8" fill="none" stroke={service.color} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon}></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#212121] mb-4">{service.title}</h3>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <ul className="space-y-2 mb-8">
              {service.list.map((item, idx) => (
                <li key={idx} className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke={service.color} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#contact" className="inline-block font-medium transition-colors" style={{ color: service.color }}>
              Learn more
              <svg className="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
