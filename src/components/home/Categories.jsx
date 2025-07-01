import React from "react";
import bird from "../../assets/bird.jpg";
import cross from "../../assets/cross.jpg";
import children from "../../assets/children.jpg";
import lady from "../../assets/lady.jpg";

const Categories = () => {
  const categoryItems = [
    {
      Image: bird,
      Text1: "Know More",
      Text2: "About the church",
    },

    {
      Image: children,
      Text1: "Explore",
      Text2: "Our Schools",
    },

    {
      Image: lady,
      Text1: "Anticipate",
      Text2: "Upcoming Events",
    },

    {
      Image: cross,
      Text1: "Join us Today",
      Text2: "Get Involved",
    },
  ];

  return (
    <>
      <div className="h-[46rem] pt-20 bg-[#F0F4F7]">
        <div className="w-full flex justify-center text-center">
          <div className="w-[50%]">
            <p className="text-[1.3rem] pb-3 text-[#c66730]">Middle Belt Eastern Confrence</p>
            <p className="text-[1.9rem] pb-4 text-[#0b192c]">
              Our Church Teaches People To Weather Worldly Sorrow And Suffering
              Through Hope
            </p>
            <p className="text-[1.1rem] text-[#0b192c]"> 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              voluptatibus sapiente sunt recusandae, fugiat est mollitia unde
              consequatur itaque consectetur!
            </p>
          </div>
        </div>

        <div className="flex w-full h-[28rem] items-center justify-center">
          <div className="w-[90%] flex gap-8">
            {categoryItems.map((category, i) => (
              <div key={i} className="w-[20rem] h-[18rem] relative">
                <img className="h-full w-full object-cover absolute rounded-md" src={category.Image} alt="" />
                 <div className="h-full w-full absolute bg-black top-0 opacity-70 rounded-md" />
                <div className="relative z-10 text-slate-100 h-full w-full text-center flex flex-col justify-center cursor-pointer hover:text-[#c66730] transition-all duration-500">
                  <p className="text-[0.8rem] font-sans">{category.Text1}</p>
                  <p className="text-[1.4rem] ">{category.Text2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
