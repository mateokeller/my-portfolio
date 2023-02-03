import {useEffect, useState} from "react";
import {Element} from "react-scroll";
import AboutMe from "./components/layout/AboutMe";
import Intro from "./components/layout/Intro";

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
        headerStyles={
          navbar ? "header-container header-shadow" : "header-container"
        }
      />
      <div className="container">
        <Element id="home" name="home">
          <Intro />
        </Element>

        <Element id="about-me" name="about-me">
          <AboutMe />
        </Element>
      </div>
    </div>
  );
}

export default App;
