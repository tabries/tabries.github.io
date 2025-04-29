import Reticula1 from "/src/assets/icons/Reticula1.svg?react";

const ExperienceIcon = ({ src, className }) => {
  return (
    <div className={`${className} mt-12
        max-lg:px-7 justify-self-center
        md:ml-36
        max-w-[18rem] lg:ml-40`}>
      <img
        src={src}
        alt="experience-icon"
        className="w-full h-fit object-contain"
      />
    </div>
  );
};

export default ExperienceIcon;
