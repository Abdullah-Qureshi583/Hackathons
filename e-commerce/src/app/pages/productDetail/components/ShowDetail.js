"use client";
import { useState } from "react";

export default function ShowDetail() {
  const [activeTab, setActiveTab] = useState("Description");

  const tabs = ["Description", "Additional Info", "Reviews", "Video"];

  return (
    <div className="bg-lightPurple ">
      <div className="flex flex-col gap-16 container mx-auto p-4 max-w-[1180px] py-28">
        {/* Tabs Navigation */}
        <div className="flex gap-x-8 gap-y-4 border-b flex-wrap border-gray-200 pb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`text-2xl font-medium ${
                activeTab === tab
                  ? " border-b-2 border-darkTextBlue"
                  : "text-darkTextBlue"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tabs Content */}
        <div className="mt-6">
          {activeTab === "Description" && (
            <div className="flex flex-col gap-4">
              <h5 className="text-xl font-semibold ">Varius tempor.</h5>
              <p className="text-subText">
                Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
                ornare faucibus vel sed et eleifend habitasse amet. Montes,
                mauris varius ac est bibendum. Scelerisque a, risus ac ante.
                Velit consectetur neque, elit, aliquet. Non varius proin sed
                urna, egestas consequat laoreet diam tincidunt. Magna eget
                faucibus cras justo, tortor sed donec tempus. Imperdiet
                consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in
                fringilla vulputate nunc nec. Dui, massa viverra.
              </p>
              <h5 className=" text-xl font-medium">More details</h5>
              <ul className=" text-subText flex flex-col gap-y-3">
                <li className="flex items-center gap-2 ">
                  ➜ Aliquam dis vulputate vulputate integer sagittis.
                </li>
                <li className="flex items-center gap-2 ">
                  ➜ Faucibus dis diam arcu, nulla lobortis justo netus dis.
                </li>
                <li className="flex items-center gap-2 ">
                  ➜ Eu in fringilla vulputate nunc nec.
                </li>
                <li className="flex items-center gap-2 ">
                  ➜ Dui, massa viverra.
                </li>
              </ul>
            </div>
          )}
          {activeTab === "Additional Info" && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Additional Info
              </h2>
              <p className="mt-2 text-gray-600">
                Here you can add additional information about the product.
              </p>
            </div>
          )}
          {activeTab === "Reviews" && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Reviews</h2>
              <p className="mt-2 text-gray-600">
                No reviews available at the moment.
              </p>
            </div>
          )}
          {activeTab === "Video" && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Video</h2>
              <p className="mt-2 text-gray-600">
                Watch the product video for more information.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
