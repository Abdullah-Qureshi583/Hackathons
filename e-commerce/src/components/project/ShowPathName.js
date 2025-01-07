"use client";
import { usePathname } from "next/navigation";

function splitAndCapitalizeCamelCase(input) {
  // Insert spaces before capital letters and capitalize the first letter
  const spacedString = input.replace(/([A-Z])/g, " $1").trim();
  return spacedString.charAt(0).toUpperCase() + spacedString.slice(1);
}

export default function ShowPathName() {
  const pathName = usePathname();
  return (
    <div className="bg-lightPurple  mb-32 ">
      <div className="flex container mx-auto  max-w-[1180px] px-4 min-h-[290px] ">
        <div className="flex flex-col justify-center ">
          <h2 className="text-2xl md:text-4xl font-bold mt-3">
            {splitAndCapitalizeCamelCase(pathName.split("/").pop())}
            {/* Shop Grid Default */}
          </h2>
          <p className="text-black mt-1 font-medium ">
            <span>{pathName.startsWith("/") && "Home"} </span>
            <span>
              . {splitAndCapitalizeCamelCase(pathName?.split("/")[1])}
            </span>
            <span className="text-pPink">
              {" "}
              . {splitAndCapitalizeCamelCase(pathName.split("/")[2])}
            </span>
          </p>
          <div className="mt-7">
            {/* <PinkButton   Button>Shop Now</PinkButton> */}
          </div>
        </div>
      </div>
    </div>
  );
}
