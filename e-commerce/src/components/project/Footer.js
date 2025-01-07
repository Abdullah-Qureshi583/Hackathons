import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Button } from "../ui/button";
import Link from "next/link";
const linkClass =
  "hover:scale-x-105 hover:text-pPink text-center md:text-start duration-300";
const Column = ({ title, links }) => {
  return (
    <div className="flex flex-col  items-center md:items-start gap-6 md:gap-10">
      <h4 className="text-[22px]  text-center md:text-start font-bold text-black">
        {title}
      </h4>
      <ul className=" flex flex-col gap-3 md:gap-5 ">
        {links.map((link, index) => (
          <Link className={linkClass} href="#" key={index}>
            {link}
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default function Footer() {
  return (
    <footer className="bg-lightPurple mt-[115px]">
      <div className="container py-24  mx-auto text-subText  px-4  flex  flex-col flex-wrap md:flex-row justify-center  md:justify-between gap-8">
        {/* Column 1 */}
        <div className="flex flex-col items-center md:items-start ">
          <h3 className="text-4xl font-bold  text-center md:text-start text-black">
            Hekto
          </h3>
          <div className="mt-8 flex  overflow-hidden rounded h-10 p-0.5 bg-white items-center justify-between max-w-[280px] md:max-w-[377px] ">
            <input
              type="text"
              className="p-2 focus:outline-none w-[80%]  text-subText placeholder:text-subText "
              placeholder="Enter Email Address"
            />
            <Button className=" text-textOffwhite w-[135px] rounded-sm h-full  bg-pPink hover:bg-pPink/90  ">
              Search
            </Button>
          </div>
          <Link href="/" className={` ${linkClass} mt-6`}>
            Contact Info
          </Link>
          <Link href="/" className={` ${linkClass} mt-2.5`}>
            17 Princess Road, London, Greater London NW1 8JR, UK
          </Link>
        </div>

        {/* Column 2 */}
        <Column
          title="Categories"
          links={[
            "Laptops & Computers",
            "Cameras & Photography",
            "Smart Phones & Tablets",
            "Video Games & Consoles",
            "Waterproof Headphones",
          ]}
        />

        {/* Column 3 */}
        <Column
          title="Customer Care"
          links={[
            "My Account",
            "Discount",
            "Returns",
            "Orders History",
            "Order Tracking",
          ]}
        />

        {/* Column 4 */}
        <Column
          title="Pages"
          links={[
            "Blogs",
            "Browse the Shop",
            "Category",
            "Pre-Built Pages",
            "Visual Composer Elements",
            "WooComposer Pages",
          ]}
        />
        {/* </div> */}
      </div>
      {/* footer 2 */}
      <div className="bg-[#E7E4F8]  ">
        <div className="container flex justify-between items-center px-2 md:px-16 py-5  mx-auto">
          <p className="text-subText ">&copy;Webecy - All Rights Reserved</p>
          <div className="mt-2 flex justify-center space-x-4">
            {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, index) => (
              <Link
                key={index}
                target="_blank"
                href="#"
                className="bg-darkTextBlue  hover:bg-darkTextBlue/90 hover:scale-105 divide-red-300 rounded-full overflow-hidden p-1"
              >
                <Icon className="text-white size-3" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
