import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";

import { FaSearchPlus } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";

const Imagecomponent = ({
  imageBg,
  imageSrc,
  buttonPosition,
  buttonType,
  buttonHref,
  width,
  height,
  showHover,
  hoverIcons = true,
}) => {
  return (
    <div
      className={`relative w-full ${
        imageBg == "lightPurple"
          ? "bg-dblLightPurple group-hover:bg-chairBgOffWhite"
          : imageBg == "offWhite"
          ? "bg-chairBgOffWhite group-hover:bg-white"
          : imageBg == "shopDefault"
          ? "bg-chairBgOffWhite group-hover:bg-[#EBF4F3] h-[270px] w-[260px] "
          : ""
      }   flex items-center flex-grow justify-center  pt-10 pb-3 `}
    >
      <Image
        className=" "
        height={width}
        width={height}
        src={imageSrc}
        alt="Chair"
      />

      {/*  hover effects */}
      {showHover && (
        <div className="absolute inset-0  flex flex-col  justify-end  items-center pb-3 opacity-0 group-hover:opacity-100 transition-opacity">
          {hoverIcons == false ? (
            ""
          ) : (
            <div
              className={` ${
                buttonPosition == "rowTopLeft"
                  ? "flex-row  self-start top-3"
                  : buttonPosition == "colBottomleft"
                  ? "flex-col self-start bottom-10"
                  : ""
              }  absolute left-3  flex space-4`}
            >
              {[FiShoppingCart, CiHeart, HiMagnifyingGlassPlus].map((Icon) => (
                <div
                  key={Icon}
                  className={`group bg-transparent  cursor-pointer rounded-full p-2 ${
                    imageBg == "shopDefault"
                      ? "text-darkTextBlue hover:bg-white "
                      : "hover:bg-lightPurple text-blue-500 hover:text-darkTextBlue"
                  }  flex justify-center items-center   `}
                >
                  <Icon className="  size-[19px] " />
                </div>
              ))}
            </div>
          )}
          {buttonType == "viewDetail" && (
            <Button
              className="bg-bgLightGreen  hover:bg-bgLightGreen hover:scale-105 duration-300 hover:shadow-lg text-sm"
              asChild
            >
              <Link href={buttonHref}>View Detail</Link>
            </Button>
          )}
          {buttonType == "viewShop" && (
            <Button
              className="bg-bgLightGreen  hover:bg-bgLightGreen hover:scale-105 duration-300 hover:shadow-lg text-sm"
              asChild
            >
              <Link href={buttonHref}>View Shop</Link>
            </Button>
          )}
          {buttonType == "sale" && (
            <Image
              className="absolute top-3 left-3"
              src="/images/imageComponent/sale.png"
              width={84}
              height={56}
              alt="Sale Tag"
            />
          )}{" "}
        </div>
      )}
    </div>
  );
};

export default Imagecomponent;
