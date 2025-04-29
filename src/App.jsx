import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Footer from "./sections/Footer.jsx";
import Navbar from "./sections/Navbar.jsx";
import Contact from "./sections/Contact.jsx";
import Experience from "./sections/Experience.jsx";
import Education from "./sections/Education.jsx";
import Awards from "./sections/Awards.jsx";

const App = () => {
  return (
    <>
      <main className="max-w-7xl mx-auto relative">
        {/* <Navbar /> */}
        <Hero />
        <About />
        <Experience />
        <Education />
        <Awards />
        <Contact />

        {/* <Projects />
        <Clients />
        <WorkExperience />
        
        */}
      </main>
      <Footer />{" "}
    </>
  );
};

export default App;
