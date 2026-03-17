import { useState, useEffect, useRef } from "react";
import ThinChevronIcon from "/src/assets/icons/ThinChevronIcon.svg?react";

const Carousel = ({ activeIndex, setActiveIndex, children }) => {
  const carouselRef = useRef(null);
  const [carouselTranslate, setCarouselTranslate] = useState(null);

  useEffect(() => {
    if (carouselRef.current) {
      const initialTranslateVal = carouselRef.current.offsetWidth / 4;
      const diffAmount = initialTranslateVal * 2;
      const translate =
        activeIndex === 0
          ? initialTranslateVal
          : initialTranslateVal - activeIndex * diffAmount;
      setCarouselTranslate(translate);
    }
  }, [activeIndex]);

  return (
    <>
      <div className="relative">
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-all duration-[350ms] ease-in-out"
            ref={carouselRef}
            style={{ transform: `translateX(${carouselTranslate}px)` }}
          >
            {children}
          </div>
        </div>

        <button
          data-no-blobity
          type="button"
          className="group absolute left-0 top-0 h-full w-12 z-10 flex items-center justify-center bg-white/[0.03] hover:bg-white/[0.07] shadow-[0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_22px_rgba(255,255,255,0.13)] disabled:opacity-0 disabled:pointer-events-none transition-all duration-300 cursor-pointer"
          disabled={activeIndex === 0}
          onClick={() => setActiveIndex(activeIndex - 1)}
          aria-label="Previous slide"
        >
          <div className="rotate-180 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
            <ThinChevronIcon />
          </div>
        </button>

        <button
          data-no-blobity
          type="button"
          className="group absolute right-0 top-0 h-full w-12 z-10 flex items-center justify-center bg-white/[0.03] hover:bg-white/[0.07] shadow-[0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_22px_rgba(255,255,255,0.13)] disabled:opacity-0 disabled:pointer-events-none transition-all duration-300 cursor-pointer"
          disabled={activeIndex === children.length - 1}
          onClick={() => setActiveIndex(activeIndex + 1)}
          aria-label="Next slide"
        >
          <div className="opacity-50 group-hover:opacity-100 transition-opacity duration-300">
            <ThinChevronIcon />
          </div>
        </button>
      </div>

      <div className="flex justify-center mt-8 md:mt-10 gap-2.5">
        {children.map((child, i) => (
          <button
            key={i}
            data-blobity-magnetic="false"
            className={`h-2 w-2 rounded-full border-none p-[0.4rem] transition-colors cursor-pointer ${
              activeIndex === i ? "bg-primary" : "bg-secondary"
            }`}
            onClick={() => setActiveIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </>
  );
};

export default Carousel;