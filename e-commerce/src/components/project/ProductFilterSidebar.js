import React from "react";
const Heading = ({ children }) => {
  return (
    <h5 className="text-[22px] font-semibold text-darkTextBlue underline underline-offset-4">
      {children}
    </h5>
  );
};
const ProductFilterSidebar = () => {
  return (
    <div className="text-nowrap bg-white p-6 shadow-md rounded-lg flex flex-col gap-11">
      {/* Product Brand */}
      <div className="flex flex-col gap-5">
        <Heading>Product Brand</Heading>

        <ul className="flex flex-col gap-2">
          {[
            "Coaster Furniture",
            "Fusion Dot High Fashion",
            "Unique Furnitture Restor",
            "Dream Furnitture Flipping",
            "Young Repurposed",
            "Green DIY furniture",
          ].map((label) => (
            <li key={label}>
              <input
                type="checkbox"
                className="text-red-500 accent-purple-400 size-4"
                id={label}
              />{" "}
              <label htmlFor={label} className="text-subText">
                {label}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col gap-5">
        <Heading>Discount Offer</Heading>

        <ul className="flex flex-col gap-2">
          {["20% Cashback", "5% Cashback Offer", "25% Discount Offer"].map(
            (label) => (
              <li key={label}>
                <input
                  type="checkbox"
                  className="text-red-500 accent-pPink size-4"
                  id={label}
                />{" "}
                <label htmlFor={label} className="text-subText">
                  {label}
                </label>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Rating */}
      <div className="flex flex-col gap-2">
        <Heading>Rating Item</Heading>
        {[
          { stars: 4, votes: 1726 },
          { stars: 3, votes: 258 },
          { stars: 2, votes: 256 },
          { stars: 2, votes: 25 },
        ].map((rating, index) => (
          <div key={index} className="flex  items-center gap-1">
            {/* Checkbox */}
            <input type="checkbox" className={`size-4 accent-yellow-300 `} />

            {/* Stars */}
            <div className="flex items-center space-x-1">
              {[...Array(rating.stars)].map((_, i) => (
                <span key={i} className="text-yellow-500 ">
                  &#9733;
                </span>
              ))}
              {[...Array(5 - rating.stars)].map((_, i) => (
                <span key={i} className="text-subText">
                  &#9733;
                </span>
              ))}
            </div>

            {/* Votes */}
            <span className="text-subText">({rating.votes})</span>
          </div>
        ))}
      </div>

      {/* Categories */}
      <div className="flex flex-col gap-5">
        <Heading>Categories</Heading>

        <ul className="flex flex-col gap-2">
          {[
            "Prestashop",
            "Magento",
            "Bigcommerce",
            "osCommerce",
            "3dcart",
            "Bags",
            "Accessories",
            "Jewellery",
            "Watches",
          ].map((label) => (
            <li key={label}>
              <input
                type="checkbox"
                className=" accent-pPink size-4"
                id={label}
              />{" "}
              <label htmlFor={label} className="text-subText">
                {label}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Range */}
      <div className="flex flex-col gap-5">
        <Heading>Price Filter</Heading>

        <ul className="flex flex-col gap-2">
          {[
            "$0.00 - $150.00",
            "$150.00 - $350.00",
            "$150.00 - $504.00",
            "$450.00 +",
          ].map((label) => (
            <li className="" key={label}>
              <input
                type="checkbox"
                className=" accent-pPink size-4"
                id={label}
              />{" "}
              <label htmlFor={label} className="text-subText">
                {label}
              </label>
            </li>
          ))}
        </ul>
        <input
          type="text"
          name=""
          placeholder="$10.00 - 20000$"
          className="text-subText border p-1"
          id=""
        />
      </div>

      {/* Color Filter */}
      <div className="flex flex-col gap-5">
        <Heading>Filter By Color</Heading>
        <div className="flex justify-between gap-y-5 flex-wrap">
          {["red", "blue", "brown", "green", "purple", "sky"].map((color) => (
            <div key={color} className="flex items-center gap-1 w-[33%]">
              <div
                className={`w-4 h-4 bg-${color}-500 ${
                  color == "brown" && "bg-red-300"
                } rounded-full `}
              ></div>
              <span className="text-base text-subText">
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFilterSidebar;
