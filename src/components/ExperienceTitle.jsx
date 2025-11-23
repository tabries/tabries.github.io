import Reticula1 from "/src/assets/icons/Reticula1.svg?react";
import { useColors } from "../context/ColorContext.jsx";

const ExperienceTitle = ({ title }) => {
  const { colors } = useColors();

  return (
    <div
      className={`mt-12 text-[22px] leading-[30px]
        max-lg:px-7 justify-self-center
        md:ml-40
        lg:w-[44rem] lg:ml-53 text-[${colors.primary}]`}
        style={{ color: colors.primary }}
    >
      {title}
    </div>
  );
};

export default ExperienceTitle;
