import {useEffect, useState} from "react";

import Header from "./ui/Header";
import Layout from "./components/layout/Layout";

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
    <>
      <Header />
      <Layout />
    </>
  );
}

export default App;
