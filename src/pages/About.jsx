import React from "react";
import Navbar from "../common/Navbar";
import Banner from "../components/about/Banner";
import Worship from "../components/about/Worship";
import Vision from "../components/about/Vision";
import WhatWeDo from "../components/about/Whatwedo";
import OurCoreValue from "../components/about/OurCoreValue";
import Footer from "../common/Footer";

const About = () => {
  return (
    <div className="max-w-[90rem] mx-auto">
      <Navbar />
      <Banner />
      <Worship/>
      <Vision/>
      <WhatWeDo />
      <OurCoreValue />
      <Footer />
    </div>
  );
};

export default About;
