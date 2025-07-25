
import Hero from "./pages/Hero";


import Navbar from "./components/Navbar";
import "./index.css";

import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    
      <div className="bg-gradient-to-b from-white via-sky-50 to-indigo-50 text-gray-900 font-sans min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
      
      </div>
    
  );
}
