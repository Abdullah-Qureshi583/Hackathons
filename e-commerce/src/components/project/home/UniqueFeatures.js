import { Button } from "@/components/ui/button";
import Image from "next/image";
import PrimaryHeading from "../PrimaryHeading";
import PinkButton from "../PinkButton";
import SecondaryHeading from "../SecondaryHeading";
const points = [
  {
    color: "pPink",
    text: "All frames constructed with hardwood solids and laminates",
  },
  {
    color: "chairBgBlue",
    text: "Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails",
  },
  {
    color: "lineGreen",
    text: "Arms, backs and seats are structurally reinforced",
  },
];
export default function UniqueFeatures() {
  return (
    <div className="bg-lightPurple py-6 mt-[150px] tracking-widest ">
      <div className="grid md:grid-cols-2   container mx-auto max-w-[1180px]">
        <div className="py-9 order-2 md:order-1 px-[.8rem]">
          <Image
            src="/images/home/uniqueFeatures/sofa.png"
            alt=""
            width={700}
            height={700}
          />
        </div>

        <div className=" relative md:order-2 left- px-4 md:px-0 flex items-center">
          <div className="flex flex-col gap-6">
            <SecondaryHeading>
              Unique Features Of leatest & Trending Poducts
            </SecondaryHeading>
            <div className="flex gap-3 flex-col">
              {points.map((point, index) => (
                <div key={index} className="flex gap-x-4 items-center">
                  <div
                    className={`size-3 aspect-square rounded-full bg-${point.color}`}
                  ></div>
                  <p className="text-subText font-[500]">{point.text}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-2 items-center">
              <PinkButton>Add to Cart </PinkButton>
              <div className="flex flex-col">
                <p>B&B Italian Sofa </p>
                <p>$32.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
