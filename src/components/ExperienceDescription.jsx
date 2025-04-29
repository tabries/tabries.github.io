import Reticula1 from "/src/assets/icons/Reticula1.svg?react";

const ExperienceDescription = ({ details }) => {
  return (
    <ul
      className="mt-8
      max-lg:px-6
      lg:ml-26 lg:ml-54 lg:w-[44rem]"
    >
      {details.map((detail, index) => (
        <li
          key={index}
          className="font-ubuntumono flex gap-12 mb-4 items-center
            max-lg:gap-6"
        >
          <p>●</p>
          <p>{detail}</p>
        </li>
      ))}
    </ul>
  );
};

export default ExperienceDescription;
