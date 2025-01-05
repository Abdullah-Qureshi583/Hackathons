import Image from "next/image";
import React from "react";
import SecondaryHeading from "../SecondaryHeading";
import PinkButton from "../PinkButton";

const SubscribeOurNews = () => {
  return (
    <div className=" mt-[150px] relative hidden md:flex justify-center items-center ">
      <Image
        width={9000}
        height={462}
        src="/images/home/subscribeOurNews/iamge.png"
        alt="Bg Image"
      />
      <div className="absolute  container mx-auto max-w-[574px] text-center  gap-7 flex justify-center items-center  flex-col   ">
        <SecondaryHeading>
          Get Leatest Update By Subscribe 0ur Newslater
        </SecondaryHeading>
        <PinkButton>Shop Now</PinkButton>
      </div>
    </div>
  );
};

export default SubscribeOurNews;
