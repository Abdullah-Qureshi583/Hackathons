import PinkButton from "@/components/project/PinkButton";
import Link from "next/link";
import React from "react";
const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full py-3 focus:border-b-pPink focus-within:outline-none  bg-transparent border-b-2 placeholder:text-subText text-black border-subText"
    />
  );
};
export default function CalcShipLeft() {
  return (
    <div className="col-span-2 bg-dblLightPurple px-8 py-16">
      <div className="flex flex-col gap-4 mb-24">
        <div className="flex flex-col md:flex-row justify-center   md:justify-between items-center">
          <h2 className="text-lg font-semibold ">Contact Information</h2>
          <p className=" text-subText text-sm ">
            Already have an Account?{" "}
            <Link href="/pages/myAccount" className=" hover:underline">
              Login
            </Link>
          </p>
        </div>
        <Input type={"text"} placeholder="Email or mobile phone number" />

        <label className="flex items-center mt-3">
          <input type="checkbox" className="mr-2 accent-green-500" />
          <span className="text-sm text-gray-600">
            Keep me up to date on news and exclusive offers
          </span>
        </label>
      </div>

      <div className="flex flex-col gap-8">
        <h2 className="text-lg font-semibold ">Shipping address</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input type={"text"} placeholder="First name (optional)" />
          <Input type={"text"} placeholder="Last name" />
        </div>
        <Input type={"text"} placeholder="Address" />
        <Input type={"text"} placeholder="Apartment, suite, etc. (optional)" />
        <Input type={"text"} placeholder="City" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <Input type={"text"} placeholder="Bangladesh" />
          <Input type={"text"} placeholder="Postal Code" />
        </div>
      </div>
      <div className="mt-[131px]">
        <PinkButton>Continue Shipping</PinkButton>
      </div>
    </div>
  );
}
