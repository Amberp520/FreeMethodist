import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { coreValues, ministries } from '../../lib/constant'
import { MdArrowForwardIos, MdLocationOn } from 'react-icons/md'
import ministriesimg from "../../assets/ministries/ministries-banner.jpg";
import { FaCalendarAlt, FaRegCalendar, FaRegClock } from 'react-icons/fa';
import FAQItem from '../../utils/faq-item';
import Footer from '../../common/Footer';
import Navbar from '../../common/Navbar';
import { Link } from 'react-router-dom';

const MisistryDetails = () => {
    const { title } = useParams();
    const userblog = ministries.find((blog) => blog.title === title);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    
    const bgStyle = {
        backgroundImage: `url(${ministriesimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

    return (
        <div>
            <Navbar />
            <div className="relative h-[500px]" style={bgStyle}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="flex flex-col items-center justify-center gap-5 h-full w-full relative z-10">
                    <p className="text-3xl md:text-5xl font-firasanscondensed font-semibold text-center text-white">{userblog.title.toUpperCase()}'s {"Ministry".toUpperCase()}</p>
                    <div className='font-semibold text-xl font-firasanscondensed flex items-center gap-3 text-primary rounded-br-[30px] py-3 px-5'>
                        <Link to="/">Home</Link>
                        <MdArrowForwardIos size={17} />
                        <Link to="/ministries">Ministries</Link>
                        <MdArrowForwardIos size={17} />
                        <Link to={`/ministries/${userblog.title}`}>{userblog.title}</Link>
                    </div>
                </div>
            </div>
            <div className='relative grid grid-cols-1 md:grid-cols-[65%_30%] gap-10 md:gap-[5%] px-5 lg:px-10 py-10 h-fit'>
                <div className='flex flex-col gap-5'>
                    <img className='w-full h-[400px] object-cover' src={userblog.images[0]} alt={userblog.title} />
                    <h1 className='text-3xl md:text-5xl font-firasanscondensed font-semibold'>Welcome to {userblog.title}'s Ministry!</h1>
                    <p className='text-sm text-gray-500'>{userblog.welcomeMessage}</p>
                    <h1 className='text-3xl md:text-5xl font-firasanscondensed font-semibold'>{userblog.title}'s Ministry Features</h1>
                    <p className='text-sm text-gray-500'>{userblog.featuresWriteup}</p>
                    <ul className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 list-disc list-inside'>
                        {userblog.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                    <div className='grid grid-cols-2 gap-5'>
                        <img className='w-full h-[250px] rounded-lg object-cover' src={userblog.images[1]} alt={userblog.title} />
                        <img className='w-full h-[250px] rounded-lg object-cover' src={userblog.images[2]} alt={userblog.title} />
                    </div>
                    <h1 className='text-3xl md:text-5xl font-firasanscondensed font-semibold'>Core Values</h1>
                    <section id="faqs" className="w-full h-fit md:h-full px-4 md:px-0">
                        <div className="space-y-4">
                            {coreValues.map((coreValue, i) => (
                                <FAQItem
                                    key={i}
                                    isOpen={i === openIndex}
                                    onClick={() => toggleFAQ(i)}
                                    question={coreValue.title}
                                    answer={coreValue.description}
                                    Icon={coreValue.Icon}
                                />
                            ))}
                        </div>
                    </section>
                </div>
                <div className='h-fit flex flex-col gap-5 sticky md:top-32 right-0 rounded-br-[30px] bg-primary/10 p-5 lg:p-10'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-3'>
                            <FaRegClock size={25} className='text-primary' />
                            <p className='font-semibold text-xl font-firasanscondensed'>Meeting Times</p>
                        </div>
                        <p className='text-sm text-gray-500'>{userblog.meetingTimes}</p>
                    </div>
                    <div className='flex flex-col gap-4 border-t pt-5'>
                        <div className='flex items-center gap-3'>
                            <FaCalendarAlt size={25} className='text-primary' />
                            <p className='font-semibold text-xl font-firasanscondensed'>Schedule</p>
                        </div>
                        <p className='text-sm text-gray-500'>{userblog.schedule.map((schedule) => (
                            <p key={schedule.day}>{schedule.day} • {schedule.time} – {schedule.activity}</p>
                        ))}</p>
                    </div>
                    <div className='flex flex-col gap-4 border-t pt-5'>
                        <div className='flex items-center gap-3'>
                            <MdLocationOn size={25} className='text-primary' />
                            <p className='font-semibold text-xl font-firasanscondensed'>Location</p>
                        </div>
                        <p className='text-sm text-gray-500'>123 Main St, Anytown, USA</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MisistryDetails