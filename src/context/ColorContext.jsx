/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";
import { colorPalettes } from "../constants/colorPalettes";

const ColorContext = createContext();

export const useColors = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("useColors must be used within a ColorProvider");
  }
  return context;
};

export const ColorProvider = ({ children }) => {
  const [currentPalette, setCurrentPalette] = useState("default");
  const colors = colorPalettes[currentPalette];

  useEffect(() => {
    // Update CSS variables when palette changes
    document.documentElement.style.setProperty("--color-background", colors.background);
    document.documentElement.style.setProperty("--color-primary", colors.primary);
    document.documentElement.style.setProperty("--color-secondary", colors.secondary);
    document.documentElement.style.setProperty("--color-accent", colors.accent);
  }, [colors]);

  return (
    <ColorContext.Provider value={{ colors, currentPalette, setCurrentPalette }}>
      {children}
    </ColorContext.Provider>
  );
};
