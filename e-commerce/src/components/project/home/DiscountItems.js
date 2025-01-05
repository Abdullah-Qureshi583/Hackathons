"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import PrimaryHeading from "../PrimaryHeading";
import PinkButton from "../PinkButton";
import SecondaryHeading from "../SecondaryHeading";
import { useState } from "react";
import { IoIosCheckmark } from "react-icons/io";

const links = [
  {
    name: "WoodChair",
    label: "Wood Chair",
  },
  {
    name: "PlasticChair",
    label: "Plastic Chair",
  },
  {
    name: "SofaColletion",
    label: "Sofa Colletion",
  },
];
export default function DiscountItems() {
  const [activeTab, setActiveTab] = useState("WoodChair");
  return (
    <div className="flex flex-col  items-center mt-[125px]">
      <PrimaryHeading>Discount Items</PrimaryHeading>

      <ul className="flex flex-col  gap-y-3 md:flex-row text-center gap-x-14 mt-8 ">
        {links.map((Item) => (
          <li
            key={Item.name}
            onClick={() => setActiveTab(Item.name)}
            className={`text-lg text-darkTextBlue  ${
              activeTab == Item.name ? "text-pPink" : ""
            }  cursor-pointer hover:scale-105 duration-300 bgred4 hover:font-semibold flex items-center gap-2`}
          >
            {Item.label}

            <div
              className={`${
                activeTab == Item.name
                  ? "size-[5px] bg-pPink rounded-full "
                  : ""
              }`}
            ></div>
          </li>
        ))}
      </ul>

      <div className="grid md:grid-cols-2 mt-8 lg:mt-6  ">
        <div className="relative px-4 md:px-0 flex flex-col gap-3 lg:gap-6 justify-center items-start">
          {/* Heading Section */}
          <SecondaryHeading>
            {activeTab == "WoodChair"
              ? "20%"
              : activeTab == "PlasticChair"
              ? "30%"
              : activeTab == "SofaColletion"
              ? "40%"
              : ""}{" "}
            Discount Of All Products
          </SecondaryHeading>
          <p className="text-pPink text-[21px]">Eams Sofa Compact</p>

          {/* Description */}
          <p className="text-subText  text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-2 text-subText text-sm lg:text-base">
            <p className="flex items-center">
              <IoIosCheckmark className="size-8 text-[#7569B2] " />
              Material expose like metals
            </p>
            <p className="flex items-center">
              <IoIosCheckmark className="size-8 text-[#7569B2] " /> Clear lines
              and geometric figures
            </p>
            <p className="flex items-center">
              <IoIosCheckmark className="size-8 text-[#7569B2] " /> Simple
              neutral colours.
            </p>
            <p className="flex items-center">
              <IoIosCheckmark className="size-8 text-[#7569B2] " /> Material
              expose like metals
            </p>
          </div>

          {/* Button */}
          <PinkButton>Shop Now</PinkButton>
        </div>
        <div className="py-9   px-[.8rem]">
          <Image
            src="/images/home/discountItems/sofa.png"
            alt=""
            width={700}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}
