"use client";
import PrimaryHeading from "@/components/project/PrimaryHeading";
import "./clientSays.css";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import SecondaryHeading from "@/components/project/SecondaryHeading";

function ClientSays() {
  const [activeIndex, setActiveIndex] = useState(0); // Track active slide

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    beforeChange: (current, next) => setActiveIndex(next), // Update active index
  };

  const clients = [
    {
      image: "/images/aboutUs/clientSays/first.png",
      name: "Selina Gomez",
      designation: "CEO At Webecy Digital",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu.",
    },
    {
      image: "/images/aboutUs/clientSays/second.png",
      name: "John Doe",
      designation: "Marketing Manager",
      testimonial:
        "Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.",
    },
    {
      image: "/images/aboutUs/clientSays/third.png",
      name: "Jane Smith",
      designation: "CTO at TechCo",
      testimonial:
        "Praesent tincidunt, risus id malesuada bibendum, turpis sapien dictum massa, sit amet congue ligula.",
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center mt-[174px]">
        <SecondaryHeading>
          <span className="text-black ">Our Client Say!</span>
        </SecondaryHeading>
      </div>
      <div className="slider-container max-w-[200px] mt-16 mx-auto ">
        <Slider {...settings}>
          {clients.map((client, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={client.image}
                width={55}
                height={59}
                alt={`${client.name} Image`}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Dynamic content based on active slide */}
      <div className="max-w-[680px] mx-auto mt-6 flex flex-col items-center text-center gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-2xl font-semibold text-black">
            {clients[activeIndex].name}
          </p>
          <p className="text-subText font-medium text-xs tracking-wide">
            {clients[activeIndex].designation}
          </p>
        </div>
        <p className="text-subText font-medium">
          {clients[activeIndex].testimonial}
        </p>
      </div>
    </>
  );
}

export default ClientSays;
