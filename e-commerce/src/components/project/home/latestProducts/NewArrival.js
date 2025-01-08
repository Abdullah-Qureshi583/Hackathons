"use client";
import React from "react";
import Imagecomponent from "../../Imagecomponent";
import { useRouter } from "next/navigation";

const NewArrival = () => {
  const router = useRouter();
  const chairs = [
    {
      id: 1,
      name: "Comfort Handy Craft",
      price: 42.0,
      originalPrice: "65.00",
      imageUrl: "/images/home/latestProducts/newArrival/first.png",

      href: "/pages/productDetail",
    },
    {
      id: 2,
      name: "Comfort Handy Craft",
      price: 42.0,
      originalPrice: "65.00",
      imageUrl: "/images/home/latestProducts/newArrival/second.png",

      href: "/pages/productDetail",
    },
    {
      id: 3,
      name: "Comfort Handy Craft",
      price: 42.0,
      originalPrice: "65.00",
      imageUrl: "/images/home/latestProducts/newArrival/third.png",

      href: "/pages/productDetail",
    },
    {
      id: 4,
      name: "Comfort Handy Craft",
      price: 42.0,
      originalPrice: "65.00",
      imageUrl: "/images/home/latestProducts/newArrival/fourth.png",

      href: "/pages/productDetail",
    },
    {
      id: 5,
      name: "Comfort Handy Craft",
      price: 42.0,
      originalPrice: "65.00",
      imageUrl: "/images/home/latestProducts/newArrival/third.png",

      href: "/pages/productDetail",
    },
    {
      id: 6,
      name: "Comfort Handy Craft",
      price: 42.0,
      originalPrice: "65.00",
      imageUrl: "/images/home/latestProducts/newArrival/first.png",

      href: "/pages/productDetail",
    },
  ];

  return (
    <div className="flex flex-wrap mt-[58px] justify-center gap-6 gap-y-[120px] ">
      {chairs.slice(0, 6).map((chair) => (
        <div
          onClick={() => router.push(chair.href)}
          key={chair.id}
          className=" group w-full md:w-[46%] lg:w-[30%]"
        >
          <Imagecomponent
            imageBg="offWhite"
            imageSrc={chair.imageUrl}
            buttonPosition="colBottomleft"
            buttonType="sale"
            buttonHref="/ds"
            width="300"
            height="300"
            showHover
          />
          <div className="flex justify-between items-center mt-4">
            <div className="text-darkTextBlue">{chair.name}</div>
            <div className="flex  items-center gap-x-3">
              <span className="text-sm text-darkTextBlue ">${chair.price}</span>
              <span className=" text-[12px] line-through text-red-500">
                ${chair.originalPrice}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewArrival;
