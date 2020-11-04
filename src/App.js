import React from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Splash from "./components/Splash/Splash";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";
function App() {
  return (
    <div id={"home"}>
      <Navigation/>
      <Splash/>
      <Skills/>
        <Projects/>
        <AboutMe/>
        </div>
  );
}

export default App;
