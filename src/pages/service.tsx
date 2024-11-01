import React from "react";
import im1 from "../assets/images/mettings.jpg";
import im2 from "../assets/images/LOLA-Event-Productions-Wedding-Planning-Tent-RichHarvestFarm-034.jpg";
import im3 from "../assets/images/image1.avif";
import { Link } from "react-router-dom";
const services = [
  {
    img: im1,
    title: "Wedding Planning",
    description: "Expertise in organizing beautiful weddings.",
    link: "/services/wedding-planning",
  },
  {
    img: im2,
    title: "Corporate Events",
    description: "Tailored services for professional gatherings.",
    link: "/services/corporate-events",
  },
  {
    img: im3,
    title: "Event Coordination",
    description: "Comprehensive coordination for all types of events.",
    link: "/services/event-coordination",
  },
];
const OurServices: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-10 z-20">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="flex flex-wrap gap-10 mb-5 justify-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-5 max-w-xs flex flex-col items-center"
          >
            <img
              src={service.img}
              alt={service.title}
              className="rounded mb-3 w-full h-32 object-cover"
            />
            <h2 className="font-semibold text-xl mb-2">{service.title}</h2>
            <p className="text-center mb-3">{service.description}</p>
            < Link to="/venue">
              <button className="mt-2 bg-white text-black border-2 border-yellow-700 hover:text-white hover:bg-yellow-700 py-2 px-4 rounded">
                See More
              </button>
             </Link>
          </div>
        ))}
      </div>
      <a href="/services" className="mt-5">
        <button className=" text-white border-2 bg-yellow-600 py-2 px-4 rounded">
          View All Services
        </button>
      </a>
    </div>
  );
};
export default OurServices;