import PinkButton from "@/components/project/PinkButton";
import SecondaryHeading from "@/components/project/SecondaryHeading";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineWatchLater } from "react-icons/md";

export default function OrderCompleted() {
  return (
    <div className="container mx-auto p-4  max-w-[1180px]  flex flex-col items-center justify-center border-l border-b border-dotted   py-20 relative">
      <MdOutlineWatchLater className="size-16 absolute -top-2 left-0 xl:-left-10 bg-[#F6F7FA] rounded-full" />
      {/* Main Content */}
      <div className="items-center flex flex-col gap-7">
        <Check className="bg-[#F6F7FA] size-20 p-1 rounded-full text-pPink" />
        <SecondaryHeading>Your Order Is Completed!</SecondaryHeading>
        <p className=" text-subText max-w-[625px]  text-center">
          Thank you for your order! Your order is being processed and will be
          completed within 3-6 hours. You will receive an email confirmation
          when your order is completed.
        </p>
        <Link href="/pages/shopList">
          <PinkButton>Continue Shopping</PinkButton>
        </Link>
      </div>
      <Image
        className="absolute -bottom-6 right-0 xl:-right-10 "
        src="/images/orderCompleted/checklist.png"
        width={70}
        height={70}
        alt="CheckList Icon"
      />
    </div>
  );
}
