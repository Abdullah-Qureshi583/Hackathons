import PinkButton from "@/components/project/PinkButton";
import SecondaryHeading from "@/components/project/SecondaryHeading";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutTop = () => {
  return (
    <div className="flex flex-col md:flex-row items-center  p-8  ">
      {/* Image Section */}

      <div className="rounded-lg overflow-hidden shadow-lg">
        <Image
          width={570}
          height={409}
          src="/images/aboutUs/about.png"
          alt="Business meeting"
          className=""
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 md:ml-8 mt-6 md:mt-0">
        <SecondaryHeading>
          Know About Our Ecommerce Business, History
        </SecondaryHeading>
        <p className="mt-4 text-subText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
          ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique
          amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis
          quis bibendum quam.
        </p>
        <div className="mt-16">
          <Link href="/pages/contactUs">
            <PinkButton>Contact us</PinkButton>
          </Link> 
        </div>
      </div>
    </div>
  );
};

export default AboutTop;
