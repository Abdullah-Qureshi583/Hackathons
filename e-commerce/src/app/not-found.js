import PinkButton from "@/components/project/PinkButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="bg-lightPurple  mb-32 ">
        <div className="flex container mx-auto  max-w-[1180px] px-4 min-h-[290px] ">
          <div className="flex flex-col justify-center ">
            <h2 className="text-2xl md:text-4xl font-bold mt-3">
              404 Not Found
            </h2>
            <p className="text-black mt-1 font-medium ">
              <span>Home </span>
              <span> Pages</span>
              <span className="text-pPink"> Not Found</span>
            </p>
            <div className="mt-7">
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4 max-w-[1180px] flex flex-col justify-center items-center min-h-scree">
        <Image
          src="/images/notFound/notFound.png"
          width={913}
          height={644}
          alt="Picture of the author"
        />
        <Link href="/">
          <PinkButton>Back To Home</PinkButton>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
