import React from "react";
import BlogSidebar from "./blogs/components/BlogSidebar";

const BlogLayout = ({ children }) => {
  return (
    <div className="container  mx-auto p-4 max-w-[1180px] flex gap-8 ">
      {/* Main Content */}
      <div className="md:w-3/4 w-full  flex-grow flex flex-col gap-4 ">
        {children}
      </div>
      {/* Sidebar */}
      <div className="max-w-[280px] hidden md:block">
        <BlogSidebar />
      </div>
    </div>
  );
};

export default BlogLayout;
