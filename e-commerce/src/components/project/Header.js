"use client";
import Link from "next/link";
import { FaEnvelope, FaPhoneAlt, FaShoppingCart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const languages = [
  "English",
  "Spanish",
  "French",
  "German",
  "Chinese",
  "Japanese",
  "Hindi",
  "Russian",
  "Arabic",
  "Portuguese",
];

const Header = () => {
  return (
    <div className="bg-pViolet text-textOffwhite">
      <div className="container mx-auto max-w-[1180px] flex justify-center md:justify-between items-center px-4 py-2 md:py-3.5">
        {/* Left Section - Email and Phone */}
        <div className="flex space-x-4 lg:space-x-8 ">
          <div className="flex items-center">
            <FaEnvelope className="mr-2" />
            <span>mhhasanul@gmail.com</span>
          </div>
          <div className="hidden md:flex items-center">
            <FaPhoneAlt className="mr-2" />
            <span>(12345)67890</span>
          </div>
        </div>

        {/* Right Section - Links */}
        <div className="hidden md:flex items-center ">
          <div className="flex items-center">
            {/* languages */}
            <Select>
              <SelectTrigger className="w-[180px">
                <SelectValue className="text-2xl" placeholder="English" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((language, index) => (
                  <SelectItem key={index} value={language}>
                    {language}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* currency */}
            <Select>
              <SelectTrigger className="w-[180px">
                <SelectValue className="text-2xl" placeholder="USD" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((language, index) => (
                  <SelectItem key={index} value={language}>
                    {language}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/pages/myAccount" className="flex items-center ">
              Login
              <FiUser className="ml-1" />
            </Link>
            <Link href="#" className="flex items-center ">
              Wishlist
              <CiHeart className="ml-1" />
            </Link>
            <Link href="/pages/shoppingCart" className="flex items-center ">
              <FaShoppingCart className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
