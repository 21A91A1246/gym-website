import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/images/cover.jpg";
import ChooseUs from "./chooseus";

const About = () => {
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const progressBarAnimation = (width) => ({
    hidden: { width: "0%" },
    visible: { width: `${width}%`, transition: { duration: 1 } },
  });

  return (
    <section className="aboutus-section">
      {/* Hero Section */}
      <motion.div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${aboutImage})`,
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div className="text-white px-4 max-w-2xl" variants={fadeIn}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-lg md:text-xl mb-6">
              Discover the best classes, services, and experiences tailored just
              for you.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <ChooseUs />

      {/* Image and Text Section */}
      <div className="flex flex-wrap">
        {/* Left Section - Video/Image */}
        <motion.div
          className="w-full lg:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={slideInLeft}
        >
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
        </motion.div>

        {/* Right Section - Text */}
        <motion.div
          className="w-full lg:w-1/2 bg-gray-100 p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={slideInRight}
        >
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
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={progressBarAnimation(80)}
              >
                <p className="text-lg font-medium mb-2">Body Building</p>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-blue-500 h-4 rounded-full"></div>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={progressBarAnimation(85)}
              >
                <p className="text-lg font-medium mb-2">Training</p>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-blue-500 h-4 rounded-full"></div>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={progressBarAnimation(75)}
              >
                <p className="text-lg font-medium mb-2">Fitness</p>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-blue-500 h-4 rounded-full"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
