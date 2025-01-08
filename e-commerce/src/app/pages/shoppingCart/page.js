import Right from "./components/Right";
import ShoppingCartLeft from "./components/ShoppingCartLeft";

export default function ShoppingCart() {
  const cartItems = [
    {
      id: 1,
      title: "U diam consequat",
      color: "Brown",
      size: "XL",
      price: "$32.00",
      total: "£219.00",
      image: "/images/shoppingCart/a.png", // Replace with your image URL
    },
    {
      id: 2,
      title: "Vel faucibus posuere",
      color: "Brown",
      size: "XL",
      price: "$32.00",
      total: "£219.00",
      image: "/images/shoppingCart/b.png", // Replace with your image URL
    },
    {
      id: 3,
      title: "Ac vitae vestibulum",
      color: "Brown",
      size: "XL",
      price: "$32.00",
      total: "£219.00",
      image: "/images/shoppingCart/c.png", // Replace with your image URL
    },
    {
      id: 4,
      title: "Elit massa diam",
      color: "Brown",
      size: "XL",
      price: "$32.00",
      total: "£219.00",
      image: "/images/shoppingCart/d.png", // Replace with your image URL
    },
    {
      id: 5,
      title: "Proin pharetra elementum",
      color: "Brown",
      size: "XL",
      price: "$32.00",
      total: "£219.00",
      image: "/images/shoppingCart/e.png", // Replace with your image URL
    },
  ];

  return (
    <div className="container mx-auto p-4 max-w-[1180px] flex flex-col md:flex-row gap-8 ">
      {/* Cart Items */}
      <ShoppingCartLeft cartItems={cartItems} />

      {/* Cart Totals */}
      <div className="flex-shrink-0">
        <Right />
      </div>
    </div>
  );
}
