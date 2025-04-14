 import { useState } from "react";
 import bg from "../assets/history.jpeg";
 import {ChevronRight,ChevronDown,Award,History,Compass} from "lucide-react";
 import OurTeam from "./Ourteam";
 import { Link } from "react-router-dom";

 const AboutUs = () => {
   const [expanded, setExpanded] = useState<string | null>(null);

   const sections = [
     {
       title: "Our Mission",
       icon: <Compass className="w-8 h-8 text-yellow-600" />,
       description:
         "We deliver exceptional event experiences that transform visions into unforgettable moments. Our dedicated team combines creativity with precision to ensure every detail reflects your unique story.",
       stats: [
         { value: "500+", label: "Events Completed" },
         { value: "98%", label: "Client Satisfaction" },
         { value: "50+", label: "Team Members" },
       ],
     },
     {
       title: "Our Journey",
       icon: <History className="w-8 h-8 text-yellow-600" />,
       description:
         "From our humble beginnings to becoming a leading event management company, our journey has been marked by continuous innovation and dedication to excellence. Each event has added to our expertise and refined our craft.",
       stats: [
         { value: "7+", label: "Years Experience" },
         { value: "24/7", label: "Support" },
         { value: "Global", label: "Reach" },
       ],
     },
   ];

   const achievements = [
     {
       title: "Best Event Management Company 2023",
       description:
         "We were recognized for our outstanding event planning and execution, setting industry standards for creativity and precision.",
     },
     {
       title: "Excellence in Consumers Choice Award 2022",
       description:
         "Awarded for our commitment to delivering unparalleled customer service and ensuring client satisfaction.",
     },
     {
       title: "Top 10 Wedding Planners in the Region",
       description:
         "Acknowledged among the top 10 wedding planners, providing breathtaking wedding experiences for our clients.",
     },
     {
       title: "Sustainability in Events Recognition",
       description:
         "Honored for implementing sustainable and eco-friendly event planning practices, reducing environmental impact.",
     },
   ];

   return (
     <div className="min-h-screen bg-white">
       <div className="h-[80vh] overflow-hidden bg-black relative">
         <img
           src={bg}
           alt="Event Space"
           loading="lazy"
           className="w-full h-96 object-cover pt-16 opacity-40"
         />
         <div className="absolute inset-0 flex justify-center text-center mt-7">
           <div className="container mx-auto px-6 top-36 absolute">
             <h1 className="text-2xl ml-5 lg:text-6xl text-white font-semibold">
                MHS
             </h1>
             <h1 className="text-yellow-500 text-xs pl-5 font-semibold">
               Muhe Hospitality Services
             </h1>
             <h1 className="text-4xl md:text-4xl sm:text-4xl font-bold mt-10 animate-pulse text-white text-center">
               MOMENT <span className="text-yellow-500 ">MADE PERFECT</span>
             </h1>
           </div>
         </div>
       </div>

       <div className="text-center mb-20">
         <h2 className="lg:text-xl text-2xl font-bold mt-4">
           Crafting Memorable Experiences
         </h2>
         <p className="bg-gradient-to-t p-9 text-white lg:text-sm text-2xl m-10 from-yellow-400 to-yellow-500">
           At MHS, we believe every event tells a unique story. Our passion lies
           in bringing these stories to life through meticulous planning,
           creative design, and flawless execution.
         </p>
       </div>

       <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 mb-20">
         {sections.map((section) => (
           <div
             key={section.title}
             className="bg-gray-50 rounded-lg p-8 shadow-lg"
           >
             <div className="flex items-center mb-6">
               {section.icon}
               <h3 className="text-4xl lg:text-xl font-bold ml-3">
                 {section.title}
               </h3>
             </div>
             <p className="text-gray-600 lg:text-sm text-2xl mb-8">
               {section.description}
             </p>
             <div className="grid grid-cols-3 gap-4">
               {section.stats.map((stat) => (
                 <div key={stat.label} className="text-center">
                   <div className="text-3xl lg:text-sm font-bold text-yellow-500">
                     {stat.value}
                   </div>
                   <div className="text-2xl lg:text-sm text-gray-500">
                     {stat.label}
                   </div>
                 </div>
               ))}
             </div>
           </div>
         ))}
       </div>

       {/* Achievements Section */}
       <div className="bg-yellow-50 rounded-lg p-8 mb-20">
         <div className="flex items-center mb-8">
           <Award className="w-8 h-8 text-yellow-600" />
           <h3 className="text-4xl lg:text-xl font-bold ml-3 text-yellow-500">
             Our Achievements
           </h3>
         </div>
         <div className="grid lg:grid-cols-2 gap-6">
           {achievements.map((achievement, index) => (
             <div
               key={index}
               className="bg-white p-4 rounded-lg shadow cursor-pointer"
               onClick={() =>
                 setExpanded(
                   expanded === achievement.title ? null : achievement.title
                 )
               }
             >
               <div className="flex items-center">
                 {expanded === achievement.title ? (
                   <ChevronDown className="text-yellow-500" />
                 ) : (
                   <ChevronRight className="text-yellow-500" />
                 )}
                 <span className="text-2xl lg:text-sm ml-2">
                   {achievement.title}
                 </span>
               </div>
               {expanded === achievement.title && (
                 <p className="mt-2 text-gray-600 lg:text-sm text-lg">
                   {achievement.description}
                 </p>
               )}
             </div>
           ))}
         </div>
       </div>

       <OurTeam />

       <Link to="/contactus">
         <div className="text-center">
           <button className="bg-yellow-500 text-white text-sm px-8 py-3 mb-5 rounded-lg hover:bg-yellow-700 transition-colors">
             Contact Us Today
           </button>
         </div>
       </Link>
     </div>
   );
 };

 export default AboutUs;
