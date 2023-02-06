import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/skills";

function App() {
  return (
    <div className="w-[100vw]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </div>
  );
}

export default App;
