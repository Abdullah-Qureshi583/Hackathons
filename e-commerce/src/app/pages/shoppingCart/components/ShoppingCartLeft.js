import PinkButton from "@/components/project/PinkButton";
import Image from "next/image";
import React from "react";

const ShoppingCartLeft = ({ cartItems }) => {
  return (
    <div className="flex-grow">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">Product</th>
              <th className="p-4">Price</th>
              <th className="p-4">Quantity</th>
              <th className="p-4">Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-4 flex items-center space-x-4">
                  <Image
                    width={83}
                    height={87}
                    src={item.image}
                    alt={item.title}
                    className=" rounded object-cover"
                  />
                  <div className=" mr-12">
                    <h3 className="text-black text-nowrap">{item.title}</h3>
                    <p className="text-subText text-nowrap text-sm">
                      Color: {item.color} | Size: {item.size}
                    </p>
                  </div>
                </td>
                <td className="p-4">{item.price}</td>
                <td className="p-4">
                  <input
                    type="number"
                    defaultValue={1}
                    className="border border-gray-300 rounded w-16 text-center"
                  />
                </td>
                <td className="p-4">{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-4">
        <PinkButton>Update Cart</PinkButton>

        <PinkButton>Clear Cart</PinkButton>
      </div>
    </div>
  );
};

export default ShoppingCartLeft;
