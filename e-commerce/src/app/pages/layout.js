import FilterProducts from "@/components/project/FilterProducts";
import ImageAutoSlider from "@/components/project/ImageAutoSlider";
import ShowPathName from "@/components/project/ShowPathName";
import React from "react";

const PagesLayout = ({ children }) => {
  return (
    <>
      <ShowPathName />
      <div className="container mx-auto p-4 max-w-[1180px] ">
        <FilterProducts />
        {children}
        <ImageAutoSlider />
      </div>
    </>
  );
};

export default PagesLayout;
