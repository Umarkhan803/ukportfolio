import { useEffect } from "react";
import "animate.css";

const About = () => {
  useEffect(() => {
    // Optional: You can use AOS or another library for better animations.
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#212121] mb-4">About Me</h2>
          <div className="w-24  h-1 bg-[#FFC107] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Passionate MERN stack developer with expertise in building modern,
            responsive web applications.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Card */}
          <div className="md:w-2/5 animate__animated animate__fadeInLeft">
            <div className="relative ">
              <div className="absolute -inset-1 rounded-[50%] bg-gradient-to-r from-[#1E88E5] to-[#FFC107] opacity-75 blur"></div>
              <div className="relative bg-white p-4  shadow-lg rounded-[50%]">
                <div className="aspect-square bg-neutral-200 rounded-[50%] flex items-center justify-center">
                 <img className="object-cover bg-right rounded-[50%] h-[100%] w-[100%]" src="profile.jpeg" alt="profile" />
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex justify-center gap-4">
            <a href="https://github.com/Umarkhan803" target="_blank" rel="noopener noreferrer" className="w-10 h-10  hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors" aria-label="GitHub">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/mohmmedumarkhan803/" target="_blank" rel="noopener noreferrer" className="w-15 h-15  hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors" aria-label="LinkedIn">
                    <svg className="w-7 h-7  " fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                    </svg>
                  </a>  
            </div>
          </div>

          {/* About Text */}
          <div className="md:w-3/5 animate__animated animate__fadeInRight">
            <h3 className="text-2xl font-bold text-[#212121] mb-4">Mohammed Umar Khan</h3>
            <p className="text-gray-600 mb-6">
              I am a passionate full-stack developer specializing in the MERN
              stack (MongoDB, Express.js, React.js, Node.js) with 1 years of
              experience building scalable web applications. I love turning
              complex problems into simple, beautiful, and intuitive solutions.
            </p>

            {/* Skills List */}
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-[#212121] mb-3">
                What I do
              </h4>
              <ul className="space-y-2">
                {[
                  "Develop robust and scalable back-end systems using Node.js and Express",
                  "Design and implement responsive user interfaces with React",
                  "Create and manage MongoDB databases and RESTful APIs",
                  "Deploy and maintain applications on cloud platforms",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#FFC107] mr-2">✓</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { title: "Email:", value: "mohammedumarkhan803@gmail.com" },
                { title: "Location:", value: "Bangalore, Karnataka" },
                { title: "Experience:", value: "1 Years" },
                { title: "Availability:", value: "Available for freelance" },
              ].map((info, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-[#212121] mb-2">
                    {info.title}
                  </h4>
                  <p className="text-gray-600">{info.value}</p>
                </div>
              ))}
            </div>

            {/* Contact Button */}
            <a
              href="#contact"
              className="inline-block bg-[#1E88E5] hover:bg-[#1976D2] text-white font-medium py-3 px-8 rounded-md transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
