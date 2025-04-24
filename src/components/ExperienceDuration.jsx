import Reticula1 from "/src/assets/icons/Reticula1.svg?react";

const ExperienceDuration = ({ date }) => {
  return (
    <div className={"flex "}>
      <Reticula1 />
      <div
        className="content-center w-[50rem] border-4 border-dashed border-green-500 
        text-[32px] text-center"
      >
        {date}
      </div>
    </div>
  );
};

export default ExperienceDuration;
