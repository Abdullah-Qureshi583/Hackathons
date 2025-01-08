import BlogComponent from "@/components/project/BlogComponent";

const posts = [
  {
    author: "Surf Auxion",
    date: "Aug 09 2020",
    imageUrl: "/images/blogs/first.png",
    imageWidth: 870,
    imageHeight: 453,
    title: "Mauris at orci non vulputate diam tincidunt nec.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    link: "/pages/singleBlog",
  },
  {
    author: "Surf Auxion",
    date: "Aug 09 2020",
    imageUrl: "/images/blogs/second.png",
    imageWidth: 870,
    imageHeight: 453,
    title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    link: "/pages/singleBlog",
  },
  {
    author: "Surf Auxion",
    date: "Aug 09 2020",
    imageUrl: "/images/blogs/third.png",
    imageWidth: 870,
    imageHeight: 453,
    title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    link: "/pages/singleBlog",
  },
];

export default function Blogs() {
  return (
    <>
      {posts.map((post, index) => (
        <BlogComponent key={index} blog={post} />
      ))}
    </>
  );
}
