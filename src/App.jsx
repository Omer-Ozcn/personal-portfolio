import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import ThemeProvider from "./context/ThemeContext";
import LanguageProvider from "./context/LangContext";
import "./index.css";
import Projects from "./components/Projects";
import PageDecorations from "./components/PageDecorations";

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="relative overflow-visible">
          <PageDecorations />
          <Navbar />
          <Hero />
          <Skills />
          <Profile />
          <Projects />
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
