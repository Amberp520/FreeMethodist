import React from "react";
import priest from "../../assets/priest.jpg";

const Welcome = () => {
  // const bgImage = {
  //   backgroundImage: `url('/src/assets/FMC_Logo.png')`,
  //   height: "100vh",
  //   width: "100%",
  //   backgroundSize: "contain",
  //   backgroundPosition: "right",
  //   backgroundRepeat: "No-repeat",
  //   position: "relative",
  // };

  // const overLay = {
  //   position: "absolute",
  //   top: "0",
  //   left: "0",
  //   width: "100%",
  //   backgroundColor: "#000",
  // };

  return (
    <>
      <div className="py-10 h-fit lg:min-h-[30rem] w-full grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-5">
        <div className="hidden lg:flex h-full w-full justify-center">
          <img
            className="h-[500px] w-[65%] object-cover rounded-b-[40rem]"
            src={priest}
            alt=""
          />
        </div>
        <div className="h-full flex flex-col justify-center px-5 sm:px-10">
          <p className="text-primary text-sm font-firasanscondensed font-semibold pb-2">
            Meet Our Supritendent
          </p>
          <p className="text-3xl pb-5 font-semibold font-firasanscondensed">
            I Am The Way The Thruth And The Life
          </p>
          <p className="text-sm pb-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
            hic amet reiciendis optio doloribus deserunt sunt error sit, minima
            ipsum? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Iste, repellat!
          </p>
          <button className="bg-primary w-fit py-2 text-white px-10 rounded-[20px] text-sm">
            Learn More
          </button>
        </div>
        <div className="flex lg:hidden h-full w-full justify-center">
          <img
            className="h-[400px] md:h-[500px] w-fit object-cover rounded-b-[40rem]"
            src={priest}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Welcome;
