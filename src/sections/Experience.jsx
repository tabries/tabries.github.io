import ExperienceDuration from "../components/ExperienceDuration.jsx";
import ExperienceTitle from "../components/ExperienceTitle.jsx";
import ExperienceDescription from "../components/ExperienceDescription.jsx";
import ExperienceTechStack from "../components/ExperienceTechStack.jsx";
import { workExperiences } from "../constants/index.js";
import SectionTitle from "../components/SectionTitle.jsx";

const Experience = () => {
  return (
    <section
      className="content-center c-space relative pb-20"
      id="about"
    >
      <SectionTitle title="Experience" className={""}/>
      <div className="flex flex-col gap-5 h-full">
        <div
          className="flex flex-col content-center flex-wrap items-center gap-12
        font-supermarioworld text-[#05FF4D]"
        >
          {workExperiences.map((experience, index) => (
            <div key={index}>
              <ExperienceDuration date={experience.duration} />
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
