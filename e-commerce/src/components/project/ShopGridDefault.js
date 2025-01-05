import React from "react";

import Link from "next/link";
import Image from "next/image";
import PrimaryHeading from "./PrimaryHeading";
import Imagecomponent from "./Imagecomponent";

const ShopGridDefault = () => {
  const chairs = [
    {
      id: 1,
      name: "Cantilever chair",
      price: 42.0,
      originalPrice: "65.00",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s",
    },
    {
      id: 2,
      name: "Cantilever chair",
      price: 42.0,
      originalPrice: "65.00",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s",
    },
    {
      id: 3,
      name: "Cantilever chair",
      price: 42.0,
      originalPrice: "65.00",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s",
    },
    {
      id: 4,
      name: "Cantilever chair",
      price: 42.0,
      originalPrice: "65.00",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s",
    },
    {
      id: 5,
      name: "Cantilever chair",
      price: 42.0,
      originalPrice: "65.00",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s",
    },
    {
      id: 5,
      name: "Cantilever chair",
      price: 42.0,
      originalPrice: "65.00",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s",
    },
    {
      id: 5,
      name: "Cantilever chair",
      price: 42.0,
      originalPrice: "65.00",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s",
    },
    {
      id: 5,
      name: "Cantilever chair",
      price: 42.0,
      originalPrice: "65.00",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s",
    },
    {
      id: 5,
      name: "Cantilever chair",
      price: 42.0,
      originalPrice: "65.00",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s",
    },
    {
      id: 5,
      name: "Cantilever chair",
      price: 42.0,
      originalPrice: "65.00",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s",
    },
  ];

  return (
    <div className="flex flex-col items-center   ">
      {/* chair images */}
      <div className="flex flex-wrap mt-[140px]  w-full justify-center gap-6  ">
        {chairs.map((chair) => (
          <div key={chair.id} className=" group p-3 shadow-sm   ">
            <Imagecomponent
              imageBg="shopDefault"
              imageSrc="/images/home/discountItems/sofa.png"
              width="201"
              height="201"
              buttonPosition="colBottomleft"
              showHover
            />

            <div className="flex flex-col justify-center items-center mt-4 pb-8">
              {/* name */}
              <div className=" text-lg font-bold text-darkTextBlue">
                {chair.name}
              </div>
              {/* colors */}
              <div className="flex gap-2 mt-3 items-center">
                {["orange", "pink", "purple"].map((item) => (
                  <div
                    key={item}
                    className={`
                      ${
                        item == "orange"
                          ? "bg-[#DE9034]"
                          : item == "pink"
                          ? "bg-pPink"
                          : item == "purple"
                          ? "bg-[#8568FF]"
                          : ""
                      } rounded-full w-[10px] h-[10px]`}
                  ></div>
                ))}
              </div>
              {/* price */}
              <div className="flex mt-4 items-center gap-x-3">
                <span className="text-sm text-darkTextBlue ">
                  ${chair.price}
                </span>
                <span className=" text-[12px] line-through text-pPink">
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

export default ShopGridDefault;
