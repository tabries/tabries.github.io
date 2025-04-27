import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";

const HeroCamera = ({ children }) => {
  const group = useRef();
  const [scrollY, setScrollY] = useState(0);
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const {
    heroCameraPosition,
    heroCameraPositionOffset,
    heroCameraRotationOffset,
  } = calculateSizes(isSmall, isMobile, isTablet);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useFrame((state, delta) => {
    const scrollYOffset = scrollY < 840 ? scrollY : 840;
    const [positionOffsetX, positionOffsetY, positionOffsetZ] =
      heroCameraPositionOffset;

    const targetPosition = [
      -0.5 + scrollYOffset * positionOffsetX,
      scrollYOffset * positionOffsetY,
      15.5 + scrollYOffset * positionOffsetZ,
    ];

    easing.damp3(state.camera.position, targetPosition, 0.25, delta);

    const [rotationOffsetX, rotationOffsetY, rotationOffsetZ] =
      heroCameraRotationOffset;

    easing.damp3(
      group.current.rotation,
      [
        scrollYOffset * rotationOffsetX,
        scrollYOffset * rotationOffsetY,
        scrollYOffset * rotationOffsetZ,
      ],
      0.25,
      delta
    );
  });

  return (
    <group ref={group} position={heroCameraPosition} scale={9.2}>
      {children}
    </group>
  );
};

export default HeroCamera;
