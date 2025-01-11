import React from 'react';
import ClassTimetable from './timetable';
import aboutImage from "../assets/images/cover.jpg"; 
const ClassDetails = () => {
  return (
    <div>
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
                            Classes
                          </h1>
                          <p className="text-lg md:text-xl mb-6">
                            Discover the best classes, services, and experiences tailored just
                            for you.
                          </p>
                         
                        </div>
                      </div>
                    </div>
<ClassTimetable />
    </div>
  );
};

export default ClassDetails;
