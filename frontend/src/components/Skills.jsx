import React from "react";

const skillsData = [
  {
    category: "Frontend Development",
    iconColor: "bg-blue-100",
    icon: "text-[#1E88E5]",
    description: "Building responsive and interactive user interfaces",
    skills: [
      { name: "React.js", percentage: 95 },
      { name: "JavaScript (ES6+)", percentage: 90 },
      { name: "HTML5/CSS3", percentage: 95 },
      { name: "Redux", percentage: 85 },
      { name: "Tailwind CSS", percentage: 90 },
    ],
  },
  {
    category: "Backend Development",
    iconColor: "bg-green-100",
    icon: "text-green-600",
    description: "Creating robust and scalable server solutions",
    skills: [
      { name: "Node.js", percentage: 92 },
      { name: "Express.js", percentage: 90 },
      { name: "RESTful APIs", percentage: 95 },
      { name: "Authentication/JWT", percentage: 85 },
      { name: "GraphQL", percentage: 80 },
    ],
  },
  {
    category: "Database & DevOps",
    iconColor: "bg-yellow-100",
    icon: "text-[#FFC107]",
    description: "Database management and deployment expertise",
    skills: [
      { name: "MongoDB", percentage: 90 },
      { name: "AWS/Heroku", percentage: 85 },
      { name: "Docker", percentage: 80 },
      { name: "CI/CD", percentage: 75 },
      { name: "Git/GitHub", percentage: 95 },
    ],
  },
];

const otherSkills = [
  "TypeScript",
  "Zustand",
  "Material UI",
"Context API",
  "Redux Toolkit",
  "Responsive Design",
  "Firebase",
  "Socket.io",
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-neutral-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#212121] mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-[#FFC107] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Specialized in MERN stack development with expertise in various web technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((skillCategory, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 transform transition-transform hover:-translate-y-2 animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 ${skillCategory.iconColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <svg className={`w-8 h-8 ${skillCategory.icon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#212121] mb-2">{skillCategory.category}</h3>
                <p className="text-gray-600 mb-6">{skillCategory.description}</p>
              </div>

              <div className="space-y-4">
                {skillCategory.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-[#212121]">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className={`h-2 rounded-full`} style={{ width: `${skill.percentage}%`, backgroundColor: skillCategory.icon.slice(5) }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-[#212121] mb-8">Other Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {otherSkills.map((skill, i) => (
              <span
                key={i}
                className="px-6 py-2 bg-white text-[#1E88E5] rounded-full shadow-md border border-[#1E88E5] animate__animated animate__fadeIn"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
