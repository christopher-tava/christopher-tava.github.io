import { motion } from "framer-motion";
import { styles } from "./constants/styles";
import { StarsCanvas } from "./components";
import { Navbar } from "./components";

const ProjectsPage = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
      </div>
      <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <motion.div>
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
          <p className={`${styles.sectionSubText}`}>My work</p>
        </motion.div>

        <div className="mt-20 flex flex-wrap gap-7">
          {/* Your project content will go here */}
          <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
            <h3 className="text-white font-bold text-[24px]">Project Title</h3>
            <p className="mt-2 text-secondary text-[14px]">
              Project description goes here. Explain what the project does and what technologies you used.
            </p>
          </div>
        </div>
      </div>
      <StarsCanvas />
    </div>
  );
};

export default ProjectsPage;