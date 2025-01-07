import React from "react";

const ChooseUs = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-8">
          <span className="text-lg text-blue-500 font-semibold uppercase tracking-wide">
            Why choose us?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            PUSH YOUR LIMITS FORWARD
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Modern Equipment */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="text-blue-500 text-5xl mb-4">
              <i className="fas fa-bicycle"></i>
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">
              Modern Equipment
            </h4>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut dolore facilisis.
            </p>
          </div>

          {/* Healthy Nutrition Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="text-blue-500 text-5xl mb-4">
              <i className="fas fa-apple-alt"></i>
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">
              Healthy Nutrition Plan
            </h4>
            <p className="text-gray-600 text-sm">
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis.
            </p>
          </div>

          {/* Professional Training Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="text-blue-500 text-5xl mb-4">
              <i className="fas fa-dumbbell"></i>
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">
              Professional Training Plan
            </h4>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut dolore facilisis.
            </p>
          </div>

          {/* Unique to Your Needs */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="text-blue-500 text-5xl mb-4">
              <i className="fas fa-heartbeat"></i>
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">
              Unique to Your Needs
            </h4>
            <p className="text-gray-600 text-sm">
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
