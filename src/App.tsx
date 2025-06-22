import About from "./components/About";
import Hero from "./components/Hero";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Hero />
        <About />
      </div>
    </HelmetProvider>
  );
}

export default App;