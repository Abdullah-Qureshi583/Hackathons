import PinkButton from "@/components/project/PinkButton";
import SecondaryHeading from "@/components/project/SecondaryHeading";
import Image from "next/image";
import React from "react";

const ContactUs = () => {
  return (
    <div className="container mx-auto p-4 max-w-[1180px]  flex flex-col gap-32  ">
      {/* top */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-28 ">
        {/* Left Section */}
        <div className="flex flex-col gap-4">
          <SecondaryHeading>Information About Us</SecondaryHeading>
          <p className="text-subText font-medium ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est.
          </p>
          <div className="flex gap-4 ">
            <div className="w-6 h-6 rounded-full bg-[#5625DF]"></div>
            <div className="w-6 h-6 rounded-full bg-pPink"></div>
            <div className="w-6 h-6 rounded-full bg-[#37DAF3]"></div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-y-7">
          <SecondaryHeading>Contact Way</SecondaryHeading>
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-y-10 text-gray-500">
            <div className="flex gap-3">
              <div className="rounded-full bg-[#5726DF] size-[30px] aspect-square lg:size-[45px] "></div>
              <div className="flex flex-col text-subText">
                <p>
                  Tel: <span className="ml-1"> 877-67-88-99 </span>
                </p>
                <p>
                  E-Mail: <span className="ml-1"> shop@store.com </span>
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-pPink size-[30px] aspect-square lg:size-[45px] "></div>
              <div className="flex flex-col text-subText">
                <p>Support Forum </p>
                <p>For over 24hr</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-[#FFB265] size-[30px] aspect-square lg:size-[45px] "></div>
              <div className="flex flex-col text-subText">
                <p>20 Margaret st, London </p>
                <p>20 Margaret st, London</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-[#1BE982] size-[30px] aspect-square lg:size-[45px] "></div>
              <div className="flex flex-col text-subText">
                <p>Free standard shipping </p>
                <p>on all orders.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {/* Form Section */}
        <div className="">
          <SecondaryHeading>Get In Touch</SecondaryHeading>
          <p className="text-subText mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices tristique amet erat vitae eget dolor los vitae
            lobortis quis bibendum quam.
          </p>
          <form className="mt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 mt-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Type Your Message"
              className="w-full p-3 mt-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
            ></textarea>
            <div className="mt-4">
              <PinkButton>Send Mail</PinkButton>
            </div>
          </form>
        </div>
        {/* image */}
        <Image
          src="/images/contactUs/community.png"
          width={723}
          height={692}
          alt="Community Image"
        />
      </div>
    </div>
  );
};

export default ContactUs;
