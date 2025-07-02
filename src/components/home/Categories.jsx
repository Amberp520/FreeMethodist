import React from "react";
import bird from "../../assets/home/bird.jpg";
import children from "../../assets/home/children.jpg";
import lady from "../../assets/home/lady.jpg";

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
  ];

  return (
    <>
      <div className="py-14 bg-[#F0F4F7]">
        <div className="w-full flex justify-center text-center mb-4">
          <div className="w-[50%]">
            <p className="text-primary text-lg font-firasanscondensed font-semibold pb-2">
              Middle Belt Eastern Confrence
            </p>
            <p className="text-[20px] pb-4 text-[#0b192c]">
              Our Church Teaches People To Weather Worldly Sorrow And Suffering
              Through Hope
            </p>
            {/* <p className="text-[1.1rem] text-[#0b192c]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              voluptatibus sapiente sunt recusandae, fugiat est mollitia unde
              consequatur itaque consectetur!
            </p> */}
          </div>
        </div>

        <div className="flex w-full items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[90%] gap-8">
            {categoryItems.map((category, i) => (
              <div
                key={i}
                className={`group/image h-[18rem] flex ${
                  i === 0 && "justify-start"
                } ${i === 1 && "justify-center"} ${
                  i === 2 && "justify-end"
                } relative overflow-hidden rounded-md`}
              >
                <img
                  className="h-full w-full object-cover absolute group-hover/image:scale-110 transition-all duration-500"
                  src={category.Image}
                  alt=""
                />
                <div className="h-full w-0 group-hover/image:w-full transition-all duration-500 rotate-180 absolute bg-black/50 top-0 opacity-70 rounded-md" />
                <div className="group-hover/image:text-primary font-firasanscondensed font-semibold relative z-10 text-slate-100 h-full w-full text-center flex flex-col justify-center cursor-pointer transition-all duration-500">
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
