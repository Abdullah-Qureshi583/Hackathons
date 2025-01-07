import FilterProducts from "@/components/project/FilterProducts";
import ImageAutoSlider from "@/components/project/ImageAutoSlider";
import ShowPathName from "@/components/project/ShowPathName";
import React from "react";

const PagesLayout = ({ children }) => {
  return (
    <>
      <ShowPathName />
      <div className=" ">
        {children}
        <ImageAutoSlider />
      </div>
    </>
  );
};

export default PagesLayout;
