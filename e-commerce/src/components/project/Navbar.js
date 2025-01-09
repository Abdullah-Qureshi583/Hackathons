// "use client";
// import React from "react";
// import { FaBars, FaPhoneAlt, FaShoppingCart } from "react-icons/fa";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";

// import { CiHeart, CiSearch } from "react-icons/ci";
// import Link from "next/link";

// const Navbar = () => {
//   return (
//     <>
//       <div className="sticky top-0 z-10 bg-white">
//         <div className="  container mx-auto max-w-[1180px]   flex items-center justify-between px-4 py-2 md:py-4 ">
//           <div className="flex items-center gap-x-8 lg:gap-x-24 ">
//             <div className="text-[2.1rem] font-bold">
//               <Link href="/">Hekto</Link>
//             </div>
//             <div className="hidden md:flex ml-4 gap-x-4 lg:gap-x-8">
//               <Link
//                 href="/"
//                 className="hover:text-pPink hover:scale-x-105 hover:font-semibold duration-300"
//               >
//                 Home
//               </Link>

//               <Link
//                 href="/pages/shopGridDefault"
//                 className="hover:text-pPink hover:scale-x-105 hover:font-semibold duration-300"
//               >
//                 Products
//               </Link>
//               <Link
//                 href="/pages/blogs"
//                 className="hover:text-pPink hover:scale-x-105 hover:font-semibold duration-300"
//               >
//                 Blog
//               </Link>
//               <Link
//                 href="/pages/aboutUs"
//                 className="hover:text-pPink hover:scale-x-105 hover:font-semibold duration-300"
//               >
//                 About
//               </Link>
//               <Link
//                 href="/pages/contactUs"
//                 className="hover:text-pPink hover:scale-x-105 hover:font-semibold duration-300"
//               >
//                 Contact
//               </Link>
//               <Link
//                 href="/pages/faq"
//                 className="hover:text-pPink hover:scale-x-105 hover:font-semibold duration-300"
//               >
//                 FAQ
//               </Link>
//             </div>
//           </div>

//           <div className="md:hidden">
//             <Sheet>
//               <SheetTrigger>
//                 <FaBars className="size-5" />
//               </SheetTrigger>
//               <SheetContent>
//                 <SheetHeader>
//                   <SheetTitle>
//                     <div className="text-[2.1rem] font-bold">Hekto</div>
//                   </SheetTitle>
//                   <SheetDescription>
//                     <div className="flex flex-col  mt-3 gap-y-4 lg:gap-x-8">
//                       <Link href="/">Home</Link>
//                       <Link href="/pages/shopGridDefault">Products</Link>
//                       <Link href="/pages/blogs">Blog</Link>
//                       <Link href="/pages/aboutUs">About</Link>
//                       <Link href="/pages/contactUs">Contact</Link>
//                       <Link href="/pages/faq">FAQ</Link>
//                       <Link href="/pages/myAccount">Login</Link>
//                       <Link
//                         href="/"
//                         className="flex items-center justify-center"
//                       >
//                         <CiHeart className="mr-2" />
//                         Wishlist
//                       </Link>
//                       <Link
//                         href="/pages/shoppingCart"
//                         className="flex items-center justify-center"
//                       >
//                         <FaShoppingCart className="mr-2" />
//                         Cart
//                       </Link>
//                       <div className="flex justify-center items-center">
//                         <FaPhoneAlt className="mr-2" />
//                         <span>(12345)67890</span>
//                       </div>
//                     </div>
//                   </SheetDescription>
//                 </SheetHeader>
//               </SheetContent>
//             </Sheet>
//           </div>

//           <div className="hidden md:flex items-center ">
//             <div className="flex  overflow-hidden rounded border-2 ">
//               <input
//                 type="text"
//                 className="p-2 focus:outline-none  lg:w-[280px] "
//                 placeholder="Search..."
//               />
//               <button className="flex justify-center items-center px-3  bg-pPink  ">
//                 <CiSearch className="size-6" fill="white" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="md:hidden container mx-auto px-2 ">
//         <div className=" focus-within:border-1 focus-within:border-gray-600  flex overflow-hidden  border border-gray-200 rounded-md  ">
//           <input
//             type="text"
//             className="p-2 focus:outline-none  w-full  "
//             placeholder="Search..."
//           />
//           <button className="flex justify-center items-center px-3  bg-pPink  ">
//             <CiSearch className="size-6" fill="white" />
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

"use client";
import React, { useState } from "react";
import { FaBars, FaPhoneAlt, FaShoppingCart } from "react-icons/fa";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { CiHeart, CiSearch } from "react-icons/ci";
import Link from "next/link";

const Navbar = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const closeSheet = () => setIsSheetOpen(false);

  return (
    <>
      <div className="sticky top-0 z-10 bg-white">
        <div className="container mx-auto max-w-[1180px] flex items-center justify-between px-4 py-2 md:py-4">
          <div className="flex items-center gap-x-8 lg:gap-x-24">
            <div className="text-[2.1rem] font-bold">
              <Link href="/">Hekto</Link>
            </div>
            <div className="hidden md:flex ml-4 gap-x-4 lg:gap-x-8">
              <Link
                href="/"
                className="hover:text-pPink hover:scale-x-105 hover:font-semibold duration-300"
              >
                Home
              </Link>
              <Link
                href="/pages/shopGridDefault"
                className="hover:text-pPink hover:scale-x-105 hover:font-semibold duration-300"
              >
                Products
              </Link>
              <Link
                href="/pages/blogs"
                className="hover:text-pPink hover:scale-x-105 hover:font-semibold duration-300"
              >
                Blog
              </Link>
              <Link
                href="/pages/aboutUs"
                className="hover:text-pPink hover:scale-x-105 hover:font-semibold duration-300"
              >
                About
              </Link>
              <Link
                href="/pages/contactUs"
                className="hover:text-pPink hover:scale-x-105 hover:font-semibold duration-300"
              >
                Contact
              </Link>
              <Link
                href="/pages/faq"
                className="hover:text-pPink hover:scale-x-105 hover:font-semibold duration-300"
              >
                FAQ
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger>
                <FaBars className="size-5" />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <div className="text-[2.1rem] font-bold">Hekto</div>
                  </SheetTitle>
                  <SheetDescription>
                    <div className="flex flex-col mt-3 gap-y-4 lg:gap-x-8">
                      <Link href="/" onClick={closeSheet}>
                        Home
                      </Link>
                      <Link href="/pages/shopGridDefault" onClick={closeSheet}>
                        Products
                      </Link>
                      <Link href="/pages/blogs" onClick={closeSheet}>
                        Blog
                      </Link>
                      <Link href="/pages/aboutUs" onClick={closeSheet}>
                        About
                      </Link>
                      <Link href="/pages/contactUs" onClick={closeSheet}>
                        Contact
                      </Link>
                      <Link href="/pages/faq" onClick={closeSheet}>
                        FAQ
                      </Link>
                      <Link href="/pages/myAccount" onClick={closeSheet}>
                        Login
                      </Link>
                      <Link
                        href="/"
                        onClick={closeSheet}
                        className="flex items-center justify-center"
                      >
                        <CiHeart className="mr-2" />
                        Wishlist
                      </Link>
                      <Link
                        href="/pages/shoppingCart"
                        onClick={closeSheet}
                        className="flex items-center justify-center"
                      >
                        <FaShoppingCart className="mr-2" />
                        Cart
                      </Link>
                      <div className="flex justify-center items-center">
                        <FaPhoneAlt className="mr-2" />
                        <span>(12345)67890</span>
                      </div>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>

          <div className="hidden md:flex items-center">
            <div className="flex overflow-hidden rounded border-2">
              <input
                type="text"
                className="p-2 focus:outline-none lg:w-[280px]"
                placeholder="Search..."
              />
              <button className="flex justify-center items-center px-3 bg-pPink">
                <CiSearch className="size-6" fill="white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden container mx-auto px-2">
        <div className="focus-within:border-1 focus-within:border-gray-600 flex overflow-hidden border border-gray-200 rounded-md">
          <input
            type="text"
            className="p-2 focus:outline-none w-full"
            placeholder="Search..."
          />
          <button className="flex justify-center items-center px-3 bg-pPink">
            <CiSearch className="size-6" fill="white" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
