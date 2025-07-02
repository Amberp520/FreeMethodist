import React from "react";
import Navbar from "../common/Navbar";
import Banner from "../components/home/Banner";
import Welcome from "../components/home/Welcome";
import Categories from "../components/home/Categories";
import News from "../components/home/News";
import Testimonial from "../components/home/Testimonial";
import About from "../components/home/About";
import Services from "../components/home/Services";

const Home = () => {
  return (
    <div className="max-w-[90rem] mx-auto">
      <Navbar />
      <Banner />
      <About />
      <Welcome/>
      <Categories/>
      {/* <Services /> */}
      <News/>
      <Testimonial/>
    </div>
  );
};

export default Home;
