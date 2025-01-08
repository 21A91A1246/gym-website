import React from "react";
import aboutImage from "../assets/images/cover.jpg"; 

const Contact = () => {
  return (
    <section className="contact-section py-12 bg-gray-100">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-10">
          {/* Contact Details */}
          <div>
            <div className="text-center lg:text-left mb-8">
              <span className="text-lg text-blue-500 font-semibold uppercase">
                Contact Us
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2">
                GET IN TOUCH
              </h2>
            </div>
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <i className="fa fa-map-marker text-blue-500 text-2xl"></i>
                <p className="text-gray-700">
                  333 Middle Winchendon Rd, Rindge,
                  <br /> NH 03461
                </p>
              </div>
              {/* Phone Numbers */}
              <div className="flex items-start space-x-4">
                <i className="fa fa-mobile text-blue-500 text-2xl"></i>
                <ul className="text-gray-700">
                  <li>125-711-811</li>
                  <li>125-668-886</li>
                </ul>
              </div>
              {/* Email */}
              <div className="flex items-start space-x-4">
                <i className="fa fa-envelope text-blue-500 text-2xl"></i>
                <p className="text-gray-700">Support.gymcenter@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Website"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <textarea
                  placeholder="Comment"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  rows="5"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12087.069761554938!2d-74.2175599360452!3d40.767139456514954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c254b5958982c3%3A0xb6ab3931055a2612!2sEast%20Orange%2C%20NJ%2C%20USA!5e0!3m2!1sen!2sbd!4v1581710470843!5m2!1sen!2sbd"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="w-full rounded-lg"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
