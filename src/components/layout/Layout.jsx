import React from "react";
import {Element} from "react-scroll";

import Intro from "../intro";
import AboutMe from "../AboutMe";
import Portfolio from "../Portfolio";
import CardsContainer from "../CardsContainer";

const Layout = () => {
  return (
    <>
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
    </>
  );
};

export default Layout;
