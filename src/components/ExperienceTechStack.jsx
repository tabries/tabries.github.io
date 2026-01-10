import PillBorder from "/src/assets/icons/PillBorder.svg?react";
import { useColors } from "../context/ColorContext.jsx";

const ExperienceTechStack = ({ techStack }) => {
  const { colors } = useColors();

  return (
    <ul
      className="flex gap-4 flex-wrap justify-center mt-10
      "
    >
      {techStack.map((name, index) => (
        <li
          data-blobity
          data-blobity-offset-y="8"
          data-blobity-offset-x="8"
          key={index}
          className="relative items-center h-[48px] justify-center w-[8rem] text-center font-ubuntumono flex gap-12 mb-1"
        >
          <PillBorder className="absolute w-32 h-14" />
          <span
            className="ml-[0.25rem] text-[12px] font-supermarioworld z-10"
            style={{ color: colors.primary }}
          >
            {name}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default ExperienceTechStack;
