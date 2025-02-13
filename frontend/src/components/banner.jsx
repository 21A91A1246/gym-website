import React from "react";
import { Link } from "react-router-dom";
import coverImage from "../assets/images/cover1.jpg";  // Ensure correct path to image

const Banner = () => {
  return (
    <section className="relative w-full">
      {/* Image */}
      <img
        src={coverImage}
        alt="Banner Background"
        className="w-full h-full object-cover"
      />
      
      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Registration now to get more deals</h2>
          <div className="text-lg mb-6">Where health, beauty, and fitness meet.</div>
          <Link to="./bookapointment"> 
          <a
            href="#"
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-all"
          >
            Appointment
          </a></Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
