import Reticula1 from "/src/assets/icons/Reticula1.svg?react";
import { useColors } from "../context/ColorContext.jsx";

const ExperienceTitle = ({ title }) => {
  const { colors } = useColors();

  return (
    <div
      className={`text-center px-7 text-[22px] leading-[30px]
        lg:px-0 justify-self-center
        text-[${colors.primary}]`}
        style={{ color: colors.primary }}
    >
      {title}
    </div>
  );
};

export default ExperienceTitle;
