 import React from "react";
 import { Link } from "react-router-dom";
 import a1 from "../assets/c.jpg"

 const services = [
   {
     img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
     title: "Karaoke Lounge",
     description: "Private karaoke rooms with 10,000+ songs, professional sound systems, and themed nights. Perfect for birthdays, corporate events, and group celebrations.",
     features: ["Private Rooms", "10,000+ Songs", "Professional Sound", "Group Competitions"],
     link: "/karaoke",
   },
   {
     img:  a1,
     title: "Night Club",
     description: "Electrifying dance floor with world-class DJs, VIP bottle service, LED lighting, and exclusive VIP sections for unforgettable party experiences.",
     features: ["World-Class DJs", "VIP Bottle Service", "LED Lighting", "VIP Sections"],
     link: "/nightclub",
   },
   {
     img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
     title: "Premium Bar",
     description: "Expert mixologists crafting signature cocktails, premium spirits collection, craft beer selection, and elegant lounge atmosphere.",
     features: ["Expert Mixologists", "Premium Spirits", "Craft Beer", "Wine Tasting"],
     link: "/bar",
   },
 ];

 const OurServices: React.FC = () => {
   return (
     <div className="max-w-7xl mx-auto px-4 py-16">
       <div className="text-center mb-12">
         <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-customGreen-960">
           Our Entertainment Venues
         </h1>
         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
           Experience the ultimate entertainment at Bauhaus with our three distinct venues, each offering unique experiences for every occasion.
         </p>
       </div>
       
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {services.map((service, index) => (
           <div
             key={index}
             className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
           >
             <div className="relative">
               <img
                 src={service.img}
                 loading="lazy"
                 alt={service.title}
                 className="w-full h-64 object-cover"
               />
               <div className="absolute inset-0 bg-black bg-opacity-20"></div>
             </div>
             
             <div className="p-6">
               <h2 className="text-2xl font-bold mb-3 text-gray-800">
                 {service.title}
               </h2>
               
               <p className="text-gray-600 mb-4 leading-relaxed">
                 {service.description}
               </p>
               
               <div className="mb-6">
                 <h3 className="text-sm font-semibold text-customGreen-960 mb-2 uppercase tracking-wide">
                   Key Features
                 </h3>
                 <div className="grid grid-cols-2 gap-2">
                   {service.features.map((feature, featureIndex) => (
                     <div key={featureIndex} className="flex items-center">
                       <div className="w-2 h-2 bg-customGreen-960 rounded-full mr-2"></div>
                       <span className="text-sm text-gray-600">{feature}</span>
                     </div>
                   ))}
                 </div>
               </div>
               
               <Link to={service.link}>
                 <button className="w-full bg-customGreen-960 text-white font-semibold py-3 px-6 rounded-lg hover:bg-customGreen-800 transition-colors duration-200">
                   Learn More
                 </button>
               </Link>
             </div>
           </div>
         ))}
       </div>
       
       <div className="text-center mt-12">
         <Link to="/contactus">
           <button className="bg-white text-customGreen-960 border-2 border-customGreen-960 font-semibold py-3 px-8 rounded-lg hover:bg-customGreen-960 hover:text-white transition-colors duration-200">
             Contact Us for Reservations
           </button>
         </Link>
       </div>
     </div>
   );
 };

 export default OurServices;
