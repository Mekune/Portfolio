import "./App.css";
import "./tailwind.css";

import Tuto from "./components/tuto.js";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Projetcs from "./components/Projects.js";
import Skills from "./components/Skills.js";
import Exprerience from "./components/Exprecience.js";
import Contact from "./components/Contact.js";

function App() {
  return (
    <div className="App h-max bg-gray-800  text-gray-400">
      <Navbar />
      <Home />
      <About />
      <Projetcs />
      <Skills />
      <Exprerience />
      <Contact />
      <Tuto />
    </div>
  );
}

export default App;
