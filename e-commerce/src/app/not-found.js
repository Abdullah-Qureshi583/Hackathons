import PinkButton from "@/components/project/PinkButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
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
  );
};

export default NotFound;
