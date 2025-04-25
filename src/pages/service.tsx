 import React from "react";
 import im1 from "../assets/planning1.jpg";
 import im2 from "../assets/staffing.jpg";
 import im3 from "../assets/Catering.jpg";
 import { Link } from "react-router-dom";

 const services = [
   {
     img: im1,
     title: "Event Planning",
     description: "Comprehensive Event & Wedding Planning and Coordination Services.",
     link: "/services/wedding-planning",
   },
   {
     img: im2,
     title: "Event Staffing",
     description: "Your trusted source for expert event and hospitality staffing executed seamlessly.",
     link: "/services/corporate-events",
   },
   {
     img: im3,
     title: "Event Catering",
     description: "Exceptional food and beverage catering tailored to your taste, theme, and guests from intimate gatherings to grand celebrations.",
     link: "/services/event-coordination",
   },
 ];

 const OurServices: React.FC = () => {
   return (
     <div className="flex flex-col items-center mt-10 px-4 w-full">
       <h1 className="text-5xl lg:text-2xl font-bold mb-6 text-yellow-500 w-full text-center">
         Our Services
       </h1>
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-5/6">
         {services.map((service, index) => (
           <div
             key={index}
             className="bg-white rounded-lg shadow-lg pb-5 flex flex-col items-center w-full"
           >
             <img
               src={service.img}
               loading="lazy"
               alt={service.title}
               className=" mb-3 w-28 h-28  object-cover"
             />
             <h2 className="font-semibold lg:text-lg text-2xl mb-2 text-center">
               {service.title}
             </h2>
             <p className="text-center text-xl lg:text-sm mb-3 px-4">
               {service.description}
             </p>
             <Link to="/venue">
               <button className="mt-2 text-sm bg-white text-black border-2 border-yellow-500 hover:text-white hover:bg-yellow-700 py-2 px-4 rounded">
                 See More
               </button>
             </Link>
           </div>
         ))}
       </div>
       <a href="/services" className="mt-5 lg:w-full flex justify-center">
         <button className="text-white border-2 text-lg bg-yellow-500 py-2 px-6 rounded-full w-full sm:w-auto">
           View All Services
         </button>
       </a>
     </div>
   );
 };

 export default OurServices;
