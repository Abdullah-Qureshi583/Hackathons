import React from "react";

export default function CalcShipping() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center py-10">
      <div className="max-w-6xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-xl font-semibold text-gray-800 mb-6">Hekto Demo</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Section */}
          <div className="col-span-2">
            <div className="mb-6">
              <h2 className="text-lg font-medium text-gray-700 mb-4">
                Contact Information
              </h2>
              <input
                type="email"
                placeholder="Email or mobile phone number"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
              <label className="flex items-center mt-3">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-gray-600">
                  Keep me up to date on news and exclusive offers
                </span>
              </label>
            </div>

            <div>
              <h2 className="text-lg font-medium text-gray-700 mb-4">
                Shipping address
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name (optional)"
                  className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <input
                type="text"
                placeholder="Address"
                className="w-full mt-4 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="Apartment, suite, etc. (optional)"
                className="w-full mt-4 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <input
                  type="text"
                  placeholder="City"
                  className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="text"
                  placeholder="Bangladesh"
                  className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full mt-4 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button className="mt-6 bg-indigo-500 text-white py-3 px-6 rounded-lg w-full hover:bg-indigo-600">
              Continue Shipping
            </button>
          </div>

          {/* Right Section */}
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h2 className="text-lg font-medium text-gray-700 mb-4">
              Your Order
            </h2>
            <ul>
              <li className="flex justify-between items-center mb-4">
                <span>Product 1</span>
                <span>$20.00</span>
              </li>
              <li className="flex justify-between items-center mb-4">
                <span>Product 2</span>
                <span>$15.00</span>
              </li>
              <li className="flex justify-between items-center mb-4">
                <span>Product 3</span>
                <span>$25.00</span>
              </li>
            </ul>
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">Subtotal</span>
                <span>$60.00</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="font-medium text-gray-700">Total</span>
                <span className="font-semibold text-gray-800">$65.00</span>
              </div>
            </div>
            <button className="mt-6 bg-green-500 text-white py-3 px-6 rounded-lg w-full hover:bg-green-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
