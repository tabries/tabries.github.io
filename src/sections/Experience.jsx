import ExperienceDuration from "../components/ExperienceDuration.jsx";
import ExperienceTitle from "../components/ExperienceTitle.jsx";
import ExperienceDescription from "../components/ExperienceDescription.jsx";
import ExperienceTechStack from "../components/ExperienceTechStack.jsx";
import ExperienceIcon from "../components/ExperienceIcon.jsx";
import { workExperiences } from "../constants";
import SectionTitle from "../components/SectionTitle.jsx";
import Reticula3 from "/src/assets/icons/Reticula3.svg?react";

const Experience = () => {
  
  return (
    <section className="content-center 2xl:px-10 relative pt-8" id="experience">
      <SectionTitle title="Experience" />
      
      <article className=" md:mx-auto overflow-clip font-supermarioworld">
        {workExperiences.map((experience, index) => (
          <section 
            key={experience.id}
            className="mb-4 gap-2 
            lg:grid grid-cols-[auto_1fr] lg:grid-cols-[8fr_auto_8fr] lg:place-content-center lg:mb-0"
            style={{
              gridTemplateAreas: 
                index % 2 === 0 
                  ? "'date point event'" 
                  : "'event point date'"
            }}
          >
            {/* Timeline Event - Title & Icon */}
            <div 
              className="timeline-event p-6 flex flex-col items-center gap-4 backdrop-blur-sm rounded-lg  
              lg:w-full lg:py-0 lg:justify-center"
              style={{
                gridArea: 'event',
                '--translation': index % 2 === 0 ? '100px' : '-100px',
                marginInlineStart: index % 2 === 0 ? '0' : 'auto'
              }}
            >
                <ExperienceIcon
                  src={experience.iconSource}
                  className={experience.iconClassname}
                  bgClassname={experience.iconBgClassname}
                />
                <ExperienceTitle title={experience.title} />
            </div>
            
            {/* Timeline Point with connecting line */}
            <div 
              className="timeline-point relative  items-center justify-center w-full
              hidden lg:flex"
              style={{ 
                gridArea: 'point',
                '--timeline-line-color': '#39FF14'
              }}
            >
              <Reticula3 className="timeline-point-dot w-16" />
            </div>
            
            {/* Timeline Date - Duration, Description & Tech Stack */}
            <div 
              className={`timeline-date flex flex-col gap-4 py-4 mx-6
              lg:py-0 lg:my-12
              ${index === 0 ? "lg:mt-20" : ""}`}
              style={{
                gridArea: 'date',
                '--translation': index % 2 === 0 ? '-100px' : '100px',
                justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
                alignItems: 'center'
              }}
            >
              <div className=" w-full space-y-4
              lg:max-w-[500px]
              2xl:max-w-3/4">
                <ExperienceDuration date={experience.duration} />
                <ExperienceDescription details={experience.description} />
                <ExperienceTechStack techStack={experience.techStack} />
              </div>
            </div>
          </section>
        ))}
      </article>
    </section>
  );
};

export default Experience;