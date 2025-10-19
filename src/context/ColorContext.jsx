/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect, useRef } from "react";
import { colorPalettes } from "../constants/colorPalettes";
import chroma from "chroma-js";

const ColorContext = createContext();

export const useColors = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("useColors must be used within a ColorProvider");
  }
  return context;
};

export const ColorProvider = ({ children }) => {
  const [currentPalette, setCurrentPalette] = useState("neonGreen");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const colors = colorPalettes[currentPalette];
  const previousColorsRef = useRef(colors);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const previousColors = previousColorsRef.current;
    const targetColors = colors;

    // If colors are the same, don't animate
    if (
      previousColors.background === targetColors.background &&
      previousColors.primary === targetColors.primary &&
      previousColors.secondary === targetColors.secondary &&
      previousColors.accent === targetColors.accent
    ) {
      return;
    }

    setIsTransitioning(true);

    // Create color interpolators
    const bgInterpolator = chroma.scale([previousColors.background, targetColors.background]);
    const primaryInterpolator = chroma.scale([previousColors.primary, targetColors.primary]);
    const secondaryInterpolator = chroma.scale([previousColors.secondary, targetColors.secondary]);
    const accentInterpolator = chroma.scale([previousColors.accent, targetColors.accent]);

    const duration = 800; // milliseconds
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-in-out)
      const eased = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      // Interpolate colors
      const bg = bgInterpolator(eased).hex();
      const primary = primaryInterpolator(eased).hex();
      const secondary = secondaryInterpolator(eased).hex();
      const accent = accentInterpolator(eased).hex();

      // Update CSS variables
      document.documentElement.style.setProperty("--color-background", bg);
      document.documentElement.style.setProperty("--color-primary", primary);
      document.documentElement.style.setProperty("--color-secondary", secondary);
      document.documentElement.style.setProperty("--color-accent", accent);
      document.body.style.backgroundColor = bg;

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setIsTransitioning(false);
        previousColorsRef.current = targetColors;
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [colors]);

  return (
    <ColorContext.Provider value={{ colors, currentPalette, setCurrentPalette, isTransitioning }}>
      {children}
    </ColorContext.Provider>
  );
};
