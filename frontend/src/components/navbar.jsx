import React, { useState } from "react";
import gymlogo from "../assets/images/gymlogo.png";


const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("John Doe");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo */}
        <img src={gymlogo} alt="logo" className="w-50 h-10"></img>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={isMenuOpen ? "fa fa-times" : "fa fa-bars"}></i>
        </button>

        {/* Menu */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent md:flex space-y-4 md:space-y-0 md:space-x-6 font-medium ${
            isMenuOpen ? "block" : "hidden"
          } md:block`}
        >
          {[
            "Home",
            "About Us",
            "Classes",
            "Services",
            "Our Team",
            "Pages",
            "Contact",
          ].map((item, index) => (
            <li key={index} className="text-center md:text-left">
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="block py-2 px-4 hover:text-blue-400 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}

          {/* Login / Logout Section */}
          <li className="text-center md:text-left">
            {isLoggedIn ? (
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <span className="text-sm">{username}</span>
                <button
                  className="py-1 px-3 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                className="py-1 px-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                onClick={handleLogin}
              >
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
