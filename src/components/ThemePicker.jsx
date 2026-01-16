import { useState } from "react";
import { useColors } from "../context/ColorContext";
import { getPalette } from "../constants/colorPalettes";
import {
  MintFreshIcon,
  NeonGreenIcon,
  CyberpunkIcon,
  SunsetIcon,
  GoldenTwilightIcon,
  OceanBlueIcon,
  RetroWaveIcon,
} from "../assets/icons/themes";

const themesToShow = [
  "mintFresh",
  "neonGreen",
  "cyberpunk",
  "sunset",
  "goldenTwilight",
  "oceanBlue",
  "retroWave",
];

// Theme icons mapping
const themeIcons = {
  mintFresh: <MintFreshIcon />,
  neonGreen: <NeonGreenIcon />,
  cyberpunk: <CyberpunkIcon />,
  sunset: <SunsetIcon />,
  goldenTwilight: <GoldenTwilightIcon />,
  oceanBlue: <OceanBlueIcon />,
  retroWave: <RetroWaveIcon />,
};

export const ThemePicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentPalette, setCurrentPalette } = useColors();
  const currentPaletteData = getPalette(currentPalette);

  const handleThemeSelect = (key) => {
    setCurrentPalette(key);
    // setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Floating Menu - appears above button */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-30"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Theme Grid Menu */}
          <div 
            className="relative bottom-full right-0 mb-3 z-40 bg-tertiary bg-opacity-95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-gray-800 animate-in slide-in-from-bottom-2 duration-200"
          >
            <p className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">
              Choose Theme
            </p>
            <div className="grid grid-cols-4 gap-3">
              {themesToShow.map((key) => {
                const palette = getPalette(key);
                const isActive = currentPalette === key;
                return (
                  <button
                    key={key}
                    onClick={() => handleThemeSelect(key)}
                    className={`group relative w-8 h-8 rounded-xl transition-all duration-300 flex items-center justify-center bg-gray-800/50 hover:bg-gray-800 ${
                      isActive ? "ring-2 ring-white ring-offset-2 ring-offset-gray-900" : "hover:scale-110"
                    }`}
                    title={palette.name}
                  >
                    {themeIcons[key]}
                    {isActive && (
                      <div className="absolute inset-0 rounded-xl ring-2 ring-white/30" />
                    )}
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      {palette.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}

      {/* Toggle Button - shows current theme icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 rounded-xl bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 flex justify-self-end items-center justify-center group hover:scale-105"
        title={`Current: ${currentPaletteData.name}`}
      >
        {themeIcons[currentPalette] || themeIcons.sunset}
        
        {/* Small indicator dot */}
        {/* <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gradient-to-br from-primary to-secondary ring-2 ring-gray-900" /> */}
        
        {/* Tooltip */}
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-800 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          {currentPaletteData.name}
        </span>
      </button>
    </div>
  );
};