"use client"
import ProductFilterSidebar from "@/components/project/ProductFilterSidebar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";

export default function Home() {
  const router = useRouter();
  const cardData = [
    {
      image: "/images/home/latestBlogs/image1.png",
      title: "Accumsan fincidunt",
      price: 26.0,
      oldPrice: 52.0,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      colors: ["#FF0000", "#FFFF00", "#0000FF"],
      rating: 4,
      reviews: [],
      href: "/pages/productDetail"
    },
    {
      image: "/images/home/latestBlogs/image1.png",
      title: "In nulla",
      price: 30.0,
      oldPrice: 60.0,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      colors: ["#FF5733", "#33FF57", "#3357FF"],
      rating: 5,
      reviews: [],
      href: "/pages/productDetail"
    },
    {
      image: "/images/home/latestBlogs/image1.png",
      title: "Vel sem",
      price: 26.0,
      oldPrice: 52.0,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      colors: ["#FF0000", "#FFFF00", "#0000FF"],
      rating: 4,
      reviews: [],
      href: "/pages/productDetail"
    },
    {
      image: "/images/home/latestBlogs/image1.png",
      title: "Porttitor cum",
      price: 32.0,
      oldPrice: 64.0,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      colors: ["#FFC0CB", "#FFD700", "#800080"],
      rating: 3,
      reviews: [],
      href: "/pages/productDetail"
    },
  ];

  return (
    <div className="container mx-auto p-4 max-w-[1180px] flex gap-3">
      <ProductFilterSidebar />

      <div className="space-y-5">
        {cardData.map((card, index) => (
          <div
            onClick={() => router.push(card.href)}
            key={index}
            className="flex flex-col md:flex-row w-[313px] md:w-full mx-auto items-center  p-4 gap-6"
          >
            {/* Image Section */}
            <Image
              className="object-cover"
              src={card.image}
              alt={card.title}
              width={313}
              height={217}
            />

            {/* Content Section */}
            <div className="flex flex-col   flex-1 gap-3 ">
              <div className="flex gap-5  items-center">
                <div className=" text-lg font-bold text-darkTextBlue">
                  {card.title}
                </div>
                {/* colors */}
                <div className="flex gap-2  items-center">
                  {["orange", "pink", "purple"].map((item) => (
                    <div
                      key={item}
                      className={`${
                        item == "orange"
                          ? "bg-[#DE9034]"
                          : item == "pink"
                          ? "bg-pPink"
                          : item == "purple"
                          ? "bg-[#8568FF]"
                          : ""
                      } rounded-full aspect-square size-4`}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex items-center gap-x-3">
                  <span className="text-sm text-darkTextBlue ">
                    ${card.price.toFixed(2)}
                  </span>
                  <span className=" text-[12px] line-through text-pPink">
                    ${card.oldPrice.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center">
                  {/* Rating Stars */}
                  {[...Array(5)].map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      className={`w-4 h-4 ${
                        starIndex < card.rating
                          ? "text-yellow-300"
                          : "text-gray-300"
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  ))}
                </div>
              </div>

              <p className="text-subText">{card.description}</p>

              <div className={` flex gap-5`}>
                {[FiShoppingCart, CiHeart, HiMagnifyingGlassPlus].map(
                  (Icon) => (
                    <div
                      key={Icon}
                      className={` bg-transparent  cursor-pointer rounded-full p-2 
                      text-darkTextBlue hover:text-white  hover:bg-darkTextBlue 
                      
                  }  flex justify-center items-center   `}
                    >
                      <Icon className="  size-[19px] " />
                    </div>
                  )
                )}
              </div>

              {/* Reviews Section */}
              <div className="mt-2">
                {card.reviews.map((review, reviewIndex) => (
                  <div key={reviewIndex} className="text-sm text-gray-600">
                    <strong>{review.user}:</strong> {review.comment}{" "}
                    <span>({review.rating} stars)</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
