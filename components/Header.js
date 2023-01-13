import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full flex items-center justify-center bg-indigo-500 text-white p-3 ">
      <button
        className={`block md:hidden ${isOpen ? "hidden" : "block"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6 fill-current text-white"
          viewBox="0 0 24 24"
        >
          <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z"></path>
        </svg>
      </button>
      <nav
        className={`flex items-center flex-col md:flex-row  ${
          isOpen ? "flex" : "hidden md:flex"
          }`}
          onClick={() => {if (isOpen) setIsOpen(false)}}
      >
        <a href="#about" className="text-lg font-medium text-white hover:text-gray-300 md:block md:px-2 md:py-1">About Me</a>
        <a href="#projects" className="text-lg font-medium text-white hover:text-gray-300 md:block md:px-2 md:py-1">My Projects</a>
        <a href="#contact" className="text-lg font-medium text-white hover:text-gray-300 md:block md:px-2 md:py-1">Contact Me</a>
      </nav>
      <div className={`fixed inset-0 bg-gray-900 opacity-75 top-[108px] ${isOpen ? 'block' : 'hidden'}`} onClick={() => setIsOpen(!isOpen)}></div>
    </header>
  );
};

export default Header;





