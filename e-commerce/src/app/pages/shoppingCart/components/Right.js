import PinkButton from "@/components/project/PinkButton";
import React from "react";
import SubTotalsCard from "./SubTotalsCard";
import Link from "next/link";

const Right = () => {
  return (
    <div className="flex flex-col w-full md:w-[371px] gap-8">
      <div className=" ">
        <div className="flex flex-col items-center gap-10">
          <h6 className="text-xl font-medium ">Cart Totals</h6>
          <div className="bg-dblLightPurple p-6 w-full">
            <div className="flex justify-between mb-2">
              <span className="">Subtotal:</span>
              <span className="">£219.00</span>
            </div>
            <div className="w-full h-[2px] bg-[#E8E6F1] mb-2"></div>
            <div className="flex justify-between mb-2">
              <span className="">Total:</span>
              <span className="">£325.00</span>
            </div>
            <div className="w-full h-[2px] bg-[#E8E6F1] mb-2"></div>
            <div className="flex items-start  gap-x-2">
              <input
                type="checkbox"
                name="taxes"
                className="accent-green-500 mt-1"
                id=""
              />
              <label className="text-green-500 text-sm mb-4" htmlFor="taxes">
                Shipping & taxes calculated at checkout.
              </label>
            </div>
            <button className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600">
              <Link href="/pages/calculateShipping">Proceed to Checkout</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Calculate Shipping */}
      <div className="">
        <div className="flex flex-col items-center w-full gap-5">
          <h3 className="text-xl font-medium ">Calculate Shipping</h3>
          <SubTotalsCard />
        </div>
      </div>
    </div>
  );
};

export default Right;
