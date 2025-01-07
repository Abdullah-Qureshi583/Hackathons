"use client";
import React from "react";
import { IoGrid } from "react-icons/io5";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaListUl } from "react-icons/fa";
import { useRouter } from "next/navigation";

const FilterProducts = () => {
  const router = useRouter();
  return (
    <div className="container mx-auto p-4 max-w-[1180px] flex  mb-16 flex-col items-start gap-5 xl:flex-row md:justify-between  w-full xl:items-center  ">
      <div>
        <h1 className="text-2xl font-bold text-darkTextBlue">
          Ecommerce Acceories & Fashion item
        </h1>
        <p className="text-[12px] text-subText">
          About 9,620 results (0.62 seconds)
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:items-center  gap-5  text-darkTextBlue/80">
        <div className="flex items-center gap-2">
          <label htmlFor="perPage" className=" ">
            Per Page:
          </label>
          <input
            type="number"
            id="perPage"
            className="w-14 border  px-1 text-[12px] text-subText"
            placeholder="10"
          />
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="sortBy" className="">
            Sort By:
          </label>
          <div className="border F h-full text-[12px] text-subText ">
            <Select>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Best Match" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Low to High</SelectItem>
                <SelectItem value="dark">Hight to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="view" className="">
            View:
          </label>
          <div className="flex gap-2">
            <button
              onClick={() => router.push("/pages/shopGridDefault")}
              className=""
              aria-label="Grid View"
            >
              <IoGrid />
            </button>
            <button
              onClick={() => router.push("/pages/shopList")}
              className=""
              aria-label="List View"
            >
              <FaListUl />
            </button>
          </div>
          <input
            type="text"
            id="view"
            className="w-40 h-8 border  px-1 text-[12px] text-subText"
            placeholder=""
          />
        </div>
      </div>
    </div>
  );
};

export default FilterProducts;
