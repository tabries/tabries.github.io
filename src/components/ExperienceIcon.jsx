import Reticula1 from "/src/assets/icons/Reticula1.svg?react";

const ExperienceIcon = ({ src }) => {
  return (
    <div className="mt-12
        max-lg:px-7 justify-self-center
        md:ml-40
        lg:w-[44rem] lg:ml-53">
      <img
        src={src}
        alt="experience-icon"
        className="w-full !h-[175px] h-fit object-contain"
      />
    </div>
  );
};

export default ExperienceIcon;
