import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-center bg-indigo-500 text-white p-4">
      <button
        className="block md:hidden"
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
        className={`flex flex-col space-y-2 md:flex-row md:space-x-4 ${
          isOpen ? "block" : "hidden md:block"
        }`}
      >
        <a href="#about" className="text-lg font-medium text-white hover:text-gray-300 md:block md:px-2 md:py-1">About Me</a>
        <a href="#projects" className="text-lg font-medium text-white hover:text-gray-300 md:block md:px-2 md:py-1">My Projects</a>
        <a href="#contact" className="text-lg font-medium text-white hover:text-gray-300 md:block md:px-2 md:py-1">Contact Me</a>
      </nav>
      <div className={`fixed inset-0 bg-gray-900 opacity-75 ${isOpen ? 'block' : 'hidden'}`} onClick={() => setIsOpen(!isOpen)}></div>
    </header>
  );
};

export default Header;





