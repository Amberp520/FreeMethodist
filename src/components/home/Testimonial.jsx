import React from "react";
import meeting from "../../assets/meeting.jpg"
import stand from "../../assets/stand.jpeg"
import cross from "../../assets/cross.jpg"

const Testimonial = () => {
    const testItems = [
      { 
        Image: meeting,
        Test1: "The Goodness of the lord upon my",
        Test2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit tempora voluptatibus molestiae dolore? Optio nisi laborum iste molestias vero id!",
      },
  
      {
        Image: stand,
        Test1: "The lord has Changed my story",
        Test2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit tempora voluptatibus molestiae dolore? Optio nisi laborum iste molestias vero id!",
      },
  
      {
        Image: cross,
        Test1: "Forever Grateful",
        Test2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit tempora voluptatibus molestiae dolore? Optio nisi laborum iste molestias vero id!",
      },
    ];

  return (
    <>
      <div className="h-[30rem] w-full ">
        <div className="text-center mb-[4rem]">
          <p className="text-[1.9rem] mb-3 font-bold">Testimonies</p>
          <p className="text-[1.4rem]">Join Us and Express our Gratitude </p>
        </div>

         <div className=" w-full flex gap-12 justify-center">
           {testItems.map((test, i) => (
               <div key={i} className="h-[25rem] w-[20rem] flex flex-col items-center text-center shadow-xl p-6">
                 <img className="h-[5rem] w-[5rem] object-cover rounded-[50rem] mb-5" src={test.Image} alt="" />
                 <p className="mb-3 font-bold text-[1.3rem] text-primary">{test.Test1}</p>
                 <p className="text-[1.1rem]">{test.Test2}</p>
               </div>
           ))}
         
         </div>
      </div>
    </>
  );
};

export default Testimonial;
