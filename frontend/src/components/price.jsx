import React from "react";

const Price = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-lg text-blue-500 font-semibold">Our Plan</span>
          <h2 className="text-3xl font-bold mt-2">Choose your pricing plan</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Plan Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-bold text-center mb-4">Class drop-in</h3>
            <div className="text-center mb-6">
              <h2 className="text-4xl font-bold">$39.0</h2>
              <span className="text-gray-500">SINGLE CLASS</span>
            </div>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>✔ Free riding</li>
              <li>✔ Unlimited equipments</li>
              <li>✔ Personal trainer</li>
              <li>✔ Weight losing classes</li>
              <li>✔ Month to mouth</li>
              <li>✔ No time restriction</li>
            </ul>
            <div className="text-center">
              <a
                href="#"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Enroll now
              </a>
              <a
                href="#"
                className="text-blue-500 ml-4 text-xl hover:text-blue-700"
              >
                <i className="fa fa-picture-o"></i>
              </a>
            </div>
          </div>
          {/* Plan Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-bold text-center mb-4">12 Month unlimited</h3>
            <div className="text-center mb-6">
              <h2 className="text-4xl font-bold">$99.0</h2>
              <span className="text-gray-500">SINGLE CLASS</span>
            </div>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>✔ Free riding</li>
              <li>✔ Unlimited equipments</li>
              <li>✔ Personal trainer</li>
              <li>✔ Weight losing classes</li>
              <li>✔ Month to mouth</li>
              <li>✔ No time restriction</li>
            </ul>
            <div className="text-center">
              <a
                href="#"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Enroll now
              </a>
              <a
                href="#"
                className="text-blue-500 ml-4 text-xl hover:text-blue-700"
              >
                <i className="fa fa-picture-o"></i>
              </a>
            </div>
          </div>
          {/* Plan Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-bold text-center mb-4">6 Month unlimited</h3>
            <div className="text-center mb-6">
              <h2 className="text-4xl font-bold">$59.0</h2>
              <span className="text-gray-500">SINGLE CLASS</span>
            </div>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>✔ Free riding</li>
              <li>✔ Unlimited equipments</li>
              <li>✔ Personal trainer</li>
              <li>✔ Weight losing classes</li>
              <li>✔ Month to mouth</li>
              <li>✔ No time restriction</li>
            </ul>
            <div className="text-center">
              <a
                href="#"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Enroll now
              </a>
              <a
                href="#"
                className="text-blue-500 ml-4 text-xl hover:text-blue-700"
              >
                <i className="fa fa-picture-o"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
