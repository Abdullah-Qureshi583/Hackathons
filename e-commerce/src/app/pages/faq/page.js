import PinkButton from "@/components/project/PinkButton";
import SecondaryHeading from "@/components/project/SecondaryHeading";
import React from "react";
const generalInformation = [
  {
    title: "Eu dictumst cum at sed euismood condimentum?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
  },
  {
    title: "Magna bibendum est fermentum eros.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
  },
  {
    title: "Odio muskana hak eris conseekin sceleton?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
  },
  {
    title: "Elit id blandit sabara boi velit gua mara?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
  },
];
const FAQs = () => {
  return (
    <div className="container mx-auto  max-w-[1180px] p-4 grid grid-cols-1 gap-12 lg:grid-cols-2 justify-between ">
      {/* Left Section */}
      <div className="flex flex-col gap-16">
        <SecondaryHeading>General Information</SecondaryHeading>
        {generalInformation.map((point, index) => (
          <div key={index} className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-darkTextBlue">
              {point.title}
            </h3>
            <p className="text-subText ">{point.description}</p>
          </div>
        ))}
      </div>

      {/* Right Section */}
      <div className=" max-w-xl mx-auto w-full  bg-dblLightPurple shadow-md rounded-md py-16 px-4 md:px-12">
        <h2 className="text-2xl font-bold text-darkTextBlue mb-28">
          Ask a Question
        </h2>
        <form>
          <div className="mb-10">
            <input
              type="text"
              placeholder="Your Name*"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pPink"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Subject*"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pPink"
            />
          </div>
          <div className="mb-6">
            <textarea
              placeholder="Type Your Message*"
              rows="5"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pPink"
            ></textarea>
          </div>
          <PinkButton>Send Mail</PinkButton>
        </form>
      </div>
    </div>
  );
};

export default FAQs;
