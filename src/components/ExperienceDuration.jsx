import Reticula1 from "/src/assets/icons/Reticula1.svg?react";
import { useColors } from "../context/ColorContext.jsx";

const ExperienceDuration = ({ date }) => {
  const { colors } = useColors();

  return (
    <div
      className="justify-self-center flex max-lg:mx-2 
      max-sm:w-86 max-sm:px-1"
    >
      <Reticula1 className="md:w-[150px]" />
      <div
        className="content-center border-4 border-dashed border-green-500 
        text-[20px] text-center 
        
        
       
        "
      >
        <span className="px-4" data-blobity style={{ color: colors.primary }}>
          {date}
        </span>
      </div>
    </div>
  );
};

export default ExperienceDuration;
