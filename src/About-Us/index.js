import React from "react";
import Footer from "../Footer";
import About from "./container";
import NavigationHeader from "./navigation";
import "./styles.css";
// import '../FrontPage/light.css'
const AboutUs = () => {
  return (
    <>
      <NavigationHeader />
      <About />
      <Footer />
    </>
  );
};

export default AboutUs;
