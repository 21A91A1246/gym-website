import React from "react";
import gymlogo from "../assets/images/gymlogo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <a href="#">
              <img src={gymlogo} alt="Logo" className="w-36 mb-1" />
            </a>
            <p className="text-sm leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore dolore magna aliqua. Enim ad
              minim veniam.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500">
                <i className="fa fa-youtube-play"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-400">
                <i className="fa fa-envelope-o"></i>
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Useful Links</h4>
            <ul className="space-y-2 text-sm">
              {["About", "Blog", "Classes", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              {["Login", "My Account", "Subscribe", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tips & Guides */}
          <div>
            <h4 className="text-lg font-bold mb-4">Tips & Guides</h4>
            <div className="space-y-6">
              {[
                {
                  title:
                    "Physical fitness may help prevent depression, anxiety",
                  meta: "3 min read • 20 Comments",
                },
                {
                  title:
                    "Fitness: The best exercise to lose belly fat and tone up...",
                  meta: "3 min read • 20 Comments",
                },
              ].map((guide, idx) => (
                <div key={idx}>
                  <h6 className="text-sm">
                    <a
                      href="#"
                      className="hover:text-blue-400 transition-colors duration-300"
                    >
                      {guide.title}
                    </a>
                  </h6>
                  <p className="text-xs text-gray-500 mt-1">{guide.meta}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-sm">
            Copyright &copy; {new Date().getFullYear()} All rights reserved | Made
            with{" "}
            <i className="fa fa-heart text-red-500" aria-hidden="true"></i> by{" "}
            <span className="text-blue-400 font-semibold hover:underline">
              kaizenspark
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
