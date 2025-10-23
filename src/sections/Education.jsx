import { education } from "../constants";
import SectionTitle from "../components/SectionTitle.jsx";
import { useColors } from "../context/ColorContext.jsx";

const Education = () => {
  const { colors } = useColors();
  
  return (
    <section className="content-center md:px-10 relative" id="education">
      <SectionTitle title="Education" />
      <div
        className="flex flex-col h-full w-full items-center mt-12
        font-supermarioworld"
        style={{ color: colors.primary }}
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
