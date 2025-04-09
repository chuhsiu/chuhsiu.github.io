import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import { I18nProvider } from "./store/i18nContext";

function App() {
  return (
    <I18nProvider>
      <Navbar />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
    </I18nProvider>
  );
}

export default App;
