import React from 'react'
import contactimg from "../../assets/contact/contact-banner.jpg";
import { MdArrowForwardIos } from 'react-icons/md';

const Banner = () => {
  const bgStyle = {
    backgroundImage: `url(${contactimg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="relative h-[500px]" style={bgStyle}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="flex flex-col items-center justify-center gap-5 h-full w-full relative z-10">
        <p className="text-3xl md:text-5xl font-firasanscondensed font-semibold text-center text-white">{"Contact Us".toUpperCase()}</p>
        <div className='font-semibold text-xl font-firasanscondensed flex items-center gap-3 text-primary rounded-br-[30px] py-3 px-5'>
          <p>Home</p>
          <MdArrowForwardIos size={17}/>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  )
}

export default Banner