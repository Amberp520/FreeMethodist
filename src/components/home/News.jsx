import React from "react";
import lady from "../../assets/lady.jpg";
import building from "../../assets/building.jpg"
import Ai from "../../assets/AI.jpg"

const News = () => {
  return (
    <>
      <div className="pt-[5rem] h-[50rem]">
        <div className="text-center pb-8">
          <p className="text-[2.1rem] pb-[0.5rem]">News</p>
          <p className="text-[1.3rem]">New Updates and Information</p>
        </div>

        <div className="h-[30rem] w-full relative">
          <img
            className="h-full w-full object-cover absolute"
            src={Ai}
            alt=""
          />
          <div className="h-full w-full absolute bg-gradient-to-r from-transparent from-[20%] to-black to-[80%] top-0 opacity-60" />
          <div className="text-white relative flex flex-col items-end gap-5 justify-center h-full pr-[12rem]">
            <p className="text-[2.7rem] w-[25rem]">
              Mission To The <br /> Village of Umuahia
            </p>
            <p className="w-[25rem] text-[1.2rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum{" "}
              nostrum magni ad maiores magnam officiis at illo eaque excepturi{" "}
              ullam. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Non, error.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
