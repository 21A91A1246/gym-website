import React from "react";
import aboutImage from "../assets/images/cover.jpg"; 
import Loader from "./Loader";
import { useEffect,useState} from "react";

const teamMembers = [
  {
    name: "Athart Rachel",
    role: "Gym Trainer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ3meQou7jZ-FOxT2G3pCU8oMzR-lic0BcvMg7m4jviCRyyn9wmBS_PIE&s",
    socials: {
      facebook: "#",
      twitter: "#",
      youtube: "#",
      instagram: "#",
      email: "#",
    },
  },
  {
    name: "John Doe",
    role: "Fitness Coach",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ3meQou7jZ-FOxT2G3pCU8oMzR-lic0BcvMg7m4jviCRyyn9wmBS_PIE&s",
    socials: {
      facebook: "#",
      twitter: "#",
      youtube: "#",
      instagram: "#",
      email: "#",
    },
  },
  {
    name: "Jane Smith",
    role: "Yoga Instructor",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ3meQou7jZ-FOxT2G3pCU8oMzR-lic0BcvMg7m4jviCRyyn9wmBS_PIE&s",
    socials: {
      facebook: "#",
      twitter: "#",
      youtube: "#",
      instagram: "#",
      email: "#",
    },
  },
  {
    name: "Michael Brown",
    role: "Nutritionist",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ3meQou7jZ-FOxT2G3pCU8oMzR-lic0BcvMg7m4jviCRyyn9wmBS_PIE&s",
    socials: {
      facebook: "#",
      twitter: "#",
      youtube: "#",
      instagram: "#",
      email: "#",
    },
  },
  {
    name: "Emma Wilson",
    role: "Cardio Trainer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ3meQou7jZ-FOxT2G3pCU8oMzR-lic0BcvMg7m4jviCRyyn9wmBS_PIE&s",
    socials: {
      facebook: "#",
      twitter: "#",
      youtube: "#",
      instagram: "#",
      email: "#",
    },
  },
  {
    name: "Olivia Taylor",
    role: "Strength Coach",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ3meQou7jZ-FOxT2G3pCU8oMzR-lic0BcvMg7m4jviCRyyn9wmBS_PIE&s",
    socials: {
      facebook: "#",
      twitter: "#",
      youtube: "#",
      instagram: "#",
      email: "#",
    },
  },
];

const MyTeam = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => {
          setLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
  }, []);

  const [isLoading, setIsloading] = useState(false);
  return (
    <>
    {loading ? <Loader /> :

    <section className="bg-gray-100 py-12">
      <div className=" mx-auto    ">
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
                            Our Team
                          </h1>
                          <p className="text-lg md:text-xl mb-6">
                          Train with our experts
                          </p>
                          <button className="mt-6 bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors">
            Appointment
          </button>
                        </div>
                      </div>
                    </div>
                    <div className="text-center"><h1  className="text-4xl font-bold">Our Team</h1></div>
        
        {/* Team Members Grid */}
        <div className="grid grid-cols-1 px-20 mt-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              {/* Team Member Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              {/* Team Member Info */}
              <div className="p-6 text-center">
                <h4 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h4>
                <p className="text-gray-600 mt-2">{member.role}</p>
                {/* Social Links */}
                <div className="flex justify-center mt-4 space-x-4 text-gray-500">
                  <a href={member.socials.facebook} className="hover:text-blue-600">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href={member.socials.twitter} className="hover:text-blue-400">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href={member.socials.youtube} className="hover:text-red-500">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href={member.socials.instagram} className="hover:text-pink-500">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href={member.socials.email} className="hover:text-gray-700">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
     }
    </>
  );
};

export default MyTeam;
