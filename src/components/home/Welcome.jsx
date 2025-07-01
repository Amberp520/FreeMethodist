import React from "react";
import priest from "../../assets/priest.jpg";

const Welcome = () => {
    const bgImage = {
      backgroundImage: `url('/src/assets/FMC_Logo.png')`,
      height: '100vh',
      width: '100%',
      backgroundSize: 'contain',
      backgroundPosition: 'right',
      backgroundRepeat: 'No-repeat',
      position: 'relative',
    };

    const overLay = {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      backgroundColor: '#000',
    };

  return (
    <>
      <div className="h-[39rem] w-full grid grid-cols-2 pt-[6rem]" >
        <div className="" style={overLay}/>
        <div className=" object-cover flex justify-center">
          <div className="h-[30rem] w-[23rem]">
            <img
              className="h-full w-full object-cover rounded-b-[40rem]"
              src={priest}
              alt=""
            />
          </div>
        </div>

        <div className="w-[25rem] h-[33rem] flex justify-center items-center">
          <div className="text-[#0b192c] mb-9">
            <p className="text-[#c66730] text-[1.3rem] pb-2">Meet Our Supritendent</p>
            <p className="text-[2.2rem] pb-5">
              I Am The Way The Thruth <br /> And The Life
            </p>
            <p className="text-[1.2rem] pb-10">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
              hic amet reiciendis optio doloribus deserunt sunt error sit,
              minima ipsum? Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Iste, repellat!
            </p>

            <button className="bg-[#F47E3A] py-1 px-10 rounded-[20px] text-[1.2rem]">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
