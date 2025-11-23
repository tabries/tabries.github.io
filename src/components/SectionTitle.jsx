import Reticula1 from "/src/assets/icons/Reticula1.svg?react";

const SectionTitle = ({ title }) => {
  return (
    <div
      className="font-supermarioworld text-primary text-[44px] flex flex-col py-8 max-sm:text-[38px]"
    >
      <hr />
      
      <h1 className="self-center" data-blobity>{title}</h1>
      <hr />
    </div>
  );
};

export default SectionTitle;
