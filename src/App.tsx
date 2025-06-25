import About from "./components/About";

import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import { HelmetProvider } from "react-helmet-async";


function App() {
  return (
    <HelmetProvider >
      <div className="App">
        <Hero />
        <About />
        <Gallery/>
      </div>
    </HelmetProvider>
  );
}

export default App;