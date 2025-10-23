// Popular color palettes from ColorHunt
export const colorPalettes = {
  default: {
    name: "Default Green",
    background: "#355070",
    primary: "#eaac8b",
    secondary: "#B8C4A9",
    accent: "#6FA4AF",
  },
  neonGreen: {
    name: "Neon Green",
    background: "#0D1117",
    primary: "#39FF14",
    secondary: "#FFFFFF",
    accent: "#1F2937",
  },
  cyberpunk: {
    name: "Cyberpunk",
    background: "#0A0E27",
    primary: "#00F0FF",
    secondary: "#FF006E",
    accent: "#1A1D3A",
  },
  purpleHaze: {
    name: "Purple Haze",
    background: "#1A0B2E",
    primary: "#7B2FBE",
    secondary: "#E0B0FF",
    accent: "#2D1B4E",
  },
  oceanBlue: {
    name: "Ocean Blue",
    background: "#0A192F",
    primary: "#64FFDA",
    secondary: "#CCD6F6",
    accent: "#172A45",
  },
  sunset: {
    name: "Sunset",
    background: "#1A1423",
    primary: "#F97068",
    secondary: "#FFDAB9",
    accent: "#2D2433",
  },
  mintFresh: {
    name: "Mint Fresh",
    background: "#0F2027",
    primary: "#2BC0E4",
    secondary: "#EAEAEA",
    accent: "#203A43",
  },
  retroWave: {
    name: "Retro Wave",
    background: "#120136",
    primary: "#FF006E",
    secondary: "#FFBE0B",
    accent: "#2D0456",
  },
  forestGreen: {
    name: "Forest Green",
    background: "#0B1D0F",
    primary: "#4ADE80",
    secondary: "#D1FAE5",
    accent: "#1A3A1F",
  },
  electricBlue: {
    name: "Electric Blue",
    background: "#000428",
    primary: "#004E92",
    secondary: "#00D4FF",
    accent: "#001A3A",
  },
  hotPink: {
    name: "Hot Pink",
    background: "#1C0A1E",
    primary: "#FF10F0",
    secondary: "#FFC0E9",
    accent: "#3A1A3E",
  },
  limeGreen: {
    name: "Lime Green",
    background: "#0F1419",
    primary: "#CCFF00",
    secondary: "#FFFFFF",
    accent: "#1F2933",
  },
  goldenHour: {
    name: "Golden Hour",
    background: "#1A1208",
    primary: "#FFD700",
    secondary: "#FFF8DC",
    accent: "#2D2418",
  },
  iceBlue: {
    name: "Ice Blue",
    background: "#0C1821",
    primary: "#A3E7FC",
    secondary: "#E6F7FF",
    accent: "#1B2F3A",
  },
  lavender: {
    name: "Lavender Dreams",
    background: "#1A0F2E",
    primary: "#B794F6",
    secondary: "#E9D5FF",
    accent: "#2D1A4E",
  },
};

// Get palette names for Leva dropdown
export const paletteNames = Object.keys(colorPalettes).reduce((acc, key) => {
  acc[colorPalettes[key].name] = key;
  return acc;
}, {});

// Get a palette by key
export const getPalette = (key) => colorPalettes[key] || colorPalettes.default;
