import Reticula1 from "/src/assets/icons/Reticula1.svg?react";
import { useColors } from "../context/ColorContext.jsx";

const SectionTitle = ({ title }) => {
  const { colors } = useColors();
  
  return (
    <div
      className="font-supermarioworld text-[44px] flex flex-col py-8
      max-sm:text-[38px]"
      style={{ color: colors.primary }}
    >
      <hr />
      
      <h1 className="self-center" data-blobity>{title}</h1>
      <hr />
    </div>
  );
};

export default SectionTitle;
