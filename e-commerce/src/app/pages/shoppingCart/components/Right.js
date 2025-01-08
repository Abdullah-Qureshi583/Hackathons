import PinkButton from "@/components/project/PinkButton";
import React from "react";
import SubTotalsCard from "./CalculateShippingCard";
import Link from "next/link";
import CalculateShippingCard from "./CalculateShippingCard";
import CartSubTotals from "./CartSubTotals";

const Right = () => {
  return (
    <div className="flex flex-col w-full md:w-[371px] gap-8">
      <div className=" ">
        <div className="flex flex-col items-center gap-10">
          <h6 className="text-xl font-medium ">Cart Totals</h6>
          <CartSubTotals/>
        </div>
      </div>

      {/* Calculate Shipping */}
      <div className="">
        <div className="flex flex-col items-center w-full gap-5">
          <h3 className="text-xl font-medium ">Calculate Shipping</h3>
          <CalculateShippingCard />
        </div>
      </div>
    </div>
  );
};

export default Right;
