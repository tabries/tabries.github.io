import { education } from "../constants/index.js";
import SectionTitle from "../components/SectionTitle.jsx";

const Education = () => {
  return (
    <section
      className="content-center c-space relative"
      id="about"
    >
      <SectionTitle title="Education" className={""} />
      <div className="flex flex-col gap-5 h-full ml-60 mt-12 w-[44rem] text-[22px] leading-[30px]">
        <div
          className="flex flex-col content-center flex-wrap items-center gap-12
        font-supermarioworld text-[#05FF4D]"
        >
          {education.map((education, index) => (
            <div
              key={index}
              className="text-[22px] leading-[30px] tracking-[0%] text-center flex flex-col"
            >
              <span>{education.title}</span>
              <span className="text-[14px]">{education.institution}</span>
              <span className="text-[14px]">{education.location}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
