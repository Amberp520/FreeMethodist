import React from 'react'
import { ministries } from '../../lib/constant'
import { GoArrowRight } from 'react-icons/go'
import { Link } from 'react-router-dom'

const MinistriesGrid = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10 lg:px-20 py-10'>
            {ministries.map((ministry, index) => (
                <Link to={`/ministries/${ministry.title}`} className='group/ministries relative flex flex-col justify-between h-[30rem] overflow-hidden rounded-[20px] p-6' key={index}>
                    <img src={ministry.images[0]} alt={ministry.title} className=' group-hover/ministries:scale-110 transition-all duration-500 absolute inset-0 h-full w-full object-cover' />
                    <div className='absolute inset-0 bg-black opacity-50'></div>
                    <p className='relative z-10 text-2xl font-semibold font-firasanscondensed text-primary'>{ministry.title}</p>
                    <div className="self-end w-fit z-10 p-2 bg-primary rounded-full group-hover/ministries:rotate-0 transition-all duration-500 text-white -rotate-45">
                        <GoArrowRight size={20} />
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default MinistriesGrid