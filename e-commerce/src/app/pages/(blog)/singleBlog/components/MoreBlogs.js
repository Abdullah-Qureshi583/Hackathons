// app/page.jsx
export default function MoreBlogs() {
    return (
      <div className="container mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Image Cards */}
          <div className="relative">
            <img
              src="https://via.placeholder.com/300"
              alt="Image 1"
              className="w-full h-auto rounded-md"
            />
            <button className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 bg-white p-2 rounded-full shadow-md">
              ▶
            </button>
          </div>
          <img
            src="https://via.placeholder.com/300"
            alt="Image 2"
            className="w-full h-auto rounded-md"
          />
          <img
            src="https://via.placeholder.com/300"
            alt="Image 3"
            className="w-full h-auto rounded-md"
          />
        </div>
  
        {/* Text Section */}
        <p className="mt-6 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus
          est, nunc, montes, lacus consequat integer viverra.
        </p>
  
        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {/* Product Item */}
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Product 1"
              className="w-full h-auto rounded-md"
            />
            <h3 className="mt-4 text-gray-800">Quam sed</h3>
            <p className="text-gray-600 line-through">$32.00</p>
            <p className="text-red-500">$16.00</p>
          </div>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Product 2"
              className="w-full h-auto rounded-md"
            />
            <h3 className="mt-4 text-gray-800">Tristique sed</h3>
            <p className="text-gray-600 line-through">$32.00</p>
            <p className="text-red-500">$16.00</p>
          </div>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Product 3"
              className="w-full h-auto rounded-md"
            />
            <h3 className="mt-4 text-gray-800">A etiam</h3>
            <p className="text-gray-600 line-through">$32.00</p>
            <p className="text-red-500">$16.00</p>
          </div>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Product 4"
              className="w-full h-auto rounded-md"
            />
            <h3 className="mt-4 text-gray-800">Mi nisi</h3>
            <p className="text-gray-600 line-through">$32.00</p>
            <p className="text-red-500">$16.00</p>
          </div>
        </div>
  
        {/* Bottom Section */}
        <p className="mt-6 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus
          est, nunc, montes, lacus consequat integer viverra.
        </p>
  
        <div className="flex justify-between mt-6">
          <a href="#" className="text-blue-500">
            ← Previous Post
          </a>
          <a href="#" className="text-blue-500">
            Next Post →
          </a>
        </div>
      </div>
    );
  }
  