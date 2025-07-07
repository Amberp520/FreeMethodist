import React from "react";
import Navbar from "../common/Navbar";
import Banner from "../components/events/Banner";
import OurEvents from "../components/events/OurEvents";
import Services from "../components/home/Services";
import Footer from "../common/Footer";
import Newsletter from "../common/Newsletter";
import OurCoreValue from "../components/about/OurCoreValue";

const Events = () => {
  return (
    <div className="max-w-[90rem] mx-auto">
      <Navbar />
      <Banner />
      <OurEvents />
      <Services />
      <OurCoreValue />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Events;
