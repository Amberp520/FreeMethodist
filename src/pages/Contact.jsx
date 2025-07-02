import React from 'react'
import Navbar from '../common/Navbar'
import Banner from '../components/contact/Banner'
import ContactForm from '../components/contact/ContactForm'
import { Map } from '../utils/map'
import Footer from '../common/Footer'

const Contact = () => {
  return (
    <div className="max-w-[90rem] mx-auto">
        <Navbar />
        <Banner />
        <ContactForm />
        <Map />
        <Footer />
    </div>
  )
}

export default Contact