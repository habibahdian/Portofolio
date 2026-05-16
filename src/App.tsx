import { navItems } from "./data/profile";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Highlights } from "./components/Highlights";
import { Navbar } from "./components/Navbar";
import { Research } from "./components/Research";
import { Skills } from "./components/Skills";
import { useActiveSection } from "./hooks/useActiveSection";
import { useTheme } from "./hooks/useTheme";
import "./App.css";

const sectionIds = navItems.map((n) => n.id);

function App() {
  const active = useActiveSection(sectionIds);
  const { theme, toggle } = useTheme();

  return (
    <>
      <div className="app-bg" aria-hidden="true" />
      <Navbar active={active} theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Highlights />
        <Research />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
