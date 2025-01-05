import React from "react";
import Imagecomponent from "../../Imagecomponent";

const BestSellers = () => {
  const chairs = [
    {
      id: 1,
      name: "Comfort Handy Craft",
      price: 42.0,
      originalPrice: "65.00",
      imageUrl: "/images/home/latestProducts/newArrival/fifth.png",
    },
    {
      id: 2,
      name: "Comfort Handy Craft",
      price: 42.0,
      originalPrice: "65.00",
      imageUrl: "/images/home/latestProducts/newArrival/fifth.png",
    },
    {
      id: 3,
      name: "Comfort Handy Craft",
      price: 42.0,
      originalPrice: "65.00",
      imageUrl: "/images/home/latestProducts/newArrival/fifth.png",
    },
    {
      id: 4,
      name: "Comfort Handy Craft",
      price: 42.0,
      originalPrice: "65.00",
      imageUrl: "/images/home/latestProducts/newArrival/fifth.png",
    },
    {
      id: 5,
      name: "Comfort Handy Craft",
      price: 42.0,
      originalPrice: "65.00",
      imageUrl: "/images/home/latestProducts/newArrival/fifth.png",
    },
    {
      id: 6,
      name: "Comfort Handy Craft",
      price: 42.0,
      originalPrice: "65.00",
      imageUrl: "/images/home/latestProducts/newArrival/fifth.png",
    },
  ];

  return (
    <div className="">
      <div className="flex flex-wrap mt-[58px] justify-center gap-6 gap-y-[120px] ">
        {chairs.slice(0, 6).map((chair) => (
          <div key={chair.id} className=" group w-full md:w-[46%] lg:w-[30%]">
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
                <span className="text-sm text-darkTextBlue ">
                  ${chair.price}
                </span>
                <span className=" text-[12px] line-through text-red-500">
                  ${chair.originalPrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
