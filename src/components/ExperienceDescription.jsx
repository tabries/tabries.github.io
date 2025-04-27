import Reticula1 from "/src/assets/icons/Reticula1.svg?react";

const ExperienceDescription = ({ details }) => {
  return (
    <ul className="w-[44rem] ml-54 mt-8
    md:ml-26">
      {details.map((detail, index) => (
        <li key={index} className="font-ubuntumono flex gap-12 mb-4"><p>●</p><p>{detail}</p></li>
      ))}
    </ul>
  );
};

export default ExperienceDescription;
