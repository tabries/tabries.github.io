import { useState } from "react";
import { projects } from "../constants";
import SectionTitle from "../components/SectionTitle.jsx";
// eslint-disable-next-line
import { AnimatePresence, motion } from "framer-motion";

const ProjectList = ({ projects, hovered, setHovered }) => (
  <div className="flex-1 flex flex-col justify-center gap-2 px-8 py-8">
    <div className="flex justify-between items-center mb-4">
      <span className="font-supermarioworld text-3xl">WORK</span>
      <span className="font-supermarioworld text-xl">{projects.length}</span>
    </div>
    <ul className="w-full">
      {projects.map((project, idx) => (
        <li
          key={project.id}
          className={`flex items-center justify-between py-2 border-b border-white/30 transition-colors cursor-pointer group
            ${hovered === idx ? "text-white" : "text-white/70"}
          `}
          onMouseEnter={() => setHovered(idx)}
        >
          <div className="flex items-center gap-2">
            <span className="font-ubuntumono text-lg">{project.title}</span>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const previewVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.175 } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.1 } },
};

const ProjectPreview = ({ project }) => (
  <div className="flex-1 flex items-center justify-center min-h-[340px]">
    <AnimatePresence mode="wait">
      <motion.div
        key={project.id}
        variants={previewVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative w-[480px] h-[340px] rounded-3xl flex flex-col items-center justify-center shadow-2xl overflow-hidden"
      >
        <img
          src={project.iconSource}
          alt={project.title}
          className="w-full h-full object-contain"
        />
      </motion.div>
    </AnimatePresence>
  </div>
);

const Projects = () => {
  const [hovered, setHovered] = useState(0);

  return (
    <section
      className="content-center md:px-10 relative pb-20"
      id="projects"
    >
      <SectionTitle title="Projects" />
      <div className="flex gap-5 h-full">
        <ProjectPreview project={projects[hovered]} hovered={hovered} />
        <ProjectList
          projects={projects}
          hovered={hovered}
          setHovered={setHovered}
        />
      </div>
    </section>
  );
};

export default Projects;
