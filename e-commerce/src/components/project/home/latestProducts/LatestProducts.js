"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NewArrival from "./NewArrival";
import BestSellers from "./BestSellers";
import PrimaryHeading from "../../PrimaryHeading";

const links = [
  {
    name: "newArrival",
    label: "New Arrival",
  },
  {
    name: "BestSeller",
    label: "Best Seller",
  },
  {
    name: "Featured",
    label: "Featured",
  },
  {
    name: "SpecialOffer",
    label: "Special Offer",
  },
];
const LatestProducts = () => {
  const [activeTab, setActiveTab] = useState("newArrival");
  return (
    <div className="flex flex-col items-center mt-[70px]">
      <PrimaryHeading>Leatest Products</PrimaryHeading>
      <ul className="flex gap-y-3 flex-col md:flex-row text-center gap-x-14 mt-5 ">
        {links.map((Item) => (
          <li
            key={Item.name}
            onClick={() => setActiveTab(Item.name)}
            className={`text-lg text-darkTextBlue ${
              activeTab == Item.name ? "underline text-red-500" : ""
            } cursor-pointer hover:scale-105 duration-300 hover:font-semibold`}
          >
            {Item.label}
          </li>
        ))}
      </ul>
      {activeTab === "newArrival" ? (
        <NewArrival />
      ) : activeTab == "BestSeller" ? (
        <BestSellers />
      ) : activeTab == "Featured" ? (
        <NewArrival />
      ) : (
        <BestSellers />
      )}
    </div>
  );
};

export default LatestProducts;
