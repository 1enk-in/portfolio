import React from 'react';

const ProjectEntry = ({ image, title, description, tech, link, aosAnimation }) => {
  return (
    <div
      className="bg-white dark:bg-[#1f1f1f] backdrop-blur-md shadow-lg rounded-2xl p-4 transition-transform hover:scale-[1.02] border border-gray-200 dark:border-gray-700"
      data-aos={aosAnimation}
    >
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-xl mb-3" />
      <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{title}</h3>
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, index) => (
          <span key={index} className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs px-2 py-1 rounded-full">
            {item}
          </span>
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-purple-600 text-white px-4 py-1 rounded-md hover:bg-purple-700 transition"
      >
        View
      </a>
    </div>
  );
};

export default ProjectEntry;
