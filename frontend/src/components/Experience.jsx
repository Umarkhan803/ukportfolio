import React from "react";

const Experience = () => {
  const experiences = [
    {
      period: "2021 - Present",
      title: "Senior MERN Stack Developer",
      company: "Tech Innovations Inc.",
      description:
        "Leading the development of scalable web applications using MongoDB, Express.js, React, and Node.js. Implementing best practices and architectural patterns for performance optimization.",
      responsibilities: [
        "Lead a team of 5 developers to build and maintain enterprise-level web applications",
        "Architect scalable and maintainable codebases using MERN stack technologies",
        "Implement CI/CD pipelines and DevOps best practices",
        "Conduct code reviews and mentor junior developers",
        "Collaborate with product managers and designers to define product requirements",
      ],
    },
    {
      period: "2018 - 2021",
      title: "Full Stack Developer",
      company: "Digital Solutions LLC",
      description:
        "Developed feature-rich web applications using the MERN stack. Implemented responsive designs and optimized application performance for seamless user experiences.",
      responsibilities: [
        "Developed and maintained multiple client projects using MongoDB, Express, React, and Node.js",
        "Built RESTful APIs and integrated third-party services",
        "Implemented authentication and authorization using JWT",
        "Created responsive and mobile-friendly user interfaces",
        "Collaborated with cross-f  unctional teams to deliver projects on schedule",
      ],
    },
    {
      period: "2024 - 2018",
      title: " Web Developer",
      company: "Afame Technology",
      description:
        "Started my career as a junior developer focusing on front-end development. Gradually transitioned to full-stack development with MERN technologies.",
      responsibilities: [
        "Developed and maintained client websites and web applications",
        "Implemented responsive UIs using HTML5, CSS3, and JavaScript",
        "Learned and applied React.js for front-end development",
        "Assisted in building back-end services with Node.js and Express",
        "Participated in team code reviews and technical discussions",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-neutral-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#212121] mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-[#FFC107] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My professional journey building web applications with the MERN stack
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#1E88E5]"></div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center"
              >
                <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 md:text-right animate__animated animate__fadeInLeft">
                  <span className="text-sm text-gray-500">{exp.period}</span>
                  <h3 className="text-2xl font-bold text-[#212121] mt-1 mb-2">
                    {exp.title}
                  </h3>
                  <h4 className="text-lg font-medium text-[#1E88E5] mb-3">
                    {exp.company}
                  </h4>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
                <div className=" flex justify-center p-2.5 items-center md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[#1E88E5] border-4 border-white shadow-lg ">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div className="md:w-1/2 md:pl-16 animate__animated animate__fadeInRight">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h5 className="font-semibold text-[#212121] mb-3">
                      Key Responsibilities:
                    </h5>
                    <ul className="space-y-2 text-gray-600 ml-5 list-disc">
                      {exp.responsibilities.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
