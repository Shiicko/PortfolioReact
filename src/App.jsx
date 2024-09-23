import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./style/GlobalStyles";
import Navbar from "./components/Navbar";
import { themes } from "../theme";
import { Hero } from "./components/Hero/Hero";
import { Proyectos } from "./components/Proyectos/Proyectos";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import { Contact } from "./components/Contact/Contact";

const App = () => {
  const [mode, setMode] = useState("light");

  const toggleTheme = () =>
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));

  return (
    <ThemeProvider theme={themes[mode]}>
      <GlobalStyles />
      <Navbar mode={mode} toggleTheme={toggleTheme} />
      <Hero />
      <Proyectos />
      <About />
      <Skills />
      <Contact />
    </ThemeProvider>
  );
};

export default App;
