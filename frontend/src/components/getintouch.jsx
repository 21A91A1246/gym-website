import React from "react";

const GetInTouch = () => {
  return (
    <div className="gettouch-section bg-gray-800 py-8">
      <div className="container mx-auto px-6">
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Address */}
          <div className="gt-text space-y-4">
            <i className="fa fa-map-marker text-blue-500 text-3xl"></i>
            <p className="text-gray-700 text-lg">
              333 Middle Winchendon Rd, Rindge, <br /> NH 03461
            </p>
          </div>

          {/* Phone */}
          <div className="gt-text space-y-4">
            <i className="fa fa-mobile text-blue-500 text-3xl"></i>
            <ul className="text-gray-700 text-lg space-y-2">
              <li>125-711-811</li>
              <li>125-668-886</li>
            </ul>
          </div>

          {/* Email */}
          <div className="gt-text space-y-4">
            <i className="fa fa-envelope text-blue-500 text-3xl"></i>
            <p className="text-gray-700 text-lg">Support.gymcenter@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
