import React from 'react'

const Education = () => {
    const educationData = [
        {
          year: "2012 - 2016",
          degree: "Bachelor of Computer Application",
          institution: "University of Technology",
          description: "Graduated with honors. Focused on web development, databases, and software engineering. Participated in various hackathons and coding competitions.",
          iconBg: "bg-[#1E88E5]",
          iconColor: "text-[#1E88E5]",
          icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222",
        },
        {
          year: "2020",
          degree: "Advanced MERN Stack Certification",
          institution: "Tech Academy Online",
          description: "Completed intensive training in MongoDB, Express.js, React.js, and Node.js. Built several full-stack projects including an e-commerce platform and a social media application.",
          iconBg: "bg-[#FFC107]",
          iconColor: "text-[#FFC107]",
          icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
        },
        {
          year: "2019",
          degree: "AWS Certified Developer",
          institution: "Amazon Web Services",
          description: "Earned certification for cloud development skills. Specialized in deploying and managing Node.js applications on AWS infrastructure, including EC2, Lambda, and DynamoDB.",
          iconBg: "bg-green-100",
          iconColor: "text-green-600",
          icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
        },
        {
          year: "2018",
          degree: "React Developer Course",
          institution: "Frontend Masters",
          description: "Comprehensive training in React.js, Redux, React Router, and modern JavaScript. Created multiple React applications including a real-time dashboard and a social media interface.",
          iconBg: "bg-purple-100",
          iconColor: "text-purple-600",
          icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
        },
      ];
    
  return (
    <>
      <div className="mt-24">
      <h2 className="text-3xl font-bold text-center text-[#212121] mb-12">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {educationData.map((edu, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-2 animate__animated animate__fadeInUp">
          <div className="flex items-start mb-4">
            <div className={`p-3 ${edu.iconBg} bg-opacity-10 rounded-md mr-4`}>
              <svg className={`w-8 h-8 ${edu.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d={edu.icon}></path>
              </svg>
            </div>
            <div>
              <span className="text-sm text-gray-500">{edu.year}</span>
              <h3 className="text-xl font-bold text-[#212121] mt-1">{edu.degree}</h3>
              <h4 className="text-md font-medium text-[#1E88E5] mt-1">{edu.institution}</h4>
            </div>
          </div>
          <p className="text-gray-600 ml-16">{edu.description}</p>
        </div>
        ))}
      </div>
    </div> 
    </>
  )
}

export default Education
