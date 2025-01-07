import React from "react";
import ShowDetail from "./components/ShowDetail";
import RelatedProducts from "./components/RelatedProducts";
import ShowImage from "./components/ShowImage";

const ProductDetail = () => {
  return (
    <div className="flex flex-col gap-32">
      <div className=" container mx-auto p-4 max-w-[1180px]">
        <ShowImage />
      </div>
      <ShowDetail />
      <div className=" container mx-auto p-4 max-w-[1180px]">
        <RelatedProducts />
      </div>
    </div>
  );
};

export default ProductDetail;
