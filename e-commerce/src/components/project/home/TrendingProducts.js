import React from "react";
import Imagecomponent from "../Imagecomponent";
import PrimaryHeading from "../PrimaryHeading";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LSCard = ({
  title,
  linklable,
  linkHref,
  imageUrl,
  bg,
  width,
  height,
  direction,
}) => {
  return (
    <div
      className={`${
        bg == "pink" ? "bg-[#FFF6FB]" : bg == "purple" ? "bg-lightPurple" : ""
      } flex flex-grow w-full h-full  p-9 pr-2 flex-col justify-between `}
    >
      <div className="flex gap-3 flex-col">
        <div className="text-darkTextBlue text-[26px] font-[600]">{title}</div>
        <Link className="text-pPink underline" href={linkHref}>
          {linklable}
        </Link>
      </div>
      <Image
        className="self-end"
        src={imageUrl}
        width={width}
        height={height}
        alt="Product image"
      />
    </div>
  );
};

const TrendingProducts = () => {
  const router = useRouter();
  const chairs = [
    {
      id: 1,
      name: "Cantilever chair",
      price: 42.0,
      originalPrice: "65.00",
      imageUrl: "/images/home/trendingProducts/first.png",

      href: "/pages/productDetail",
    },
    {
      id: 2,
      name: "Cantilever chair",
      price: 42.0,
      originalPrice: "65.00",
      imageUrl: "/images/home/trendingProducts/second.png",

      href: "/pages/productDetail",
    },
    {
      id: 3,
      name: "Cantilever chair",
      price: 42.0,
      originalPrice: "65.00",
      imageUrl: "/images/home/trendingProducts/third.png",

      href: "/pages/productDetail",
    },
    {
      id: 4,
      name: "Cantilever chair",
      price: 42.0,
      originalPrice: "65.00",
      imageUrl: "/images/home/trendingProducts/first.png",

      href: "/pages/productDetail",
    },
  ];

  return (
    <div className="flex flex-col items-center  mt-[130px] ">
      {/* heading */}
      <PrimaryHeading>Trending Products</PrimaryHeading>
      {/* chair images */}
      <div className="flex flex-wrap mt-[58px]   w-full justify-center gap-6  ">
        {chairs.map((chair) => (
          <div
            onClick={() => router.push(chair.href)}
            key={chair.id}
            className=" group p-3 shadow-sm w-full md:w-[30%] lg:w-[22%]  "
          >
            <Imagecomponent
              imageBg="offWhite"
              imageSrc={chair.imageUrl}
              width="171"
              height="171"
            />
            <div className="flex flex-col justify-center items-center mt-4 pb-8">
              <div className="text-darkTextBlue">{chair.name}</div>
              <div className="flex  items-center gap-x-3">
                <span className="text-sm text-darkTextBlue ">
                  ${chair.price}
                </span>
                <span className=" text-[12px] line-through text-subText">
                  ${chair.originalPrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* next section  */}
      <div className="flex w-full flex-col md:flex-row ">
        <div className="w-full">
          <LSCard
            title="23% off in all products"
            linklable="Shop Now"
            linkHref="/"
            imageUrl="/images/home/trendingProducts/clock.png"
            bg="pink"
            width="213"
            height="207"
            direction="row"
          />
        </div>
        <div className="w-full">
          <LSCard
            title="23% off in all products"
            linklable="View Collection"
            linkHref="/"
            imageUrl="/images/home/trendingProducts/table.png"
            bg="purple"
            width="312"
            height="173"
            direction="col"
          />
        </div>

        <div className=" md:hidden lg:flex flex-col gap-5">
          {[1, 2, 3].map((item, index) => (
            <div key={index} className="w-[272px] flex bg-white ">
              <div className="bg-chairBgOffWhite p-5">
                <Image
                  src="/images/home/trendingProducts/chair1.png"
                  width={64}
                  height={71}
                  alt="Picture of the author"
                />
              </div>
              <div className="flex flex-col gap-2 justify-center items-center p-1 ">
                <div className="text-darkTextBlue">Executive Seat chair</div>
                <p className="text-[12px]  line-through text-darkTextBlue">
                  $32.00
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
