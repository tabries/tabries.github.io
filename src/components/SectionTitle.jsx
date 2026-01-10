import Reticula1 from "/src/assets/icons/Reticula1.svg?react";

const SectionTitle = ({ title, className }) => {
  return (
    <div
      className={`font-supermarioworld text-primary text-[44px] flex flex-col max-sm:text-[38px] ${className}`}
    >
      <hr />
      
      <h1 className="self-center" data-blobity>{title}</h1>
      <hr />
    </div>
  );
};

export default SectionTitle;
