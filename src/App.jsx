import "./App.css";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Service from "./sections/Service/Service";
import Skills from "./sections/Skills/Skills";

function App() {
  return (
    <>
      <Hero />
      <Service />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
