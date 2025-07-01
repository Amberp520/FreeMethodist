import React from "react";
import LogoBanner from "../assets/logo.png";
import { IoSearchOutline } from "react-icons/io5";


const Navbar = () => {
  const navItems = [
    { title: "HOME", link: "/" },
    { title: "ABOUT US", link: "/" },
    { title: "OUR SCHOOLS", link: "/" },
    { title: "BLOG", link: "/" },
    { title: "EVENTS", link: "/" },
    { title: "MINISTRIES", link: "/" },
    { title: "GALLERY", link: "/" },
    { title: "CONTACT US", link: "/" },
  ];

  return (
    <>
      <div className="w-full h-[5.1rem] flex p-2 pl-5" >
        <div className="h-[4rem] w-[8rem] object-cover ">
          <img className="h-full w-full " src={LogoBanner} alt="" />
        </div>

        <div className="w-[60rem] flex items-center justify-center gap-12 text-[#16325a] text-[0.9rem] cursor-pointer">
          {navItems.map((option, i) => (
            <p>{option.title}</p>
          ))}
        </div>

        <div className="flex items-center w-[13rem]">
        
          <input
            className=" outline-none h-[30px] w-[190px] bg-transparent text-[#16325a] text-[0.9rem] border-b-[1px] border-solid border-[#aaa] transition-[5s] focus:w-[195px] focus:border-[#FAC4A5]"
            type="text"
            placeholder="Search" 
          />
          {/* <IoSearchOutline /> */}
        </div> 
      </div>
    </>
  );
};

export default Navbar;
