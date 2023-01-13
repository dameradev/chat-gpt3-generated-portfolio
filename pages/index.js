import React from "react";
import Modal from "../components/Modal";
import ContactForm from "../components/Contact";

const HomePage = () => {
  return (
    <main className="p-8">
     
      <section id="about" className="mb-12">
        <h2 className="text-2xl font-medium mb-4">About Me</h2>
        <p className="text-sm leading-loose">
          Meet Erik Vacev, an amateur photographer with a passion for capturing the beauty of nature and landscapes. His love for photography began at a young age and has grown over the years, as he traveled to different places and captured breathtaking images. Erik's attention to detail and his ability to capture the essence of a place make his photographs stand out. He mostly takes pictures of landscapes and nature, but occasionally he does portraits. He believes that every picture tells a story and he wants to share his stories with the world. He is always looking for new and exciting places to photograph, and he hopes to inspire others to see the world in a new way through his work.
        </p>
      </section>
      <section id="projects" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        <div className="bg-gray-300 p-4">
          <img src="path/to/project-1.jpg" alt="Project 1" className="w-full h-64 object-cover" />
          <h3 className="text-xl font-medium mt-4">Project 1</h3>
          <p className="text-sm text-gray-700">A brief description of project 1</p>
          <Modal project={{
            title: "Project 1",
            img: "path/to/project-1.jpg",
            description: "A more detailed description of project 1, including information about the techniques used, equipment, and any interesting facts or stories related to the project."
          }} />
        </div>
        <div className="bg-gray-300 p-4">
          <img src="path/to/project-2.jpg" alt="Project 2" className="w-full h-64 object-cover" />
          <h3 className="text-xl font-medium mt-4">Project 2</h3>
          <p className="text-sm text-gray-700">A brief description of project 2</p>

          <Modal project={{
            title: "Project 2",
            img: "path/to/project-2.jpg",
            description: "A more detailed description of project 2, including information about the techniques used, equipment, and any interesting facts or stories related to the project."
          }} />
        </div>
        <div className="bg-gray-300 p-4">
          <img src="path/to/project-3.jpg" alt="Project 3" className="w-full h-64 object-cover" />
          <h3 className="text-xl font-medium mt-4">Project 3</h3>
          <p className="text-sm text-gray-700">A brief description of project 3</p>
          <Modal project={{
            title: "Project 3",
            img: "path/to/project-3.jpg",
            description: "A more detailed description of project 3, including information about the techniques used, equipment, and any interesting facts or stories related to the project."
          }} />
        </div>
      </section>
      <section id="contact">
        <h2 className="text-2xl font-medium mb-4">Contact Me</h2>
        <ContactForm />
      </section>
    </main>
  );
};

export default HomePage;

