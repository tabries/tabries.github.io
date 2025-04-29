import Reticula1 from "/src/assets/icons/Reticula1.svg?react";

const ExperienceDuration = ({ date }) => {
  return (
    <div className="flex max-lg:mx-5">
      <Reticula1 className="md:w-[150px]" />
      <div
        className="content-center border-4 border-dashed border-green-500 
        text-[28px] text-center 
        lg:text-[32px]
        md:w-[44rem] xl:w-[50rem]"
      >
        {date}
      </div>
    </div>
  );
};

export default ExperienceDuration;
