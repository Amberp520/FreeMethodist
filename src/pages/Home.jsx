import React, { useEffect } from "react";
import Navbar from "../common/Navbar";
import Banner from "../components/home/Banner";
import Welcome from "../components/home/Welcome";
import Categories from "../components/home/Categories";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Newsletter from "../common/Newsletter";
import Footer from "../common/Footer";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="max-w-[90rem] mx-auto">
      <Navbar />
      <Banner />
      <About />
      <Welcome />
      <Categories />
      <Services />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
