import BlogComponent from "@/components/project/BlogComponent";
import React from "react";
import MoreBlogs from "./components/MoreBlogs";

const SingleBlog = () => {
  return (
    <div className="flex flex-col gap-4">
      <BlogComponent
        singleBlog
        blog={{
          author: "Surf Auxion",
          date: "Aug 09 2020",
          imageUrl: "/images/blogs/first.png",
          imageWidth: 870,
          imageHeight: 453,
          title: "Mauris at orci non vulputate diam tincidunt nec.",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at. 
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at`,
          link: "/pages/singleBlog",
        }}
      />

      {/* <MoreBlogs /> */}
    </div>
  );
};

export default SingleBlog;
