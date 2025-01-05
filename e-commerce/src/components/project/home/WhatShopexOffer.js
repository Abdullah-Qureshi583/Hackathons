import Image from "next/image";
import React from "react";
import PrimaryHeading from "../PrimaryHeading";

const WhatShopexOffer = () => {
  return (
    <div className="flex flex-col items-center mt-[60px]">
      <PrimaryHeading>What Shopex Offer!</PrimaryHeading>


      
      <div className="flex gap-x-5 flex-wrap justify-center">
        {[1, 2, 3, 4].map((item, index) => (
          <div
            key={index}
            className=" shadow-md w-[270px] py-14  flex flex-col gap-7 items-center justify-center"
          >
            <Image
              src="/images/home/shopexOffer/car.png"
              width={65}
              height={65}
              alt="car image"
            />
            <p className="text-darkTextBlue">24/7 Support</p>
            <p className="text-subText text-center font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatShopexOffer;
