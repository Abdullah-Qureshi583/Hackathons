import PinkButton from "@/components/project/PinkButton";
import React from "react";

const SubTotalsCard = () => {
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

        <PinkButton>Calculate Shipping</PinkButton>
      </div>
    </div>
  );
};

export default SubTotalsCard;
