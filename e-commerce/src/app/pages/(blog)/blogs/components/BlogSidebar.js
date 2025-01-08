"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const sidebarData = {
  searchPlaceholder: "Search Post...",
  categories: [
    { name: "Hobbies", count: 14 },
    { name: "Women", count: 31 },
    { name: "Men", count: 21 },
  ],
  recentPosts: [
    {
      title: "It is a long established fact",
      date: "Aug 20, 2020",
      image: "/images/blogSidebar/recentPosts/first.png",
    },
    {
      title: "It is a long established fact",
      date: "Aug 20, 2020",
      image: "/images/blogSidebar/recentPosts/second.png",
    },
    {
      title: "It is a long established fact",
      date: "Aug 20, 2020",
      image: "/images/blogSidebar/recentPosts/third.png",
    },
  ],
  saleProducts: [
    {
      title: "Product title",
      price: "$12.00 - $15.00",
      image: "/images/blogSidebar/saleProducts/first.png",
    },
    {
      title: "Product title",
      price: "$12.00 - $15.00",
      image: "/images/blogSidebar/saleProducts/second.png",
    },
    {
      title: "Product title",
      price: "$12.00 - $15.00",
      image: "/images/blogSidebar/saleProducts/third.png",
    },
  ],
  offerProducts: [
    {
      title: "Product",
      image: "/images/blogSidebar/offerProducts/first.png",
      range: "$12.00 - $15.00",
    },
    {
      title: "Product",
      image: "/images/blogSidebar/offerProducts/second.png",
      range: "$12.00 - $15.00",
    },
    {
      title: "Product",
      image: "/images/blogSidebar/offerProducts/third.png",
      range: "$12.00 - $15.00",
    },
    {
      title: "Product",
      image: "/images/blogSidebar/offerProducts/fourth.png",
      range: "$12.00 - $15.00",
    },
  ],
  socialLinks: [
    { bg: "[#5625DF]", icon: FaFacebookF },
    { bg: "pPink", icon: IoLogoInstagram },
    { bg: "bgLightGreen", icon: FaTwitter },
  ],
  tags: ["General", "Attire", "Inspiration", "Business", "Nulla"],
};
const Heading = ({ children }) => {
  return (
    <h3 className="text-darkTextBlue text-[22px] font-semibold ">{children}</h3>
  );
};

export default function BlogSidebar() {
  const [activeCategory, setActiveCategory] = useState("Hobbies"); // Default active category

  return (
    <aside className="w-full  flex flex-col gap-12">
      {/* Search */}
      <div className="flex flex-col gap-4">
        <Heading>Search</Heading>
        <input
          type="text"
          placeholder={sidebarData.searchPlaceholder}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Categories */}
      <div className="flex flex-col gap-6">
        <Heading>Categories</Heading>
        <ul className="flex flex-col gap-3">
          {sidebarData.categories.map((category, idx) => (
            <li key={idx}>
              <div
                onClick={() => setActiveCategory(category.name)}
                className={`flex justify-between py-1 text-sm ${
                  activeCategory === category.name
                    ? "text-white bg-pPink rounded-md px-2"
                    : "text-gray-600 hover:text-pPink"
                }`}
              >
                {category.name} <span>({category.count})</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Post */}
      <div className="flex flex-col gap-6">
        <Heading>Recent Post</Heading>
        <ul className="flex flex-col gap-3">
          {sidebarData.recentPosts.map((post, idx) => (
            <Link
              href="/pages/singleBlog"
              key={idx}
              className="flex items-center gap-2"
            >
              <Image
                width={70}
                height={51}
                src={post.image}
                alt="Post Thumbnail"
                className=" object-cover rounded-md"
              />
              <div>
                <p className="text-sm  hover:text-pink-500">{post.title}</p>
                <p className="text-xs text-subText">{post.date}</p>
              </div>
            </Link>
          ))}
        </ul>
      </div>

      {/* Sale Product */}
      <div className="flex flex-col gap-6">
        <Heading>Sale Product</Heading>
        <ul className="flex flex-col gap-y-3">
          {sidebarData.saleProducts.map((product, idx) => (
            <Link
              href="/pages/productDetail"
              key={idx}
              className="flex items-center gap-3"
            >
              <Image
                width={70}
                height={57}
                src={product.image}
                alt="Sale Thumbnail"
                className=" object-cover rounded-md"
              />
              <div>
                <p className="text-sm  hover:text-pink-500">{product.title}</p>
                <p className="text-xs text-subText">{product.price}</p>
              </div>
            </Link>
          ))}
        </ul>
      </div>

      {/* Offer Product */}
      <div className="flex flex-col gap-6">
        <Heading>Offer product</Heading>
        <div className="grid grid-cols-2 gap-2">
          {sidebarData.offerProducts.map((product, idx) => (
            <Link key={idx} href="/pages/productDetail" className="block ">
              <Image
                width={126}
                height={80}
                src={product.image}
                alt="Offer Thumbnail"
                className="w-full  object-cover rounded-md"
              />
              <p className="text-sm text-center  mt-1">{product.title}</p>
              <p className="text-xs text-center text-subText mt-1">
                {product.range}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Follow */}
      <div className="flex flex-col gap-6">
        <Heading>Follow</Heading>
        <div className="flex gap-3">
          {sidebarData.socialLinks.map((Icon, idx) => (
            <Link
              key={idx}
              href="#"
              className={`size-[25px] flex items-center justify-center bg-${Icon.bg} rounded-full `}
            >
              <Icon.icon fill="white" />
            </Link>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-col gap-6">
        <Heading>Tags</Heading>
        <div className="flex flex-wrap gap-3">
          {sidebarData.tags.map((tag, idx) => (
            <Link
              key={idx}
              href="#"
              className="text-sm px-2 py-1 border border-gray-300 rounded-md hover:bg-pink-500 hover:text-white"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
