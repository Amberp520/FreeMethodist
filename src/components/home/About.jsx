import React from "react";
import church1 from "../../assets/home/pexels-lukas-hartmann-304281-1435219.jpg";
import church2 from "../../assets/home/pexels-pixabay-208277.jpg";
import { PiCrossThin } from "react-icons/pi";
import { GoArrowRight } from "react-icons/go";

const About = () => {
  return (
    <div className="h-fit grid lg:grid-cols-[45%_50%] lg:gap-[5%]">
      <div className="relative flex items-end h-[600px] w-full p-8">
        <div className="relative" />
        <img
          className="relative shrink-0 h-[80%] w-[70%] object-cover rounded-[0_0_0_50px]"
          src={church1}
          alt=""
        />
        <img
          className="right-0 absolute shrink-0 self-start h-[60%] w-[60%] border-[10px] border-white rounded-[0_0_0_150px] object-cover z-10"
          src={church2}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center gap-5 px-5 lg:px-0">
        <h1 className="flex items-center gap-1 text-lg text-primary font-firasanscondensed font-semibold">
          <PiCrossThin /> About Us
        </h1>
        <p className="text-3xl md:text-5xl font-firasanscondensed font-semibold">
          {`Faith, hope, and love in`.toUpperCase()} <br />{" "}
          <span className="text-primary">
            {`action every day`.toUpperCase()}
          </span>
        </p>
        <p className=" lg:w-[90%]">
          We are a vibrant community of believers dedicated to worship,
          fellowship, and service. Our mission is to share God’s love, grow in
          faith, and make a positive impact in the world through compassionate
          outreach and meaningful connections.
        </p>
        <p className=" lg:w-[90%]">
          Our church is a welcoming place where everyone can find support,
          inspiration, and a sense of belonging. Together, we strive to live out
          our faith and make a difference.
        </p>
        <button className="group/button overflow-hidden relative flex items-center gap-2 bg-primary text-white py-1 pl-5 pr-1 w-fit rounded-full">
          <p className="relative z-10">Read More about us{" "}</p>
          <div className="absolute z-1 h-full w-0 group-hover/button:w-full ease-in-out top-0 left-0 bg-black rounded-full transition-all duration-500" />
          <div className="z-10 p-2 bg-white rounded-full group-hover/button:rotate-0 transition-all duration-500 text-primary -rotate-45">
            <GoArrowRight size={20} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default About;
