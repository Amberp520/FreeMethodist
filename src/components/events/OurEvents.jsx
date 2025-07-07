import React from 'react'
import { churchEvents } from '../../lib/constant'
import { formatDateToDayMonth, createGoogleCalendarLink } from '../../lib/utils'
import { FaClock, FaLocationDot } from 'react-icons/fa6'

const OurEvents = () => {
    return (
        <div className="py-[4rem]">
            <p className="text-center gap-1 text-lg text-primary font-firasanscondensed font-semibold mb-4">Our Events</p>
            <p className="text-3xl md:text-5xl font-firasanscondensed font-semibold text-center mb-10">{"A Place of Faith, Family, ".toUpperCase()} <br className='block md:hidden' />{"and Fellowship".toUpperCase()}</p>
            <div className='flex flex-col gap-5 px-10 w-full'>
                {churchEvents.map((event, index) => (
                    <div className='flex flex-col lg:flex-row bg-primary/10 w-full' key={index}>
                        <div className='flex justify-center items-center relative w-full min-h-[300px] lg:w-[280px] lg:min-h-[250px]'>
                            <img className='h-full w-full object-cover' src={event.image} alt="" />
                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40" />
                            <p className='font-semibold text-[1.5rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center'>{formatDateToDayMonth(event.date)}</p>
                        </div>
                        <div className='flex flex-col justify-center flex-1 px-10 py-10 lg:min-h-[250px]'>
                            <div className='flex items-center gap-2 mb-5'>
                                <p className='flex items-center gap-2'><FaClock size={17} className='text-primary' />{event.time}</p>
                                <p className='flex items-center gap-2'><FaLocationDot size={17} className='text-primary' />{event.location}</p>
                            </div>
                            <p className='text-2xl font-semibold font-firasanscondensed mb-5'>{event.title}</p>
                            <p className='text-lg'>{event.description}</p>
                        </div>
                        <div className='flex items-center justify-center w-full lg:w-[250px] lg:min-h-[250px] py-10 border-t lg:border-t-0 lg:border-l'>
                            <button onClick={() => window.open(createGoogleCalendarLink(event), '_blank')} className='bg-primary text-white px-10 py-2'>Remind Me</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurEvents