import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { SiGithub, SiX } from "react-icons/si";
import { Linkedin } from "react-feather";
import { motion } from "framer-motion";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`fixed w-full z-10 top-0 p-4 shadow-md ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"} transition-colors duration-500`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center font-semibold text-skin whitespace-nowrap">azara_( )</span>
        </NavLink>

        {/* Desktop NavLinks */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink
            to="/portfolio"
            className={({ isActive }) => `font-semibold text-skin px-5 py-2 ${isActive ? "text-skin-light hover:text-skin" : "hover:text-skin-light"}`}>
            Portfolio( )
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => `font-semibold text-skin px-5 py-2 ${isActive ? "text-skin-light hover:text-skin" : "hover:text-skin-light"}`}>
            Blogs( )
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `font-semibold text-skin px-5 py-2 ${isActive ? "text-skin-light hover:text-skin" : "hover:text-skin-light"}`}>
            About( )
          </NavLink>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-skin hover:text-gray-700">
              <SiGithub size={24} />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-skin hover:text-gray-700">
              <SiX size={24} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-skin hover:text-gray-700">
              <Linkedin size={24} />
            </a>
          </div>

          {/* Dark mode toggle */}
          <button
            type="button"
            onClick={toggleDarkMode}
            className="bg-skin text-white px-4 py-2 rounded-lg focus:outline-none font-medium text-sm shadow-md">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Hamburger icon for mobile view */}
        <div className="md:hidden">
          <button
            className="text-skin focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden mt-4 px-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <NavLink
            to="/portfolio"
            className="block py-2 px-6 text-skin hover:bg-gray-100 rounded"
            onClick={() => setIsMenuOpen(false)}>
            Portfolio( )
          </NavLink>
          <NavLink
            to="/blog"
            className="block py-2 px-6 text-skin hover:bg-gray-100 rounded"
            onClick={() => setIsMenuOpen(false)}>
            Blogs( )
          </NavLink>
          <NavLink
            to="/about"
            className="block py-2 px-6 text-skin hover:bg-gray-100 rounded"
            onClick={() => setIsMenuOpen(false)}>
            About( )
          </NavLink>

          {/* Social Links */}
          <div className="mt-4 flex justify-center space-x-6">
            <a href="https://github.com/yourusername" aria-label="GitHub" target="_blank" rel="noreferrer" className="text-skin hover:text-gray-700">
              <SiGithub size={24} />
            </a>
            <a href="https://twitter.com/yourusername" aria-label="Twitter" target="_blank" rel="noreferrer" className="text-skin hover:text-gray-700">
              <SiX size={24} />
            </a>
            <a href="https://linkedin.com/in/yourusername" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="text-skin hover:text-gray-700">
              <Linkedin size={24} />
            </a>
          </div>

          {/* Dark mode toggle */}
          <div className="mt-4 flex justify-center">
            <button
              className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none font-medium text-sm"
              onClick={toggleDarkMode}>
              {darkMode ? <Sun /> : <Moon />}
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
