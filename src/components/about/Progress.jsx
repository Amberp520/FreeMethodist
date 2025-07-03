import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer';
import CountUp from "react-countup";

const Progress = () => {
    const countItems = [
        {
            text1: 10,
            text2: "Men",
            text3:
                "Our oldest member is Mary Thompson, who is 95 years old and has been attending since 1945.",
        },
        {
            text1: 98,
            text2: "Women",
            text3:
                "Our oldest member is Mary Thompson, who is 95 years old and has been attending since 1945.",
        },
        {
            text1: 50,
            text2: "Teenagers",
            text3:
                "Our oldest member is Mary Thompson, who is 95 years old and has been attending since 1945.",
        },
        {
            text1: 100,
            text2: "Children",
            text3:
                "Our oldest member is Mary Thompson, who is 95 years old and has been attending since 1945.",
        },
    ];

    const [renderContent, setRenderContent] = useState(false);
    const { ref } = useInView({
        triggerOnce: false, // Trigger every time it enters/exits the viewport
        onChange: (inView) => {
            setRenderContent(inView); // Update state whenever the element enters/exits the viewport
        },
    });

    return (
        <div ref={ref} className="flex items-center justify-center py-14">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-[90%] text-white h-fit bg-primary text-center py-10 rounded-lg">
                {countItems.map((count, i) => (
                    <div key={i} className={`${i < 3 ? "border-r border-white" : ""} px-4`}>
                        <p className="font-bold text-[2.5rem] pb-3">{renderContent && <CountUp end={count.text1} duration={2.5} />}+</p>
                        <p className="font-bold pb-4">{count.text2}</p>
                        <p className='text-sm'>{count.text3}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Progress