import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Sobre from "./components/Sobre/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import LojaBrinquedo from "./components/Projects/LojaBrinquedo";
import ProjetoAparecida from "./components/Projects/ProjetoAparecida";
import BpgStore from "./components/Projects/BpgStore";
import JwtProject from "./components/Projects/Jwt";
import Fibrosense from "./components/Projects/Fibrosense";

const Home = () => (
  <div className="App">
    <Navbar />
    <main>
      <Hero />
      <Sobre />
      <Projects />
      <Contact />
    </main>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loja-brinquedo" element={<LojaBrinquedo />} />
        <Route path="/projeto-aparecida" element={<ProjetoAparecida />} />
        <Route path="/bpg-store" element={<BpgStore />} />
        <Route path="/token-jwt" element={<JwtProject />} />
        <Route path="/fibrosense" element={<Fibrosense />} />
      </Routes>
    </Router>
  );
}

export default App;
