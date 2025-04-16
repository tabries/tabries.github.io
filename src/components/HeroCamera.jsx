import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

const HeroCamera = ({ isMobile, children }) => {
  const group = useRef();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useFrame((state, delta) => {
    const scrollYOffset = scrollY < 840 ? scrollY : 840;
    const targetPosition = [-0.5, scrollYOffset* -0.005, 15.5 + scrollYOffset * 0.02];
    easing.damp3(state.camera.position, targetPosition, 0.25, delta);

    // if (!isMobile) {
      easing.damp3(group.current.rotation, [0, scrollYOffset * 0.0008, 0], 0.25, delta);
    // }
  });

  // 

  return <group ref={group} position={[-2, -16.9, 0]} scale={9.20} >{children}</group>;
};

export default HeroCamera;