import React from "react";

const ProductFilterSidebar = () => {
  return (
    <div className="w-80 bg-white p-6 shadow-md rounded-lg">
      {/* Product Brand */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-purple-700 mb-2">
          Product Brand
        </h2>
        <ul className="space-y-1">
          <li>
            <input type="checkbox" id="brand1" />{" "}
            <label htmlFor="brand1">Golden Source</label>
          </li>
          <li>
            <input type="checkbox" id="brand2" />{" "}
            <label htmlFor="brand2">Cocoon Studio</label>
          </li>
          <li>
            <input type="checkbox" id="brand3" />{" "}
            <label htmlFor="brand3">Single Digital Style</label>
          </li>
          <li>
            <input type="checkbox" id="brand4" />{" "}
            <label htmlFor="brand4">Simple Fast Supply</label>
          </li>
          <li>
            <input type="checkbox" id="brand5" />{" "}
            <label htmlFor="brand5">Grand Union Shop</label>
          </li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-purple-700 mb-2">
          Contact Info
        </h2>
        <ul className="space-y-1">
          <li>112 N Main Street</li>
          <li>Los Angeles</li>
          <li>+1 987 654 3210</li>
        </ul>
      </div>

      {/* Rating */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-purple-700 mb-2">
          Rating Level
        </h2>
        <ul className="space-y-1">
          {[5, 4, 3, 2, 1].map((star) => (
            <li key={star} className="flex items-center">
              {"★".repeat(star)}
            </li>
          ))}
        </ul>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-purple-700 mb-2">
          Categories
        </h2>
        <ul className="space-y-1">
          <li>
            <input type="checkbox" id="category1" />{" "}
            <label htmlFor="category1">Fashion</label>
          </li>
          <li>
            <input type="checkbox" id="category2" />{" "}
            <label htmlFor="category2">Electronics</label>
          </li>
          <li>
            <input type="checkbox" id="category3" />{" "}
            <label htmlFor="category3">Home & Kitchen</label>
          </li>
          <li>
            <input type="checkbox" id="category4" />{" "}
            <label htmlFor="category4">Books</label>
          </li>
          <li>
            <input type="checkbox" id="category5" />{" "}
            <label htmlFor="category5">Beauty</label>
          </li>
        </ul>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-purple-700 mb-2">
          Price Range
        </h2>
        <ul className="space-y-1">
          <li>
            <input type="radio" name="price" id="price1" />{" "}
            <label htmlFor="price1">$0 - $50</label>
          </li>
          <li>
            <input type="radio" name="price" id="price2" />{" "}
            <label htmlFor="price2">$50 - $100</label>
          </li>
          <li>
            <input type="radio" name="price" id="price3" />{" "}
            <label htmlFor="price3">$100 - $200</label>
          </li>
          <li>
            <input type="radio" name="price" id="price4" />{" "}
            <label htmlFor="price4">$200+</label>
          </li>
        </ul>
      </div>

      {/* Color Filter */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-purple-700 mb-2">
          Filter By Color
        </h2>
        <div className="flex space-x-2">
          <div className="w-6 h-6 bg-red-500 rounded-full"></div>
          <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
          <div className="w-6 h-6 bg-green-500 rounded-full"></div>
          <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
          <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilterSidebar;
