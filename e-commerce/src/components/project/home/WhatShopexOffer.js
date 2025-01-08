import Image from "next/image";
import React from "react";
import PrimaryHeading from "../PrimaryHeading";

const WhatShopexOffer = ({ title = "What Shopex Offer!" }) => {
  return (
    <div className="flex flex-col items-center mt-[60px]">
      <PrimaryHeading>{title}</PrimaryHeading>

      <div className="flex gap-x-5 flex-wrap justify-center">
        {[
          {
            url: "/images/home/shopexOffer/car.png",
            title: "24/7 Support",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            url: "/images/home/shopexOffer/coin.png",
            title: "24/7 Support",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            url: "/images/home/shopexOffer/medal.png",
            title: "24/7 Support",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            url: "/images/home/shopexOffer/call.png",
            title: "24/7 Support",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className=" shadow-md w-[270px] py-14  flex flex-col gap-7 items-center justify-center"
          >
            <Image src={item.url} width={65} height={65} alt="car image" />
            <p className="text-darkTextBlue">{item.title}</p>
            <p className="text-subText text-center font-bold">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatShopexOffer;
