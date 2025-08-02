import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ThemeProvider from "./context/ThemeContext";  
import LanguageProvider from "./context/LangContext";  


function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Router>
          <div className="relative overflow-hidden">
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Hero />
                <Skills />
                <Profile />
                <Projects />
                <Footer />
              </Route>
            </Switch>
          </div>
        </Router>
        <ToastContainer />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
