import Reticula1 from "/src/assets/icons/Reticula1.svg?react";

const SectionTitle = ({ title, className }) => {
  return (
    <div className={className + " font-supermarioworld text-[#05FF4D] text-[44px] flex flex-col py-8"}>
      <hr />
      <h1 className="self-center">{title}</h1>
      <hr />
    </div>
  );
};

export default SectionTitle;
