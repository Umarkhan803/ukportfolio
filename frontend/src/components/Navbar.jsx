import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-neutral-900 text-white py-4 px-6 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#hero" className="text-2xl font-semibold text-white flex items-center">
          <span className="text-[#FFC107] mr-2 ">MERN</span>Developer
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <ul className="flex space-x-6">
            {[
              "Home",
              "About",
              "Skills",
              "Projects",
              "Experience",
              "Services",
              "Contact",
            ].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-[#FFC107] transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          aria-label="Toggle menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-neutral-800 absolute top-full left-0 w-full">
          <ul className="flex flex-col space-y-4 p-4">
            {[
              "Home",
              "About",
              "Skills",
              "Projects",
              "Experience",
              "Services", 
              "Contact",
            ].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 hover:text-[#FFC107] transition duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
