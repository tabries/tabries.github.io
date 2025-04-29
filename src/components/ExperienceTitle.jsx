import Reticula1 from "/src/assets/icons/Reticula1.svg?react";

const ExperienceTitle = ({ title }) => {
  return (
    <div className="mt-12 text-[22px] leading-[30px]
        max-lg:px-7 justify-self-center
        md:ml-40
        lg:w-[44rem] lg:ml-53">
      {title}
    </div>
  );
};

export default ExperienceTitle;
