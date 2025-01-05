"use client";
import DiscountItems from "@/components/project/home/DiscountItems";
import FeaturedProducts from "@/components/project/home/featuredProducts/FeaturedProducts";
import Hero from "@/components/project/home/Hero";
import LatestBlogs from "@/components/project/home/LatestBlogs";
import LatestProducts from "@/components/project/home/latestProducts/LatestProducts";
import SubscribeOurNews from "@/components/project/home/SubscribeOurNews";
import TopCategories from "@/components/project/home/TopCategories";
import TrendingProducts from "@/components/project/home/TrendingProducts";
import UniqueFeatures from "@/components/project/home/UniqueFeatures";
import WhatShopexOffer from "@/components/project/home/WhatShopexOffer";
import ImageAutoSlider from "@/components/project/ImageAutoSlider";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="container mx-auto p-4 max-w-[1180px] ">
        <FeaturedProducts />
        <LatestProducts />
        <WhatShopexOffer />
      </div>
      <UniqueFeatures />
      <div className="container mx-auto p-4 max-w-[1180px] ">
        <TrendingProducts />
        <DiscountItems />
        <TopCategories />
      </div>
      <SubscribeOurNews />
      <div className="container mx-auto p-4 max-w-[1180px] ">
        <ImageAutoSlider />
        <LatestBlogs />
      </div>
    </>
  );
};

export default Home;

// import React, { useState, useRef } from "react";
// import Slider from "react-slick";
// // import { baseUrl } from "./config";

// function SlickGoTo() {
//   const [slideIndex, setSlideIndex] = useState(0);
//   const [updateCount, setUpdateCount] = useState(0);
//   let sliderRef = useRef(null);
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     afterChange: () => setUpdateCount(updateCount + 1),
//     beforeChange: (current, next) => setSlideIndex(next),
//   };
//   return (
//     <div className="slider-container">
//       <p>Total updates: {updateCount} </p>
//       <input
//         onChange={(e) => sliderRef.slickGoTo(0)}
//         value={slideIndex}
//         type="range"
//         min={0}
//         max={3}
//       />
//       <Slider
//         ref={(slider) => {
//           sliderRef = slider;
//         }}
//         {...settings}
//       >
//         <div>
//           <img
//             src={
//               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s"
//             }
//           />
//         </div>
//         <div>
//           <img
//             src={
//               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s"
//             }
//           />
//         </div>
//         <div>
//           <img
//             src={
//               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s"
//             }
//           />
//         </div>
//         <div>
//           <img
//             src={
//               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s"
//             }
//           />
//         </div>
//       </Slider>
//     </div>
//   );
// }

// export default SlickGoTo;
