// pages/index.jsx
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaPenNib } from "react-icons/fa";

export default function LatestBlogs() {
  const posts = [
    {
      id: 1,
      author: "SaberAli",
      date: "21 August,2020",
      title: "Top essential Trends in 2021",
      description:
        "More off this less hello samlande lied much over tightly circa horse taped mightly",
      image: "/images/home/latestBlogs/image1.png", // Replace with actual image path
    },
    {
      id: 2,
      author: "Surfauxion",
      date: "21 August,2020",
      title: "Top essential Trends in 2021",
      description:
        "More off this less hello samlande lied much over tightly circa horse taped mightly",
      image: "/images/home/latestBlogs/image2.png", // Replace with actual image path
    },
    {
      id: 3,
      author: "SaberAli",
      date: "21 August,2020",
      title: "Top essential Trends in 2021",
      description:
        "More off this less hello samlande lied much over tightly circa horse taped mightly",
      image: "/images/home/latestBlogs/image3.png", // Replace with actual image path
    },
  ];

  return (
    <div className="mt-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white  shadow-md group overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={370}
              height={255}
              className="w-full object-cover"
            />
            <div className="p-4 flex flex-col gap-8">
              <div className="text-sm text-gray-500 flex items-center space-x-8">
                <div className="flex gap-1 items-center">
                  <FaPenNib className="size-3 text-pPink " />
                  <span className="text-sm text-darkTextBlue ">
                    {post.author}
                  </span>
                </div>
                <div className="flex gap-1 items-center">
                  <FaCalendarAlt className="size-3 text-[#FFA454] " />
                  <span className="text-sm text-darkTextBlue ">
                    {post.date}
                  </span>
                </div>
              </div>
              <h2 className="text-lg font-bold text-darkTextBlue group-hover:text-pPink">
                {post.title}
              </h2>
              <p className="text-subText  text-base">{post.description}</p>
              <Link
                href="#"
                className="block  text-darkTextBlue group-hover:text-pPink group-hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
