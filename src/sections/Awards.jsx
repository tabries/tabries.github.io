import { awards } from "../constants";
import SectionTitle from "../components/SectionTitle.jsx";
import { useColors } from "../context/ColorContext.jsx";

const Awards = () => {
  const { colors } = useColors();
  
  return (
    <section
      className="content-center md:px-10 pb-20 mt-[5rem] relative"
      id="awards"
    >
      <SectionTitle title="Awards" />
      <div
        className="flex flex-col h-full w-full items-center mt-12
          font-supermarioworld"
        style={{ color: colors.primary }}
      >
        {awards.map((awards, index) => (
          <div
            key={index}
            className="text-[22px] leading-[30px] text-center flex flex-col mx-1"
          >
            <span>{awards.title}</span>
            <span className="text-[14px]">{awards.institution}</span>
            <span className="text-[14px]">{awards.location}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
