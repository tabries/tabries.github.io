import Reticula1 from "/src/assets/icons/Reticula1.svg?react";

const ExperienceDuration = ({ date }) => {
  return (
    <div className={"flex "}>
      <Reticula1 className="md:w-[150px]" />
      <div
        className="content-center border-4 border-dashed border-green-500 
        text-[32px] text-center 
        md:w-[44rem] xl:w-[50rem] "
      >
        {date}
      </div>
    </div>
  );
};

export default ExperienceDuration;
