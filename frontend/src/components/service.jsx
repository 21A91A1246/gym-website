import React from "react";
import aboutImage from "../assets/images/cover.jpg"; 
import service1 from "../assets/images/services-1.jpg";
import service2 from "../assets/images/services-2.jpg";
import service3 from "../assets/images/services-3.jpg";
import service4 from "../assets/images/services-4.jpg";

const Services = () => {
  const services = [
    {
      id: 1,
      image: service1,
      title: "Personal training",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore facilisis.",
    },
    {
      id: 2,
      image: service2,
      title: "Group fitness classes",
      description:
        "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus.",
    },
    {
      id: 3,
      image: service3,
      title: "Strength training",
      description:
        "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus.",
    },
    {
      id: 4,
      image: service4,
      title: "Body building",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore facilisis.",
    },
  ];

  return (
    <section className="services-section  bg-gray-100">
      <div className=" mx-auto ">
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
        <div className="text-center mb-10 py-3">
          <span className="text-lg text-blue-500 font-semibold uppercase">
            What we do?
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2">
            PUSH YOUR LIMITS FORWARD
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 lg:h-56 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="text-blue-500 font-medium hover:text-blue-600"
                >
                  Explore
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
