import { useState, useEffect, useRef, useMemo } from "react";
import ExperienceDuration from "../components/ExperienceDuration.jsx";
import ExperienceTitle from "../components/ExperienceTitle.jsx";
import ExperienceDescription from "../components/ExperienceDescription.jsx";
import ExperienceTechStack from "../components/ExperienceTechStack.jsx";
import ExperienceIcon from "../components/ExperienceIcon.jsx";
import { workExperiences } from "../constants";
import SectionTitle from "../components/SectionTitle.jsx";
import { useColors } from "../context/ColorContext.jsx";

const Experience = () => {
  const { setCurrentPalette } = useColors();
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);
  const lastScrollTimeRef = useRef(0);
  
  // Define the order of palettes for experiences
  const experiencePalettes = useMemo(() => 
    ["mintFresh", "neonGreen", "cyberpunk", "sunset", "iceBlue", "goldenTwilight"],
    []
  );

  // Change palette when index changes
  useEffect(() => {
    const paletteKey = experiencePalettes[currentIndex % experiencePalettes.length];
    setCurrentPalette(paletteKey);
  }, [currentIndex, experiencePalettes, setCurrentPalette]);
  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleWheel = (e) => {
      const now = Date.now();
      
      // Debounce rapid scroll events (within 50ms)
      if (now - lastScrollTimeRef.current < 1) {
        e.preventDefault();
        return;
      }
      
      // If currently animating, prevent scroll
      if (isScrollingRef.current) {
        e.preventDefault();
        return;
      }

      const delta = e.deltaY;
      const direction = delta > 0 ? 1 : -1;
      const newIndex = currentIndex + direction;

      // If within experience bounds, handle scroll
      if (newIndex >= 0 && newIndex < workExperiences.length) {
        e.preventDefault();
        e.stopPropagation();
        
        lastScrollTimeRef.current = now;
        isScrollingRef.current = true;

        setCurrentIndex(newIndex);

        // Clear any existing timeout
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }

        // Re-enable scrolling after animation completes
        scrollTimeoutRef.current = setTimeout(() => {
          isScrollingRef.current = false;
        }, 800); // Match transition duration
      }
      // If scrolling up from first experience, allow page scroll
      else if (newIndex < 0 && currentIndex === 0) {
        // Allow natural scroll up to previous section
        return;
      }
      // If scrolling down from last experience, allow page scroll
      else if (newIndex >= workExperiences.length && currentIndex === workExperiences.length - 1) {
        // Allow natural scroll down to next section
        return;
      }
    };

    section.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      section.removeEventListener('wheel', handleWheel);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [currentIndex, experiencePalettes]);
  
  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden" 
      id="experience"
    >
      <div className="absolute top-0 left-0 right-0 z-10 bg-background pt-8">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <SectionTitle title="Experience" />
        </div>
      </div>
      
      <div className="h-full w-full pt-24 flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-10 h-full flex items-center justify-center">
          {workExperiences.map((experience, index) => (
            <div 
              key={index}
              className={`absolute inset-0 flex flex-col items-center justify-center gap-6 md:gap-12 font-supermarioworld text-secondary transition-opacity duration-800 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              style={{
                padding: '6rem 1rem 2rem 1rem',
              }}
            >
              <ExperienceDuration date={experience.duration} />
              <ExperienceIcon
                src={experience.iconSource}
                className={experience.iconClassname}
                bgClassname={experience.iconBgClassname}
              />
              <ExperienceTitle title={experience.title} />
              <ExperienceDescription details={experience.description} />
              <ExperienceTechStack techStack={experience.techStack} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
