"use client";
// import "./featuredProducts.css";
import "./featuredProducts.css";
import React from "react";
import Slider from "react-slick";
import Imagecomponent from "../../Imagecomponent";
import PrimaryHeading from "../../PrimaryHeading";
const chairs = [
  {
    id: 1,
    code: "ide",
    name: "Chair 1",
    price: 49.99,
    code: "C1G",
    colors: ["bg-lineGreen", "bg-pPink", "bg-darkTextBlue"],
    src: "/images/home/featuredProducts/first.png",
  },
  {
    id: 2,
    code: "ide",
    name: "Chair 2",
    price: 59.99,
    colors: ["bg-lineGreen", "bg-pPink", "bg-darkTextBlue"],
    src: "/images/home/featuredProducts/second.png",
  },
  {
    id: 3,
    code: "ide",
    name: "Chair 3",
    price: 69.99,
    colors: ["bg-lineGreen", "bg-pPink", "bg-darkTextBlue"],
    src: "/images/home/featuredProducts/third.png",
  },
  {
    id: 4,
    code: "bfsag",
    name: "Chair 4",
    price: 79.99,
    code: "C4R",
    colors: ["bg-lineGreen", "bg-pPink", "bg-darkTextBlue"],
    src: "/images/home/featuredProducts/fourth.png",
  },
  {
    id: 5,
    code: "ide",
    name: "Chair 1",
    price: 49.99,
    code: "C1G",
    colors: ["bg-lineGreen", "bg-pPink", "bg-darkTextBlue"],
    src: "/images/home/featuredProducts/first.png",
  },
  {
    id: 6,
    code: "ide",
    name: "Chair 2",
    price: 59.99,
    colors: ["bg-lineGreen", "bg-pPink", "bg-darkTextBlue"],
    src: "/images/home/featuredProducts/second.png",
  },
  {
    id: 7,
    code: "ide",
    name: "Chair 3",
    price: 69.99,
    colors: ["bg-lineGreen", "bg-pPink", "bg-darkTextBlue"],
    src: "/images/home/featuredProducts/third.png",
  },
  {
    id: 8,
    code: "bfsag",
    name: "Chair 4",
    price: 79.99,
    code: "C4R",
    colors: ["bg-lineGreen", "bg-pPink", "bg-darkTextBlue"],
    src: "/images/home/featuredProducts/fourth.png",
  },
  {
    id: 9,
    code: "ide",
    name: "Chair 1",
    price: 49.99,
    code: "C1G",
    colors: ["bg-lineGreen", "bg-pPink", "bg-darkTextBlue"],
    src: "/images/home/featuredProducts/first.png",
  },
  {
    id: 10,
    code: "ide",
    name: "Chair 2",
    price: 59.99,
    colors: ["bg-lineGreen", "bg-pPink", "bg-darkTextBlue"],
    src: "/images/home/featuredProducts/second.png",
  },
  {
    id: 11,
    code: "ide",
    name: "Chair 3",
    price: 69.99,
    colors: ["bg-lineGreen", "bg-pPink", "bg-darkTextBlue"],
    src: "/images/home/featuredProducts/third.png",
  },
  {
    id: 12,
    code: "bfsag",
    name: "Chair 4",
    price: 79.99,
    code: "C4R",
    colors: ["bg-lineGreen", "bg-pPink", "bg-darkTextBlue"],
    src: "/images/home/featuredProducts/fourth.png",
  },
];

function FeaturedProducts() {
  const mainSetting = {
    dots: true,
    infinite: true, // Changed from false to true
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    swipeToSlide: false, // Enables swiping to slide
    draggable: true,
    touchMove: true,
    fade: false,
    swipe: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="  pb-12  mt-[120px]">
      <PrimaryHeading>Featured Products</PrimaryHeading>
      <Slider className="mt-12 " {...mainSetting}>
        {chairs.map((chair) => (
          <div
            key={chair.id}
            className="max-w-[270px] group overflow-hidden shadow-lg  "
          >
            <Imagecomponent
              imageBg="lightPurple"
              imageSrc={chair.src}
              buttonPosition="rowTopLeft"
              buttonType="viewDetail"
              buttonHref="/pages/productDetail"
              width="177"
              height="177"
              showHover
            />

            {/* detail */}
            <div className="flex flex-col items-center  py-4 gap-3 bg-white group-hover:bg-chairBgBlue ">
              <div className="font-bold text-lg text-pPink group-hover:text-white">
                {chair.name}
              </div>
              <div className="flex gap-x-1">
                {chair.colors.map((color) => (
                  <div
                    onClick={() => {
                      setInnersImageIndex(index);
                    }}
                    key={color}
                    className={`w-[14px] h-[4px] rounded-lg cursor-pointer ${color} hover:scale-110 duration-300 hover:scale-y-125 `}
                  ></div>
                ))}
              </div>
              <p className="text-darkTextBlue text-sm group-hover:text-textOffwhite">
                Code - {chair.code}
              </p>
              <p className="text-darkTextBlue text-sm group-hover:text-textOffwhite ">
                {chair.price}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default FeaturedProducts;
