import React from "react";
import { motion } from "framer-motion"; // Importing Framer Motion
import ChooseUs from "./chooseus";
import Price from "./price";
import Banner from "./banner";
import GetInTouch from "./getintouch";
import coverImage from "../assets/images/cover.jpg";
import Loader from "./Loader";
import { useState,useEffect } from "react";

const Home = () => {
  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
  
        return () => clearTimeout(timer);
    }, []);
  
    const [isLoading, setIsloading] = useState(false);
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <>
    {loading ? <Loader /> :

    <div>
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${coverImage})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            className="text-white px-4 max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={fadeInUp} // Apply animation
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              Welcome to Our Platform
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Discover the best classes, services, and experiences tailored just
              for you.
            </motion.p>
            <motion.button
              className="py-2 px-6 bg-blue-500 text-white text-lg font-semibold rounded hover:bg-blue-600 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Animated Sections */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
      >
        <ChooseUs />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0, transition: { duration: 1 } },
        }}
      >
        <Banner />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
      >
        <Price />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0, transition: { duration: 1 } },
        }}
      >
        <GetInTouch />
      </motion.div>
    </div>
    }
    </>
  );
};

export default Home;
