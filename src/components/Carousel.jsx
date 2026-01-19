import { useState, useEffect, useRef } from "react";

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
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-all duration-[350ms] ease-in-out"
          ref={carouselRef}
          style={{ transform: `translateX(${carouselTranslate}px)` }}
        >
          {children}
        </div>
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