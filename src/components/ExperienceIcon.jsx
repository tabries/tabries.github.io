import Reticula1 from "/src/assets/icons/Reticula1.svg?react";

const ExperienceIcon = ({ src, className, bgClassname }) => {
  return (
    !!src && (
      <div
        className={`${className} my-16 max-lg:px-7 justify-self-center md:ml-36 max-w-[18rem] lg:ml-40`}
      >
        <div className="relative mx-auto">
          <div
            className={`absolute -top-[2px] -left-[2px] w-[calc(100%+4px)] h-[calc(100%+4px)] 
            bg-gradient-to-r ${bgClassname}
            bg-[length:400%] animate-steam z-[-1]`}
          />
          <img
            src={src || null}
            alt="experience-icon"
            className="w-full h-fit object-contain"
          />
        </div>
      </div>
    )
  );
};

export default ExperienceIcon;
