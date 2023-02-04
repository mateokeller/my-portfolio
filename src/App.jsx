import {useEffect, useState} from "react";
import {Element} from "react-scroll";
import AboutMe from "./components/AboutMe";
import CardsContainer from "./components/CardsContainer";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";

import Header from "./ui/Header";

function App() {
  // navbar scroll when active state
  const [navbar, setNavbar] = useState(false);

  // navbar scroll addShadow function
  const changeShadow = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeShadow();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeShadow);
  });

  return (
    <div className="App">
      <Header
      // headerStyles={
      //   navbar ? "header-container header-shadow" : "header-container"
      // }
      />

      <Element id="home" name="home">
        <Intro />
      </Element>

      <Element id="about-me" name="about-me">
        <AboutMe />
      </Element>
      <CardsContainer />
      <Element id="portfolio" name="portfolio">
        <Portfolio />
      </Element>
    </div>
  );
}

export default App;
