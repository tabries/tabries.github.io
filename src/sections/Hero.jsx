import { Leva } from "leva";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { PerspectiveCamera } from "@react-three/drei";

import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Button from "../components/Button.jsx";
import Target from "../components/Target.jsx";
import CanvasLoader from "../components/Loading.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import { calculateSizes } from "../constants/index.js";
import DemoComputer from "../components/DemoComputer.jsx";

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  const [sectionOpacity, setSectionOpacity] = useState(1);
  const [buttonOpacity, setButtonOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      let scrollYOffset = window.scrollY < 960 ? 0 : window.scrollY - 960;
      // Calculate sectionOpacity based on scrollY (clamp between 0.2 and 1)
      const newSectionOpacity = Math.max(0, 1 - scrollYOffset / 600);
      setSectionOpacity(newSectionOpacity);

      scrollYOffset = window.scrollY < 720 ? 0 : window.scrollY - 720;
      const newButtonOpacity = Math.max(0, 1 - scrollYOffset / 160);
      setButtonOpacity(newButtonOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="min-h-screen w-full flex flex-col h-80"
      id="home"
      style={{ opacity: sectionOpacity }} // Dynamically set sectionOpacity
    >
      <div className="w-full h-full fixed inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <DemoComputer
                texture={"/textures/project/helloWorldImGabo.mp4"}
              />
            </HeroCamera>

            <group>
              {/* <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Rings position={sizes.ringPosition} />
              <Cube position={sizes.cubePosition} /> */}
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div
        className="fixed bottom-14 left-0 right-0 w-full z-20 c-space"
        style={{ opacity: buttonOpacity }}
      >
        <a href="#about" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
