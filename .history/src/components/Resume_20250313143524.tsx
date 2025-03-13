import { config } from "../constants/config";

const Resume = () => {
  return (
    <div className="mt-12">
      <h2 className="text-white text-[32px] font-bold">{config.sections.Resume.h2}</h2>
      <p className="text-secondary mt-4">{config.sections.Resume.p}</p>
      <a
        href={config.sections.Resume.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-tertiary px-6 py-3 rounded-lg text-white font-bold hover:bg-secondary transition"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
