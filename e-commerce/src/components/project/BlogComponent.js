import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCalendarAlt, FaPenNib } from "react-icons/fa";

const BlogComponent = ({ blog, singleBlog }) => {
  return (
    <Link
      href={blog.link}
      className="bg-white  shadow-md group overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <Image
        src={blog.imageUrl}
        alt={blog.title}
        width={blog.imageWidth}
        height={blog.imageHeight}
        className="w-full object-cover"
      />
      <div className="p-4 flex flex-col gap-8">
        <div className="text-sm text-gray-500 flex items-center space-x-8">
          <div className="flex gap-1 items-center">
            <FaPenNib className="size-3 text-pPink " />
            <span className="text-sm text-darkTextBlue ">{blog.author}</span>
          </div>
          <div className="flex gap-1 items-center">
            <FaCalendarAlt className="size-3 text-[#FFA454] " />
            <span className="text-sm text-darkTextBlue ">{blog.date}</span>
          </div>
        </div>
        <h2 className="text-lg font-bold text-darkTextBlue group-hover:text-pPink">
          {blog.title}
        </h2>
        <p className="text-subText  text-base">{blog.description}</p>
        {!singleBlog && (
          <p className="block  text-darkTextBlue group-hover:text-pPink group-hover:underline">
            Read More
          </p>
        )}
      </div>
    </Link>
  );
};

export default BlogComponent;
