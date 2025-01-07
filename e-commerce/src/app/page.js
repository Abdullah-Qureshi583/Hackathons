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
