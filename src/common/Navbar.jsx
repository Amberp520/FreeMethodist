import React, { useState } from "react";
import LogoBanner from "../assets/logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { title: "HOME", link: "/" },
    { title: "ABOUT US", link: "/about" },
    { title: "OUR SCHOOLS", link: "/" },
    { title: "BLOG", link: "/" },
    { title: "EVENTS", link: "/" },
    { title: "MINISTRIES", link: "/ministries" },
    { title: "GALLERY", link: "/" },
    { title: "CONTACT US", link: "/contact-us" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="sticky top-0 bg-white z-[999] w-full flex justify-between py-3 px-5 lg:px-10">
        <Link to="/" className="h-[4rem] w-[8rem] object-cover ">
          <img className="h-full w-full " src={LogoBanner} alt="" />
        </Link>

        <div className="hidden lg:flex items-center justify-center gap-5 text-[#16325a] text-sm">
          {navItems.map((option, i) => (
            <Link
              to={option.link}
              className="capitalize cursor-pointer"
              key={i}
            >
              {option.title.toLowerCase()}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="p-2 text-black">
            {isOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              className="flex flex-col gap-5 lg:hidden fixed px-10 h-[87dvh] top-[13%] w-full bg-white shadow-lg !z-[200] pt-[106px] left-0"
            >
              {navItems.map((item, i) => (
                <Link
                  to={item.link}
                  href={`#${item.position}`}
                  key={i}
                  className={`${
                    i === 3 && "hidden"
                  } flex items-center text-[16px] text-black cursor-pointer`}
                  onClick={() => {
                    toggleMenu();
                  }}
                >
                  {item.title}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
