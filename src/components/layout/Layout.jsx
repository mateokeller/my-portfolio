import React from "react";
import {Element} from "react-scroll";

import Header from "../Header";
import AboutMe from "../AboutMe";
import Portfolio from "../Portfolio";
import CardsContainer from "../CardsContainer";
import Contact from "../Contact";
import Footer from "../Footer";

const Layout = () => {
  return (
    <>
      <Element id="home" name="home">
        <Header />
      </Element>

      <Element id="about-me" name="about-me" className="bg-gray-02">
        <AboutMe />
      </Element>
      <CardsContainer />
      <Element id="portfolio" name="portfolio">
        <Portfolio />
      </Element>
      <Element id="contact" name="contact">
        <Contact />
      </Element>

      <Footer />
    </>
  );
};

export default Layout;
