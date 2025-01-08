import React from "react";
import aboutImage from "../assets/images/cover.jpg"; 
import ChooseUs from "./chooseus"; 

const About = () => {
  return (
    <section className="aboutus-section">
      <div className="  mx-auto">
        <div
              className="relative h-screen bg-cover bg-center"
              style={{
                backgroundImage: `url(${aboutImage})`,
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
              {/* Content */}
              <div className="relative h-full flex items-center justify-center text-center">
                <div className="text-white px-4 max-w-2xl">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                     About Us
                  </h1>
                  <p className="text-lg md:text-xl mb-6">
                    Discover the best classes, services, and experiences tailored just
                    for you.
                  </p>
                 
                </div>
              </div>
            </div>
        <ChooseUs/>
        <div className="flex flex-wrap">
          {/* Left Section - Video/Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative pt-10">
              <img
                src={aboutImage}
                alt="About Us"
                className="w-full h-full object-cover"
              />
              <a
                href="https://www.youtube.com/watch?v=EzKkl64rRbM"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full hover:scale-110 transition-transform duration-300"
              >
                <i className="fa fa-caret-right text-4xl"></i>
              </a>
            </div>
          </div>

          {/* Right Section - Text */}
          <div className="w-full lg:w-1/2 bg-gray-100 p-8">
            <div className="about-text">
              {/* Section Title */}
              <div className="section-title mb-6">
                <span className="text-xl text-blue-600">About Us</span>
                <h2 className="text-3xl font-bold">What we have done</h2>
              </div>

              {/* Description */}
              <div className="at-desc mb-6">
                <p className="text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                  ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.  
                </p>
              </div>

              {/* Progress Bars */}
              <div className="space-y-4">
                <div>
                  <p className="text-lg font-medium mb-2">Body Building</p>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                      className="bg-blue-500 h-4 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <p className="text-lg font-medium mb-2">Training</p>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                      className="bg-blue-500 h-4 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <p className="text-lg font-medium mb-2">Fitness</p>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                      className="bg-blue-500 h-4 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
