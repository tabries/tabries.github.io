import PillBorder from "/src/assets/icons/PillBorder.svg?react";

const ExperienceTechStack = ({ techStack }) => {
  return (
    <ul className="flex gap-4 flex-wrap justify-center mt-10
      lg:ml-30 lg:ml-53 lg:w-[44rem]">
      {techStack.map((name, index) => (
        <li key={index} className="items-center  h-[48px] justify-center w-[8rem] text-center font-ubuntumono flex gap-12 mb-1">
          <PillBorder className="absolute w-32 h-14"/>
          <span className="ml-[0.25rem] text-[12px] font-supermarioworld z-10">{name}</span>
        </li>
      ))}
    </ul>
  );
};

export default ExperienceTechStack;
