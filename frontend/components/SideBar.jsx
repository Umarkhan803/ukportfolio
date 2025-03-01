import React from "react";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <>
      <div
        className="sticky top-0 h-screen w-64 bg-white border-r border-neutral-200/20 hidden lg:block"
        id="sidebar">
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-neutral-200/20">
            <span className="text-5xl font-bold text-red-800">Portfolio</span>
          </div>

          <div className="flex-1 py-6">
            <Link
              to="/dashboard"
              className="flex items-center px-6 py-3 text-neutral-600 hover:bg-neutral-100 transition-colors active">
              <span>Dashboard</span>
            </Link>
            <Link
              to="/projects"
              className="flex items-center px-6 py-3 text-neutral-600 hover:bg-neutral-100 transition-colors">
              <span>Projects</span>
            </Link>
            <Link
              to="/skills"
              className="flex items-center px-6 py-3 text-neutral-600 hover:bg-neutral-100 transition-colors">
              <span>Skills</span>
            </Link>
            <Link
              to="/experience"
              className="flex items-center px-6 py-3 text-neutral-600 hover:bg-neutral-100 transition-colors">
              <span>Experience</span>
            </Link>
            <Link
              to="/education"
              className="flex items-center px-6 py-3 text-neutral-600 hover:bg-neutral-100 transition-colors">
              <span>Education</span>
            </Link>
            <Link
              to="/blog"
              className="flex items-center px-6 py-3 text-neutral-600 hover:bg-neutral-100 transition-colors">
              <span>Blog</span>
            </Link>
            <Link
              to="/contact"
              className="flex items-center px-6 py-3 text-neutral-600 hover:bg-neutral-100 transition-colors">
              <span>Contact</span>
            </Link>
          </div>

          <div className="p-6 border-t border-neutral-200/20">
            <div className="flex items-center">
              <img
                src="https://avatar.iran.liara.run/public"
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-neutral-800">John Doe</p>
                <p className="text-xs text-neutral-500">john@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
