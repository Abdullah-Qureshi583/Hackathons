import Image from "next/image";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function ShowImage() {
  return (
    <div className="flex  flex-col md:flex-row items-center md:items-start gap-8 md:p-8">
      {/* Left Section: Images */}
      <div className="flex  md:gap-5">
        <div className=" flex-col gap-2  flex">
          <Image
            width={151}
            height={155}
            src="/images/productD/first.png"
            alt="Thumbnail 1"
            className=" object-cover rounded-md text-start"
          />
          <Image
            width={151}
            height={155}
            src="/images/productD/second.png"
            alt="Thumbnail 2"
            className=" object-cover rounded-md"
          />
          <Image
            width={151}
            height={155}
            src="/images/productD/third.png"
            alt="Thumbnail 3"
            className=" object-cover rounded-md"
          />
        </div>
        <Link href={"/pages/orderCompleted"} className="">
          <Image
            width={375}
            height={487}
            src="/images/productD/mainBag.png"
            alt="Main product"
            className="object-cover rounded-md"
          />
        </Link>
      </div>

      {/* Right Section: Product Details */}
      <div className="flex flex-col gap-3 py-3">
        <h4 className="text-4xl font-semibold">Playwood Arm Chair</h4>
        <p className="text-yellow-500">
          ⭐⭐⭐⭐⭐{" "}
          <span className="text-sm text-darkTextBlue font-semibold"> (20)</span>
        </p>
        <div className="flex items-center gap-4">
          <span className="text-base font-semibold text-darkTextBlue">
            $1200
          </span>
          <span className="text-base font-semibold text-pPink line-through">
            $1600
          </span>
        </div>
        <p className=" text-subText text-wrap font-semibold">
          Lorem ipsum dolorsit vel.
        </p>

        {/* Add to Cart Button */}
        <button className="flex gap-6 items-center ml-20 text-darkTextBlue">
          Add To Cart
          <CiHeart />
        </button>

        {/* Categories and Tags */}
        <div className="flex flex-col gap-3">
          <p className="font-medium ">Categories:</p>
          <p className="font-medium ">Tags:</p>
          <div className="flex gap-3 items-center">
            <p className="font-medium ">Share:</p>
            {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, index) => (
              <Link
                key={index}
                target="_blank"
                href="#"
                className="bg-darkTextBlue  hover:bg-darkTextBlue/90 hover:scale-105 divide-red-300 rounded-full overflow-hidden p-1"
              >
                <Icon className="text-white size-3" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
