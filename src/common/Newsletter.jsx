import React from "react";
import newsletterimg from "../assets/newsletter/newsletter.jpg";

const Newsletter = () => {
  const bgStyle = {
    backgroundImage: `url(${newsletterimg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="relative h-[500px]" style={bgStyle}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="flex flex-col items-center justify-center gap-5 h-full w-full relative z-10">
        <h2 className="text-primary text-lg font-semibold font-firasanscondensed">
          {"Subscribe Newsletter".toUpperCase()}
        </h2>
        <p className="text-3xl md:text-5xl font-firasanscondensed font-semibold text-center text-white">{"Keep Up With Our Latest News".toUpperCase()}</p>
        <p className="text-sm font-firasanscondensed text-center text-white">
          Subscribe to our newsletter to stay informed about upcoming events, inspiring messages, and the latest news <br /> from our church community.
        </p>
        <div className="bg-white flex items-center gap-2 rounded-full overflow-hidden py-1 pr-1">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-2 placeholder:text-sm outline-0"
          />
          <button className="bg-primary px-6 h-full rounded-full text-sm font-firasanscondensed text-white">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
