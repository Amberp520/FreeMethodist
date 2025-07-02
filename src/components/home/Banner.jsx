import React from "react";
import church from "../../assets/stand.jpeg";

const Banner = () => {
  return (
    <>
      <div className="h-[90dvh] 2xl:h-[800px] w-full relative">
        <img
          className="h-full w-full object-cover absolute top-0 left-0"
          src={church}
          alt=""
        />
        <div className="h-full w-full absolute bg-black top-0 opacity-60" />

        <div className="px-5 h-full relative z-5 text-white flex flex-col gap-4 items-center justify-center">
          <p className="text-[0.9rem] font-firasanscondensed">
            WELCOME TO FREE METHODIST CHURCH
          </p>
          <p className="text-[3.3rem] font-firasanscondensed">
            FAITH, EDUCATION & COMMUNITY
          </p>
          <p className="text-sm mb-3">
            Faith, Education & Community: Building a Stronger Future Together
          </p>
          <div className="flex gap-4">
            <button className="bg-primary px-6 py-2 lg:py-3 text-sm lg:text-[1rem] rounded-full text-white">
              Explore Church
            </button>
            <button className="bg-[#060f1b] px-6 py-2 lg:py-3 text-sm lg:text-[1rem] rounded-full text-white">
              Discover Schools
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
