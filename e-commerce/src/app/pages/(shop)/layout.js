import FilterProducts from "@/components/project/FilterProducts";
import React from "react";

const ShopLayout = ({ children }) => {
  return (
    <div>
      <FilterProducts />
      {children}
    </div>
  );
};

export default ShopLayout;
