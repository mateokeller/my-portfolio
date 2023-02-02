import {useState} from "react";
import Header from "./ui/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="intro">
          <p className="group-indicator">&lt;ABOUT ME&gt;</p>
          <div className="text-container">
            <h1>
              MATEO KELLER<span>.</span>
            </h1>
            <div className="h-line"></div>
            <p className="socials-text">
              <a href="https://www.instagram.com/mateo.keller/">instagram</a> |{" "}
              <a href="http://www.linkedin.com/in/mateo-keller">LinkedIn</a>
            </p>
            <p className="socials-text">
              <a href="https://github.com/mateokeller">Github</a> |{" "}
              <a href="">Dribbble</a>
            </p>
            <button className="btn">CONTACT ME</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
