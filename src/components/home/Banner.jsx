import React from "react";
import church from "../../assets/stand.jpeg";


const Banner = () => {
  return (
    <>
      <div className="h-[87vh] w-full relative">
        <img
          className="h-full w-full object-cover absolute top-0 left-0"
          src={church}
          alt="" />
        <div className="h-full w-full absolute bg-black top-0 opacity-60" />

        <div className="h-[85vh] relative z-10 text-white flex items-center justify-center">
          <div className="w-[70rem]"> 
            <p className="text-[0.9rem] mb-3 ">WELCOME TO FREE METHODIST CHURCH</p>
            <p className="text-[3.3rem] mb-9 font-bitter">FAITH. EDUCATION & <br /> COMMUNITY</p>
            <div className="flex gap-4">
            <button className="bg-[#c66730] px-6 py-1.5 text-[1rem] rounded-[20px] text-white mb-9">Explore Church</button>
            <button className="bg-[#060f1b] px-5 py-1.5 text-[1rem] rounded-[20px] text-white mb-9">Discover Schools</button>
            </div>
            <p className="text-[1.3rem] w-[25rem]">
              - Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              alias accusamus deserunt molestias iusto vitae.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
