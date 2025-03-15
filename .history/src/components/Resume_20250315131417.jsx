import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Resume = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>MY QUALIFICATIONS</p>
        <h2 className={styles.sectionHeadText}>Resume.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          <p>View or download my full resume below:</p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "spring", 0.5, 0.75)}
          className="mt-5 bg-black-100 p-5 rounded-2xl"
        >
          <div className="w-full h-[600px] overflow-hidden rounded-lg shadow-lg">
            <object
              data="/Tava_Resume_1100.pdf"
              type="application/pdf"
              className="w-full h-full"
            >
              <p className="text-center py-10">
                Your browser does not support PDFs.{" "}
                <a 
                  href="/Tava_Resume_1100.pdf" 
                  className="text-white font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download the PDF
                </a>
              </p>
            </object>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Resume, "resume");