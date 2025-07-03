import React, { useState } from "react";
import vision from "../../assets/about/vision.jpg";
import mission from "../../assets/about/mission.jpg";
import approach from "../../assets/about/approach.jpg";
import { div } from "motion/react-client";
import Progress from "./Progress";

const Vision = () => {
  const [active, setActive] = useState("our-vision");

  const renderOptions = (active) => {
    switch (active) {
      case "our-vision":
        return (
          <div className="h-fit grid grid-cols-1 gap-16 md:grid-cols-[45%_50%] md:gap-[5%] pt-[5rem]">
            <div className="flex justify-center flex-col">
              <p className="text-lg text-primary font-firasanscondensed font-semibold pb-3">
                OUR VISION
              </p>
              <p className="text-[2.3rem] font-firasanscondensed font-semibold pb-7">
                OUR VISION TO LOVE, SERVE AND GROW.
              </p>
              <p className="font-bold pb-6 text-[1rem]">
                Our vision is to share God's love, foster spiritual growth, and
                serve our community with compassion and purpose.
              </p>
              <p>
                Our vision is to serve our community with compassion, love
                unconditionally, and foster spiritual growth. Through dedicated
                service, heartfelt worship, and supportive fellowship, we strive
                to create a nurturing environment where individuals can deepen
                their faith, connect with others, and make a positive impact.
                Join us as we live out our commitment to serve, love, and grow
                together.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <div className="h-[380px] w-[20rem] lg:h-[430px] lg:w-[25rem] border-2 border-primary rounded-[55px_0_55px_0]">
                <img
                  className="w-full h-full object-cover rounded-[55px_0_55px_0] shadow-md -translate-y-5 -translate-x-5"
                  src={vision}
                  alt=""
                />
              </div>
            </div>
          </div>
        );
      case "our-mission":
        return (
          <div className="h-fit grid grid-cols-1 gap-16 md:grid-cols-[45%_50%] md:gap-[5%] pt-[5rem]">
            <div className="flex justify-center flex-col">
              <p className="text-lg text-primary font-firasanscondensed font-semibold pb-3">
                OUR MISSION
              </p>
              <p className="text-[2.3rem] font-firasanscondensed font-semibold pb-7">
                OUR MISSION TO LOVE, SERVE AND GROW.
              </p>
              <p className="font-bold pb-6 text-[1rem]">
                Our mission is to share God's love, foster spiritual growth, and
                serve our community with compassion and purpose.
              </p>
              <p>
                Our mission is to serve our community with compassion, love
                unconditionally, and foster spiritual growth. Through dedicated
                service, heartfelt worship, and supportive fellowship, we strive
                to create a nurturing environment where individuals can deepen
                their faith, connect with others, and make a positive impact.
                Join us as we live out our commitment to serve, love, and grow
                together.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <div className="h-[380px] w-[20rem] lg:h-[430px] lg:w-[25rem] border-2 border-primary rounded-[55px_0_55px_0]">
                <img
                  className="w-full h-full object-cover rounded-[55px_0_55px_0] shadow-md -translate-y-5 -translate-x-5"
                  src={mission}
                  alt=""
                />
              </div>
            </div>
          </div>
        );
      case "our-approach":
        return (
          <div className="h-fit grid grid-cols-1 gap-16 md:grid-cols-[45%_50%] md:gap-[5%] pt-[5rem]">
            <div className="flex justify-center flex-col">
              <p className="text-lg text-primary font-firasanscondensed font-semibold pb-3">
                OUR VISION
              </p>
              <p className="text-[2.3rem] font-firasanscondensed font-semibold pb-7">
                OUR VISION TO LOVE, SERVE AND GROW.
              </p>
              <p className="font-bold pb-6 text-[1rem]">
                Our vision is to share God's love, foster spiritual growth, and
                serve our community with compassion and purpose.
              </p>
              <p>
                Our vision is to serve our community with compassion, love
                unconditionally, and foster spiritual growth. Through dedicated
                service, heartfelt worship, and supportive fellowship, we strive
                to create a nurturing environment where individuals can deepen
                their faith, connect with others, and make a positive impact.
                Join us as we live out our commitment to serve, love, and grow
                together.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <div className="h-[380px] w-[20rem] lg:h-[430px] lg:w-[25rem] border-2 border-primary rounded-[55px_0_55px_0]">
                <img
                  className="w-full h-full object-cover rounded-[55px_0_55px_0] shadow-md -translate-y-5 -translate-x-5"
                  src={approach}
                  alt=""
                />
              </div>
            </div>
          </div>
        );
      default:
        break;
    }
  }

  return (
    <>
      <div className="w-full bg-[#F0F4F7] py-[4rem] px-5 lg:px-10">
        <div className="flex flex-col items-center pb-12">
          <p className="gap-1 text-lg text-primary font-firasanscondensed font-semibold mb-4">
            VISION MISSION
          </p>
          <p className="text-[2.5rem] font-firasanscondensed font-semibold text-center">
            BUILDING FAITHFUL COMMUNITY THROUGH LOVE, <br className="hidden md:block" /> SERVICE,{" "}
            <span className="text-primary">WORSHIP AND FELLOWSHIP.</span>
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="py-2 px-2 bg-white flex items-center justify-center gap-5 rounded-full">
            <button
              onClick={() => setActive("our-vision")}
              className={`px-5 py-3 ${active === "our-vision" ? "bg-primary text-white" : "bg-[#F0F4F7]"} transition-all duration-500 ease-out rounded-full text-[0.8rem]`}
            >
              OUR VISION
            </button>
            <button
              onClick={() => setActive("our-mission")}
              className={`px-5 py-3 ${active === "our-mission" ? "bg-primary text-white" : "bg-[#F0F4F7]"} transition-all duration-500 ease-out rounded-full text-[0.8rem]`}
            >
              OUR MISSION
            </button>
            <button
              onClick={() => setActive("our-approach")}
              className={`px-5 py-3 ${active === "our-approach" ? "bg-primary text-white" : "bg-[#F0F4F7]"} transition-all duration-500 ease-out rounded-full text-[0.8rem]`}
            >
              OUR APPROACH
            </button>
          </div>
        </div>
        {renderOptions(active)}
      </div>
      <Progress />
    </>
  );
};

export default Vision;
