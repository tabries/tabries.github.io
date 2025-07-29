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

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const blobity = useBlobity(initialBlobityOptions);

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto relative">
        
        <Hero />
        <About />
        <Experience />
        <Education />
        <Awards />
        <Contact />

        {/* <Projects />
        */}
      </main>
      <Footer />
    </>
  );
};

export default App;
