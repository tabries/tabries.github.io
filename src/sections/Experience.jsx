import ExperienceDuration from "../components/ExperienceDuration.jsx";
import ExperienceTitle from "../components/ExperienceTitle.jsx";
import ExperienceDescription from "../components/ExperienceDescription.jsx";
import ExperienceTechStack from "../components/ExperienceTechStack.jsx";
import ExperienceIcon from "../components/ExperienceIcon.jsx";
import { workExperiences } from "../constants";
import SectionTitle from "../components/SectionTitle.jsx";
import { useColors } from "../context/ColorContext.jsx";

const Experience = () => {
  const { colors } = useColors();
  
  return (
    <section className="content-center md:px-10 relative pb-20" id="experience">
      <SectionTitle title="Experience" />
      <div className="flex flex-col gap-5 h-full">
        <div
          className="flex flex-col content-center flex-wrap items-center gap-12
        font-supermarioworld"
          style={{ color: colors.secondary }}
        >
          {workExperiences.map((experience, index) => (
            <div key={index}>
              <ExperienceDuration date={experience.duration} />
              <ExperienceIcon
                src={experience.iconSource}
                className={experience.iconClassname}
                bgClassname={experience.iconBgClassname}
              />
              <ExperienceTitle title={experience.title} />
              <ExperienceDescription details={experience.description} />
              <ExperienceTechStack techStack={experience.techStack} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
