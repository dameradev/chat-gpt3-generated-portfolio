import React, { useState } from 'react';

const Modal = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div onClick={() => { if (isOpen) setIsOpen(false) }}>
      <button className="bg-gray-800 text-white p-3 rounded-md hover:bg-gray-900" onClick={openModal}>
        More Info
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-75">
          <div className="m-auto max-w-sm bg-white rounded-md p-6">
            <button className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-700" onClick={closeModal}>
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <h2 className="text-lg font-medium mb-4">{project.title}</h2>
            <img src={project.img} alt={project.title} className="w-full h-64 object-cover mb-4" />
            <p className="text-sm leading-loose">{project.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
