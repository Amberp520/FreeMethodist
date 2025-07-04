import React from 'react'
import Navbar from '../common/Navbar'
import Banner from '../components/ministries/Banner'
import MinistriesGrid from '../components/ministries/Ministries-grid'
import Footer from '../common/Footer'

const Ministries = () => {
  return (
    <div className="max-w-[90rem] mx-auto">
      <Navbar />
      <Banner />
      <MinistriesGrid />
      <Footer />
    </div>
  )
}

export default Ministries