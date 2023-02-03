import {useEffect, useState} from "react";
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
        <div className="intro">
          <p className="group-indicator">&lt;Home&gt;</p>
          <div className="text-container">
            <h1>
              MATEO KELLER<span>.</span>
            </h1>
            <div className="h-line"></div>
            <p className="socials-text">
              <a href="https://github.com/mateokeller">Github</a> |{" "}
              <a href="http://www.linkedin.com/in/mateo-keller">LinkedIn</a>
            </p>
            <p className="socials-text">
              <a href="https://www.instagram.com/mateo.keller/">Instagram</a> |{" "}
              <a href="https://dribbble.com/mateokeller">Dribbble</a>
            </p>
            <button className="btn">CONTACT ME</button>
          </div>
        </div>
        <div className="skills-container">
          <p className="group-indicator">&lt;ABOUT ME&gt;</p>
          <div className="skills-content">
            <h2 className="text-yellow title">INTRODUCTION</h2>
            <h3 className="subtitle">What I'm Great At</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
