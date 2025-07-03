import React from 'react'
import meeting from "../../assets/meeting.jpg"
import { MdArrowForwardIos } from 'react-icons/md'

const Banner = () => {
  return (
    <>
      <div>
        <div className="h-[70dvh] 2xl:h-[800px] w-full relative mb-11">
          <img className='h-full w-full object-cover absolute top-0 left-0' src={meeting} alt="" />
          <div className="h-full w-full absolute bg-black top-0 opacity-60" />

          <div className="px-5 h-full relative z-5 text-white flex flex-col gap-4 items-center justify-center">
            <p className="text-3xl md:text-5xl font-firasanscondensed font-semibold text-center text-white">{"About Us".toUpperCase()}</p>
            <div className='font-semibold text-xl font-firasanscondensed flex items-center gap-3 text-primary rounded-br-[30px] py-3 px-5'>
              <p>Home</p>
              <MdArrowForwardIos size={17} />
              <p>About Us</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner