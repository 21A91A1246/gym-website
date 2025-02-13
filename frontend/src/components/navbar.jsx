import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import gymlogo from "../assets/images/gymlogo.png";

const Navbar = ({ onLogout }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("John Doe");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); // Trigger the parent App's logout handler
    navigate("/login");
  };
  useEffect(() => {
    const userDataString = localStorage.getItem("userData");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      setIsLoggedIn(true);
      setUsername(userData);
    }
  }, []);

  return (
    <nav className="bg-gray-900 text-gray-300 fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/">
          <img src={gymlogo} alt="logo" className="w-50 h-10" />
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={isMenuOpen ? "fa fa-times" : "fa fa-bars"}></i>
        </button>

        {/* Menu */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent md:flex space-y-4 md:space-y-0 md:space-x-2 font-medium transition-all ${
            isMenuOpen ? "block" : "hidden"
          } md:block`}
        >
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about-us" },
            { name: "Classes", path: "/classes" },
            { name: "Services", path: "/services" },
            { name: "Our Team", path: "/team" },
            { name: "Contact", path: "/contact" },
          ].map((item, index) => (
            <li key={index} className="text-center md:text-left">
              <Link
                to={item.path}
                className="block py-2 px-4 hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)} // Close menu after selection in mobile
              >
                {item.name}
              </Link>
            </li>
          ))}

          {/* Login / Logout Section */}
          <li className="text-center md:text-left ">
            {isLoggedIn ? (
              <div className="flex items-center justify-center md:justify-start space-x-1">
                <span className="text-sm">{username}</span>
                <button
                  className="py-1 px-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to={"/login"}> 
              <button
                className="py-1 px-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                 
              >
                Login
              </button></Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
