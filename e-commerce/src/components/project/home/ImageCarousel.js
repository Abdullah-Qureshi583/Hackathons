// "use client";
// import React, { useEffect, useRef } from "react";
// import Slider from "react-slick";
// import { Button } from "../ui/button";
// import Image from "next/image";
// import Link from "next/link";
// import { FiShoppingCart } from "react-icons/fi";
// import { CiHeart } from "react-icons/ci";

// import { FaSearchPlus } from "react-icons/fa";

// function ImageCarousel({ imagesArray, clickImageIndex }) {
//   let sliderRef = useRef(null);
//   useEffect(() => {
//     sliderRef.slickGoTo(clickImageIndex);
//   }, [clickImageIndex]);

//   const imageCarouselSetting = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   // console.log("the click image index is :", clickImageIndex);
//   return (
//     <Slider
//       ref={(slider) => {
//         sliderRef = slider;
//       }}
//       {...imageCarouselSetting}
//     >
//       {imagesArray.map((item) => (
//         <div
//           key={item.color}
//           className="relative w-full bg-dblLightPurple group-hover:bg-chairBgOffWhite h-[236px] flex items-center justify-center pl-12 pt-10 "
//         >
//           <Image
//             className=" "
//             height={178}
//             width={178}
//             src={item.image}
//             alt="Chair one"
//           />

//           {/*  hover effects */}
//           <div className="absolute inset-0  flex flex-col  justify-between  items-center pb-3 opacity-0 group-hover:opacity-100 transition-opacity">
//             <div className=" self-start relative left-3 top-3 flex space-x-4">
//               {[FiShoppingCart, CiHeart, FaSearchPlus].map((Icon) => (
//                 <div
//                   key={Icon}
//                   className="group bg-transparent hover:bg-lightPurple cursor-pointer rounded-full p-2 text-blue-500 hover:text-darkTextBlue flex justify-center items-center   "
//                 >
//                   <Icon className="  size-[19px] " />
//                 </div>
//               ))}
//             </div>
//             <Button
//               className="bg-bgLightGreen hover:bg-bgLightGreen hover:scale-105 duration-300 hover:shadow-lg text-sm"
//               asChild
//             >
//               <Link href="#">View Detail</Link>
//             </Button>
//           </div>
//         </div>
//       ))}
//     </Slider>
//   );
// }

// export default ImageCarousel;
