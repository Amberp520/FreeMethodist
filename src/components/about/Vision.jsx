import React from "react";
import cry from "../../assets/about/cry.jpeg";
import { div } from "motion/react-client";

const Vision = () => {
  const countItems = [
    {
      text1: "10+",
      text2: "Men",
      text3:
        "Our oldest member is Mary Thompson, who is 95 years old and has been attending since 1945.",
    },

    {
      text1: "98+",
      text2: "Women",
      text3:
        "Our oldest member is Mary Thompson, who is 95 years old and has been attending since 1945.",
    },

    {
      text1: "50+",
      text2: "Teenagers",
      text3:
        "Our oldest member is Mary Thompson, who is 95 years old and has been attending since 1945.",
    },

    {
      text1: "100+",
      text2: "Children",
      text3:
        "Our oldest member is Mary Thompson, who is 95 years old and has been attending since 1945.",
    },
  ];

  return (
    <>
      <div className="w-full h-[75rem] bg-[#F0F4F7] pt-[4rem]">
        <div className="flex flex-col items-center pb-12">
          <p className="gap-1 text-lg text-primary font-firasanscondensed font-semibold mb-4">
            VISION MISSION
          </p>
          <p className="text-[2.5rem] font-firasanscondensed font-semibold text-center">
            BUILDING FAITHFUL COMMUNITY THROUGH LOVE, <br /> SERVICE,{" "}
            <span className="text-primary">WORSHIP AND FELLOWSHIP.</span>
          </p>
        </div>

        <div>
          <div className="flex items-center justify-center">
            <div className="w-[30rem] h-[4rem] bg-white flex items-center justify-center gap-5 rounded-[2rem]">
              <button className="px-5 py-3 bg-primary rounded-[2rem] text-[0.8rem] text-white">
                OUR VISION
              </button>
              <button className="px-5 py-3 bg-[#F0F4F7] rounded-[2rem] text-[0.8rem]">
                OUR MISSION
              </button>
              <button className="px-5 py-3 bg-[#F0F4F7] rounded-[2rem] text-[0.8rem]">
                OUR APPROACH
              </button>
            </div>
          </div>

          <div className="h-fit grid lg:grid-cols-[45%_50%] lg:gap-[5%] pt-[5rem] mb-[7rem]">
            <div className="flex justify-center flex-col pl-7">
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

            <div className="flex justify-center">
              <div className="h-[530px] w-[28rem]">
                <img
                  className="w-full h-full object-cover rounded-[0_0_55px_0]"
                  src={cry}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="h-[18rem] w-[70rem] bg-primary text-center flex items-center justify-center rounded-[0_0_55px_55px]">
            <div className="h-[10rem] grid grid-cols-4 w-[90%] gap-8 text-white">
              {countItems.map((count, i) => (
                <div key={i} className="border-r-[0.5px] w-[18rem]">
                  <p className="font-bold text-[2.5rem] pb-3">{count.text1}</p>
                  <p className="font-bold pb-4">{count.text2}</p>
                  <p>{count.text3}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;
