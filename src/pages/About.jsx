import React from "react";
import Navbar from "../common/Navbar";
import Banner from "../components/about/Banner";
import Worship from "../components/about/Worship";
import Vision from "../components/about/Vision";


const About = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Worship/>
      <Vision/>
      
    </>
  );
};

export default About;
