import { useState } from "react";
import { projects } from "../constants";
import SectionTitle from "../components/SectionTitle.jsx";
import Carousel from "../components/Carousel.jsx"
import CarouselCard from "../components/CarouselCard.jsx"

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="content-center md:px-10 relative pb-8 pt-8 lg:pt-0" id="projects">
      <SectionTitle title="Projects" />
      <div className="mt-8">
        <Carousel activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
          {projects.map((project, i) => {
            const isActive = activeIndex === i;
            return (
              <CarouselCard key={project.id} active={isActive}>
                <div
                  className={`relative w-full h-full bg-cover bg-center transition-all duration-600 ${
                    isActive ? "scale-100 blur-0" : "scale-90 blur-[5px]"
                  }`}
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url("${project.iconSource}")`,
                    transitionTimingFunction: "cubic-bezier(.165,.84,.44,1)",
                  }}
                >
                  <div
                    className={`relative mx-6 md:mx-8 lg:mx-12 text-[#e5e5e5]  top-1/2 text-3xl md:text-[3.3rem] font-bold transition-all duration-800 ease-in-out delay-300 ${
                      isActive
                        ? "opacity-100 -translate-y-1/2"
                        : "opacity-0 -translate-y-[30%]"
                    }`}
                  >
                    <h3 className="mb-4 leading-tight font-supermarioworld">{project.title}</h3>
                    <p className="text-base md:text-lg font-ubuntumono text-[#e5e5e5]/90 leading-relaxed">
                      {project.description[0]}
                    </p>
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors"
                    >
                      View Project ⬈
                    </a>
                  </div>
                </div>
              </CarouselCard>
            );
          })}
        </Carousel>
        <div className="flex justify-center mt-6 md:mt-8 gap-5">
          <button
            data-no-blobity
            type="button"
            className="h-8 w-20 border-none bg-[#060606] text-[#e5e5e5] cursor-pointer disabled:opacity-50 hover:bg-[#1a1a1a] transition-colors"
            disabled={activeIndex === 0}
            onClick={() => setActiveIndex(activeIndex - 1)}
          >
            Prev
          </button>
          <button
            data-no-blobity
            type="button"
            className="h-8 w-20 border-none bg-[#060606] text-[#e5e5e5] cursor-pointer disabled:opacity-50 hover:bg-[#1a1a1a] transition-colors"
            disabled={activeIndex === projects.length - 1}
            onClick={() => setActiveIndex(activeIndex + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
