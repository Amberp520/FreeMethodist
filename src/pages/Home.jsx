import React from "react";
import Navbar from "../common/Navbar";
import Banner from "../components/home/Banner";
import Welcome from "../components/home/Welcome";
import Categories from "../components/home/Categories";
import News from "../components/home/News";
import Testimonial from "../components/home/Testimonial";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Welcome/>
      <Categories/>
      <News/>
      <Testimonial/>
    </>
  );
};

export default Home;
