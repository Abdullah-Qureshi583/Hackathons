import Image from "next/image";

export default function LeftMoreItems() {
  const products = [
    {
      image: "/images/calculateShipping/first.png",
      title: "Ut diam consequat",
      color: "Brown",
      size: "XL",
      price: "$32.00",
    },
    {
      image: "/images/calculateShipping/second.png",
      title: "Ut diam consequat",
      color: "Brown",
      size: "XL",
      price: "$32.00",
    },
    {
      image: "/images/calculateShipping/third.png",
      title: "Ut diam consequat",
      color: "Brown",
      size: "XL",
      price: "$32.00",
    },
    {
      image: "/images/calculateShipping/fourth.png",
      title: "Ut diam consequat",
      color: "Brown",
      size: "XL",
      price: "$32.00",
    },
    {
      image: "/images/calculateShipping/fifth.png",
      title: "Ut diam consequat",
      color: "Brown",
      size: "XL",
      price: "$32.00",
    },
  ];

  return (
    <div className=" flex flex-col gap-4 w-full ">
      {products.map((product, index) => (
        <div key={index} className="flex flex-col gap-y-4">
          <div className="flex">
            <Image
              src={product.image}
              alt={product.title}
              width={83}
              height={87}
              className="object-cover rounded-lg mr-4"
            />
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-sm text-black font-semibold">
                  {product.title}
                </h3>
                <div className="flex justify-between w-full">
                  <div className="flex flex-col gap-2">
                    <p className="text-sm text-subText font-medium text-[12px]">
                      Color: <span className="text-sm">{product.color}</span>
                    </p>
                    <p className="text-sm text-subText font-medium text-[12px]">
                      Size: <span className="text-sm">{product.size}</span>
                    </p>
                  </div>
                  <p className="text-lg font-semibold text-darkTextBlue">
                    {product.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-subText"></div>
        </div>
      ))}
    </div>
  );
}
