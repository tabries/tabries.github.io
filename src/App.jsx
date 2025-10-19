import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Footer from "./sections/Footer.jsx";
import Navbar from "./sections/Navbar.jsx";
import Contact from "./sections/Contact.jsx";
import Experience from "./sections/Experience.jsx";
import Education from "./sections/Education.jsx";
import Awards from "./sections/Awards.jsx";
import { initialBlobityOptions } from "./constants/";
import useBlobity from "blobity/lib/react/useBlobity";
import Projects from "./sections/Projects.jsx";
import { ColorProvider, useColors } from "./context/ColorContext.jsx";
import { useControls } from "leva";
import { paletteNames } from "./constants/colorPalettes.js";

const AppContent = () => {
  // eslint-disable-next-line no-unused-vars
  const blobity = useBlobity(initialBlobityOptions);
  const { setCurrentPalette, colors } = useColors();

  // Leva controls for color palette
  useControls({
    "Color Palette": {
      value: "Default Green",
      options: Object.keys(paletteNames),
      onChange: (paletteName) => {
        setCurrentPalette(paletteNames[paletteName]);
      },
    },
  });

  return (
    <div className="bg-black" style={{ backgroundColor: colors.background }}>
      <Navbar />
      <main className="max-w-7xl mx-auto relative">
        
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Awards />
        <Contact />

      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <ColorProvider>
      <AppContent />
    </ColorProvider>
  );
};

export default App;
