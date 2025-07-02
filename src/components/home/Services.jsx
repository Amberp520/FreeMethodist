import React from "react";
import { BsCalendar2Minus } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";
import { LiaBibleSolid } from "react-icons/lia";
import { PiChurchDuotone } from "react-icons/pi";

const Services = () => {
  const services = [
    {
      Icon: GrGroup,
      des: "Compassionate support for grief, relationships, and personal struggles. Join our monthly groups or schedule counseling.",
      title: "support groups",
    },
    {
      Icon: BsCalendar2Minus,
      des: "Join us for special events, including holiday services, picnics, and community fundraisers throughout the year.",
      title: "special events",
    },
    {
      Icon: LiaBibleSolid,
      des: "Join our online services for live streams of Sunday worship, virtual Bible studies, and interactive prayer meetings from anywhere.",
      title: "online services",
    },
    {
      Icon: PiChurchDuotone,
      des: "Receive compassionate pastoral care through one-on-one counseling and visits, addressing spiritual needs and personal challenges with care.",
      title: "pastoral care",
    },
  ];

  return (
    <div className="flex flex-col gap-5 items-center py-10">
      <h1 className="flex items-center text-center gap-1 text-lg text-primary font-firasanscondensed font-semibold">
        Services
      </h1>
      <p className="text-3xl md:text-5xl font-firasanscondensed font-semibold text-center">
        {"Loving god, helping others and".toUpperCase()} <br />{" "}
        {"serving the".toUpperCase()}{" "}
        <span className="text-primary">WORLD TOGETHER</span>
      </p>
      <div className="grid grid-cols-4 w-full gap-5">
        {services.map(({Icon, des, title}, i) => (
          <div className="bg-white w-full" key={i}>
            h
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
