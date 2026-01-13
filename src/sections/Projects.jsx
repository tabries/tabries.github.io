import { useState } from "react";
import { projects } from "../constants";
import SectionTitle from "../components/SectionTitle.jsx";
// eslint-disable-next-line
import { AnimatePresence, motion } from "framer-motion";

const ProjectList = ({ projects, hovered, setHovered }) => {
  return (
    <div className="w-[30%] flex flex-col justify-center gap-2 py-8">
      <ul className="w-full">
        {projects.map((project, idx) => (
          <li
            key={project.id}
            className={`flex items-center justify-between py-2 border-b border-white/30 transition-colors group
              ${hovered === idx ? "text-white" : "text-primary"}`}
            onMouseEnter={() => setHovered(idx)}
          >
            <div className="flex items-center gap-2 w-full">
              {/* Desktop: title clickable to setHovered, not a link */}
              <span
                className="font-ubuntumono text-lg hidden sm:inline cursor-pointer"
                onClick={() => setHovered(idx)}
              >
                {project.title}
              </span>
              {/* Mobile: title not clickable, but link icon shown */}
              <span className="font-ubuntumono text-lg sm:hidden" data-blobity>
                {project.title}
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block ml-2 align-middle"
                >
                  <span className="ml-1">🔗</span>
                </a>
              </span>
            </div>
            {/* Desktop: link icon after title, only visible on sm and up */}
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-block ml-2 align-middle"
            >
              <span className="ml-1">⬈</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const previewVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.175 } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.1 } },
};

const ProjectPreview = ({ project }) => {
  return (
    <div className="w-[60%] flex items-center justify-center min-h-[340px]">
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
          <span className="font-ubuntumono text-base text-primary px-4 text-center">
            {project.description}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const Projects = () => {
  const [hovered, setHovered] = useState(0);

  return (
    <section className="content-center md:px-10 relative pb-8" id="projects">
      <SectionTitle title="Projects" />
      <div className="flex gap-5 h-full justify-center mt-8">
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
