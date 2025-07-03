import React from 'react'
import FAQ from '../../common/FQA'

const OurCoreValue = () => {
    return (
        <div className='py-10'>
            <p className="text-center gap-1 text-lg text-primary font-firasanscondensed font-semibold mb-4">What We Do</p>
            <p className="text-3xl md:text-5xl font-firasanscondensed font-semibold text-center">{"Foundations of Our Faith and".toUpperCase()} <br /> <span className="text-primary">{"Community Life".toUpperCase()}</span></p>
            <div className='py-10'>
                <FAQ />
            </div>
        </div>
    )
}

export default OurCoreValue