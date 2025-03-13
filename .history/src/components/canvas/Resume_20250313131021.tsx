import React from 'react';

const Resume = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-4">Download My Resume</h2>
      <a
        href="/resume.pdf" // Direct path to the file in the public folder
        download="Christopher_Tava_Resume.pdf"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
