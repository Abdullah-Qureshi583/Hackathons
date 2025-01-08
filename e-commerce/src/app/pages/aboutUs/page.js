import WhatShopexOffer from "@/components/project/home/WhatShopexOffer";
import AboutTop from "./components/AboutTop";
import ClientSays from "./components/ClientSays";

export default function About() {
  return (
    <div className="container mx-auto p-4 max-w-[1180px]">
      {/* top Part */}
      <AboutTop />
      {/* our Features */}
      <WhatShopexOffer title="Our Features" />
      {/* Client Says */}
      <ClientSays />
    </div>
  );
}
