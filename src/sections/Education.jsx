import { education } from "../constants/index.js";
import SectionTitle from "../components/SectionTitle.jsx";

const Education = () => {
  return (
    <section className="content-center c-space relative" id="education">
      <SectionTitle title="Education" />
      <div
        className="flex flex-col h-full w-full items-center mt-12
        font-supermarioworld text-[#05FF4D]"
      >
        {education.map((education, index) => (
          <div
            key={index}
            className="text-[22px] leading-[30px] text-center flex flex-col"
          >
            <span>{education.title}</span>
            <span className="text-[14px]">{education.institution}</span>
            <span className="text-[14px]">{education.location}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
