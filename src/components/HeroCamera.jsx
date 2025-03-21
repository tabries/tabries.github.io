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
    const targetPosition = [-0.5, 0, 15.5 + scrollY * 0.06];
    easing.damp3(state.camera.position, targetPosition, 0.25, delta);

    // if (!isMobile) {
      easing.damp3(group.current.rotation, [0, scrollY * 0.001, 0], 0.25, delta);
    // }
  });

  // 

  return <group ref={group} position={[-2, -16.9, 0]} scale={9.20} >{children}</group>;
};

export default HeroCamera;