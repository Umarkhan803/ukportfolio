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
          <div className="w-24 h-1 bg-[#FFC107] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Passionate MERN stack developer with expertise in building modern,
            responsive web applications.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Card */}
          <div className="md:w-2/5 animate__animated animate__fadeInLeft">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#1E88E5] to-[#FFC107] opacity-75 blur"></div>
              <div className="relative bg-white p-4 rounded-lg shadow-lg">
                <div className="aspect-square bg-neutral-200 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-32 h-32 text-neutral-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex justify-center gap-4">
              {[
                { href: "https://github.com", label: "GitHub" },
                { href: "https://linkedin.com", label: "LinkedIn" },
                { href: "https://twitter.com", label: "Twitter" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-700 hover:text-[#1E88E5] transition-colors"
                  aria-label={social.label}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775A4.958 4.958 0 0023.953 4.57z"></path>
                  </svg>
                </a>
              ))}
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
