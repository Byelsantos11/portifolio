import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Sobre from "./components/Sobre/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Sobre/>
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
