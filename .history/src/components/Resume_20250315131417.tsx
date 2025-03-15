import React from 'react';
import '../styles/Resume.css';

const Resume: React.FC = () => {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <div className="pdf-container">
        <object
          data="/Tava_Resume_1100.pdf"
          type="application/pdf"
          width="100%"
          height="600px"
        >
          <p>
            It appears your browser doesn't support embedded PDFs.{' '}
            <a href="/Tava_Resume_1100.pdf">
              Click here to download the PDF
            </a>
            .
          </p>
        </object>
      </div>
    </section>
  );
};

export default Resume;