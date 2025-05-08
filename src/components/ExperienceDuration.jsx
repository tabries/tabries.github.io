import Reticula1 from "/src/assets/icons/Reticula1.svg?react";

const ExperienceDuration = ({ date }) => {
  return (
    <div
      className="justify-self-center flex max-lg:mx-2 
      max-sm:w-86 max-sm:px-1"
    >
      <Reticula1 className="md:w-[150px]" />
      <div
        className="content-center border-4 border-dashed border-green-500 
        text-[20px] text-center 
        
        max-sm:w-70
        md:text-[32px]
        md:w-[44rem] xl:w-[50rem]"
      >
        <span className="px-4">{date}</span>
      </div>
    </div>
  );
};

export default ExperienceDuration;
