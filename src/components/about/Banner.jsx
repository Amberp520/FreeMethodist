import React from 'react'
import meeting from "../../assets/meeting.jpg"

const Banner = () => {
  return (
    <>
       <div>
          <div className="h-[70dvh] 2xl:h-[800px] w-full relative mb-11">
            <img className='h-full w-full object-cover absolute top-0 left-0' src={meeting} alt="" />
             <div className="h-full w-full absolute bg-black top-0 opacity-60" />

            <div className="px-5 h-full relative z-5 text-white flex flex-col gap-4 items-center justify-center">
                <p className="text-[3.8rem] font-firasanscondensed">ABOUT US</p>
                <p className="text-[0.9rem] font-firasanscondensed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, impedit!</p>
            </div>
            </div>
       </div>
    </>
  )
}

export default Banner