import About from "./components/About";

import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import { HelmetProvider } from "react-helmet-async";
import Contact from "./components/Contact";
import Newsletter from "./components/Newsletter";
import Retainer from "./components/retainer";
import Footer from "./components/Footer";


function App() {
  return (
    <HelmetProvider >
      <div className="App">
        <Hero />
        <About />
        <Gallery/>
        <Contact/>
        <Newsletter/>
        <Retainer/>
        <Footer/>
        
      </div>
    </HelmetProvider>
  );
}

export default App;