"use client";
import React from "react";
import Imagecomponent from "../Imagecomponent";
import PrimaryHeading from "../PrimaryHeading";
import { useRouter } from "next/navigation";
const items = [
  {
    id: 1,
    name: "Mini LCW Chair",
    price: "$56.00",
    imageUrl: "/images/home/trendingProducts/first.png",
    href: "/pages/productDetail",
  },
  {
    id: 2,
    name: "Eames Lounge Chair",
    price: "$4,500.00",
    imageUrl: "/images/home/trendingProducts/second.png",
    href: "/pages/productDetail",
  },
  {
    id: 3,
    name: "Barcelona Chair",
    price: "$3,200.00",
    imageUrl: "/images/home/trendingProducts/third.png",
    href: "/pages/productDetail",
    href: "/pages/productDetail",
  },
  {
    id: 4,
    name: "Panton Chair",
    price: "$300.00",
    imageUrl: "/images/home/trendingProducts/second.png",
    href: "/pages/productDetail",
  },
];
const TopCategories = () => {
  const router = useRouter();
  return (
    <>
      <PrimaryHeading>Top Categories</PrimaryHeading>
      <div className="flex flex-wrap gap-10 mt-[56px] justify-center">
        {items.map((item) => (
          <div
            onClick={() => router.push(item.href)}
            key={item.id}
            className="flex flex-col gap-3   w-[230px] group items-center "
          >
            <div className="bg-pViolet/60 w-full h-full rounded-full">
              <div className="w-full h-full rounded-full  bg-chairBgOffWhite group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:bg-white  overflow-hidden aspect-square">
                <Imagecomponent
                  imageBg="offWhite"
                  imageSrc={item.imageUrl}
                  buttonPosition="rowTopLeft"
                  buttonType="viewShop"
                  buttonHref="/ds"
                  width="177"
                  height="177"
                  showHover
                  hoverIcons={false}
                />
              </div>
            </div>
            <div className="text-xl text-darkTextBlue">Mini LCW Chair</div>
            <div className="text-darkTextBlue text-base">$56.00</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TopCategories;
