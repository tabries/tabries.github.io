import { Leva } from "leva";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { PerspectiveCamera } from "@react-three/drei";

import CanvasLoader from "../components/Loading.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import { calculateSizes } from "../constants/index.js";
import DemoComputer from "../components/DemoComputer.jsx";

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const { perspectiveCameraPosition, perspectiveCameraRotation } =
    calculateSizes(isSmall, isMobile, isTablet);

  const [sectionOpacity, setSectionOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      let scrollYOffset = window.scrollY < 960 ? 0 : window.scrollY - 960;
      // Calculate sectionOpacity based on scrollY (clamp between 0 and 1)
      const newSectionOpacity = Math.max(0, 1 - scrollYOffset / 600);
      setSectionOpacity(newSectionOpacity);

      scrollYOffset = window.scrollY < 720 ? 0 : window.scrollY - 720;
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
      {/* <Leva /> */}
      <div className="w-full h-full fixed inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            {/* <Leva hidden /> */}
            <PerspectiveCamera
              makeDefault
              position={perspectiveCameraPosition}
              rotation={perspectiveCameraRotation}
            />

            <HeroCamera>
              <DemoComputer texture={"/textures/helloWorldImGabo.mp4"} />
            </HeroCamera>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
