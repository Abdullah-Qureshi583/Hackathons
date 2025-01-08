// pages/index.jsx
import BlogComponent from "../BlogComponent";

export default function LatestBlogs() {
  const posts = [
    {
      author: "SaberAli",
      date: "21 August,2020",
      imageUrl: "/images/home/latestBlogs/image1.png", // Replace with actual image path
      imageWidth: 370,
      imageHeight: 255,
      title: "Top essential Trends in 2021",
      description:
        "More off this less hello samlande lied much over tightly circa horse taped mightly",
      link: "/pages/singleBlog",
    },
    {
      author: "Surfauxion",
      date: "21 August,2020",
      imageUrl: "/images/home/latestBlogs/image2.png", // Replace with actual image path
      imageWidth: 370,
      imageHeight: 255,
      title: "Top essential Trends in 2021",
      description:
        "More off this less hello samlande lied much over tightly circa horse taped mightly",
      link: "/pages/singleBlog",
    },
    {
      author: "SaberAli",
      date: "21 August,2020",
      imageUrl: "/images/home/latestBlogs/image3.png", // Replace with actual image path
      imageWidth: 370,
      imageHeight: 255,
      title: "Top essential Trends in 2021",
      description:
        "More off this less hello samlande lied much over tightly circa horse taped mightly",
      link: "/pages/singleBlog",
    },
  ];

  return (
    <div className="mt-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <BlogComponent key={index} blog={post} />
        ))}
      </div>
    </div>
  );
}
