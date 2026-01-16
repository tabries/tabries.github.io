import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Footer from "./sections/Footer.jsx";
import Navbar from "./sections/Navbar.jsx";
import Contact from "./sections/Contact.jsx";
import Experience from "./sections/Experience.jsx";
import Education from "./sections/Education.jsx";
import Awards from "./sections/Awards.jsx";;
import Projects from "./sections/Projects.jsx";
import { ColorProvider } from "./context/ColorContext.jsx";
import { ThemePicker } from "./components/ThemePicker.jsx";

const AppContent = () => {

  return (
    <div className="bg-background">
      <Navbar />
      <main className="mx-auto relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Awards />
        <Contact />
      </main>
      <Footer />
      <ThemePicker />
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
