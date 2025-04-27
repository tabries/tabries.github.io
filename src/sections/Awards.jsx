import { awards } from "../constants/index.js";
import SectionTitle from "../components/SectionTitle.jsx";

const Awards = () => {
  return (
    <section
      className="content-center c-space pb-20 mt-[5rem] relative"
      id="about"
    >
      <SectionTitle title="Awards" className={""} />
      <div
        className="flex flex-col h-full w-full items-center mt-12
          font-supermarioworld text-[#05FF4D]"
      >
        {awards.map((awards, index) => (
          <div
            key={index}
            className="text-[22px] leading-[30px] text-center flex flex-col"
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
