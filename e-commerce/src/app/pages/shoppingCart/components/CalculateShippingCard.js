import PinkButton from "@/components/project/PinkButton";
import Link from "next/link";
import React from "react";

const CalculateShippingCard = () => {
  return (
    <div className="bg-dblLightPurple  w-full">
      <div className="flex flex-col w-full p-8">
        <div className="">
          <div className="text-subText mt-4">Country</div>
          <div className="w-full mt-2 h-[1px] bg-subText "></div>
        </div>
        <div className="">
          <div className="text-subText mt-4">City</div>
          <div className="w-full mt-2 h-[1px] bg-subText "></div>
        </div>
        <div className="mb-5">
          <div className="text-subText mt-4">Postal Code</div>
          <div className="w-full mt-2 h-[1px] bg-subText "></div>
        </div>

        <Link href="/pages/calculateShipping" className="">
          <PinkButton>Calculate Shipping</PinkButton>
        </Link>
      </div>
    </div>
  );
};

export default CalculateShippingCard;
