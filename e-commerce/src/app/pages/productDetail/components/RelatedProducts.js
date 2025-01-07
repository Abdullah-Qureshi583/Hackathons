import Image from "next/image";

export default function RelatedProducts() {
  const products = [
    {
      id: 1,
      title: "Mens Fashion Wear",
      price: "$43.00",
      image: "/images/productD/related/one.png", // Replace with your image URL
      rating: 5,
    },
    {
      id: 2,
      title: "Women's Fashion",
      price: "$67.00",
      image: "/images/productD/related/two.png", // Replace with your image URL
      rating: 5,
    },
    {
      id: 3,
      title: "Wok Dummy Fashion",
      price: "$62.00",
      image: "/images/productD/related/three.png", // Replace with your image URL
      rating: 4.5,
    },
    {
      id: 4,
      title: "Top Wall Digital Clock",
      price: "$51.00",
      image: "/images/productD/related/four.png", // Replace with your image URL
      rating: 4,
    },
  ];

  // product.rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex items-center">
        {Array(fullStars)
          .fill(0)
          .map((_, index) => (
            <span key={index} className="text-yellow-400">
              ★
            </span>
          ))}
        {halfStar && <span className="text-yellow-400">☆</span>}
        {Array(emptyStars)
          .fill(0)
          .map((_, index) => (
            <span key={index} className="text-gray-300">
              ★
            </span>
          ))}
      </div>
    );
  };

  return (
    <div className="">
      <h5 className="text-4xl font-semibold text-darkTextBlue mb-12">
        Related Products
      </h5>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className=" rounded-lg overflow-hidden">
            <Image
              width={270}
              height={340}
              src={product.image}
              alt={product.title}
              className="w-full hover:scale-95 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium ">{product.title}</h3>
                <div className="mt-2">{renderStars(product.rating)}</div>
              </div>
              <p className=" font-semibold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
