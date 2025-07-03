import React from 'react'
import logo from '../assets/logo.png'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import { IoMdMail } from 'react-icons/io'
import { FaLocationDot } from 'react-icons/fa6'
const Footer = () => {
   return (
      <>
         <div className='bg-white border-t'>
            <div className='grid grid-cols-1 lg:grid-cols-[40%_55%] gap-[5%] py-10 px-5 lg:px-10'>
               <div className='flex flex-col gap-5'>
                  <div className="h-[4rem] w-[8rem] object-cover ">
                     <img className="h-full w-full " src={logo} alt="" />
                  </div>
                  <p className='text-sm'>Lorem Ipsum is simply dummy text of printing and typesetting industry. Lorem Ipsum has been the industry’s.</p>
                  <div className='flex gap-4 text-xl'>
                     <FaFacebook className='hover:text-primary transition-all duration-300 cursor-pointer'/>
                     <FaInstagram className='hover:text-primary transition-all duration-300 cursor-pointer'/>
                     <FaTwitter className='hover:text-primary transition-all duration-300 cursor-pointer'/>
                  </div>
               </div>
               {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'> */}
               <div className='flex gap-5 items-start flex-wrap'>
                  <div className='flex-1'>
                     <h2 className='text-lg font-semibold font-firasanscondensed'>Quick Links</h2>
                     <ul className='text-sm list-disc gap-2 mt-3 ml-3 flex flex-col'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>News</li>
                        <li>Contact</li>
                     </ul>
                  </div>
                  <div className='flex-1'>
                     <h2 className='text-lg font-semibold font-firasanscondensed'>Our Services</h2>
                     <ul className='text-sm list-disc gap-2 mt-3 ml-3 flex flex-col'>
                        <li>Support Groups</li>
                        <li>Special Events</li>
                        <li>Online Services</li>
                        <li>Pastoral Care</li>
                     </ul>
                  </div>
                  <div className='flex-1'>
                     <h2 className='text-lg font-semibold font-firasanscondensed'>Contact Us</h2>
                     <div className='flex flex-col gap-2 mt-3'>
                        <div className='flex items-center gap-2 text-sm'>
                           <FiPhoneCall size={20}/>
                           <p>+1234567890</p>
                        </div>
                        <div className='flex items-center gap-2 text-sm'>
                           <IoMdMail size={20}/>
                           <p>info@freemethodistchurch.com</p>
                        </div>
                        <div className='flex items-center gap-2 text-sm'>
                           <FaLocationDot size={20}/>
                           <p>123 Main Street, City, Country</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className='py-5 px-5 lg:px-10 text-center'>
               <p>© 2025 Free Methodist Church. All rights reserved.</p>
            </div>
         </div>
      </>
   )
}

export default Footer