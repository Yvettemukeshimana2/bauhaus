import bg from "../assets/images/LOLA-Event-Productions-Moody-Wedding-Chicago-Harold-Washington-Library_0610.jpg"
 import { ChevronRight, Award, History, Compass } from "lucide-react";
import OurTeam from "./Ourteam";
import { Link } from "react-router-dom";
 const AboutUs = () => {
   const sections = [
     {
       title: "Our Mission",
       icon: <Compass className="w-8 h-8 text-yellow-600" />,
       description:
         "We deliver exceptional event experiences that transform visions into unforgettable moments. Our dedicated team combines creativity with precision to ensure every detail reflects your unique story.",
       stats: [
         { value: "1000+", label: "Events Completed" },
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
         { value: "15+", label: "Years Experience" },
         { value: "24/7", label: "Support" },
         { value: "Global", label: "Reach" },
       ],
     },
   ];

   const achievements = [
     "Best Event Management Company 2023",
     "Excellence in Customer Service Award",
     "Top 10 Wedding Planners in the Region",
     "Sustainability in Events Recognition",
   ];

   return (
     <div className="min-h-screen   bg-white">
       <div className=" h-[80vh] overflow-hidden bg-black">
         <img
           src={bg}
           alt="Event Space"
           className="w-full bg-black h-96 object-cover opacity-40"
         />
         <div className="absolute inset-0 bg-gradient-to-r  mb-16 from-black/70 to-black/50 flex justify-center items-center">
           <div className="container mx-auto px-6 ml-56  ">
             <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
               Welcome to <span className="text-yellow-500">MHC</span>
             </h1>
             <h1 className="text-5xl md:text-5xl font-bold text-center
              text-white mb-4">
               BATO  <span className="text-yellow-500">BATARI GITO</span>
             </h1>
             <p className="text-2xl pb-5 text-gray-200 font-semibold ">
               Creating extraordinary events that leave lasting impressions.
               Your vision, our expertise, perfect execution.
             </p>
           </div>
         </div>
       </div>
       <div className="container mx-auto px-6 py-16">
         <div className="text-center mb-20">
           <h2 className="text-3xl font-bold mb-6">
             Crafting Memorable Experiences
           </h2>
           <p className=" max-w-3xl  bg-gradient-to-r p-2 from-yellow-500 to-yellow-800  mx-auto">
             At HMC, we believe every event tells a unique story. Our passion
             lies in bringing these stories to life through meticulous planning,
             creative design, and flawless execution.
           </p>
         </div>
         <div className="grid md:grid-cols-2 gap-12 mb-20">
           {sections.map((section,) => (
             <div
               key={section.title}
               className="bg-gray-50 rounded-lg p-8 shadow-lg"
             >
               <div className="flex items-center mb-6">
                 {section.icon}
                 <h3 className="text-2xl font-bold ml-3">{section.title}</h3>
               </div>
               <p className="text-gray-600 mb-8">{section.description}</p>
               <div className="grid grid-cols-3 gap-4">
                 {section.stats.map((stat) => (
                   <div key={stat.label} className="text-center">
                     <div className="text-2xl font-bold text-yellow-600">
                       {stat.value}
                     </div>
                     <div className="text-sm text-gray-500">{stat.label}</div>
                   </div>
                 ))}
               </div>
             </div>
           ))}
         </div>
         <div className="bg-yellow-50 rounded-lg p-8 mb-20">
           <div className="flex items-center mb-8">
             <Award className="w-8 h-8 text-yellow-600" />
             <h3 className="text-2xl font-bold ml-3">Our Achievements</h3>
           </div>
           <div className="grid md:grid-cols-2 gap-6">
             {achievements.map((achievement, index) => (
               <div
                 key={index}
                 className="flex items-center bg-white p-4 rounded-lg shadow"
               >
                 <ChevronRight className="w-5 h-5 text-yellow-500 mr-3" />
                 <span>{achievement}</span>
               </div>
             ))}
           </div>
         </div>
         <OurTeam />
         <Link to="/contactus">
         <div className="text-center">
           <button className="bg-yellow-600 text-white px-8 py-3 rounded-lg hover:bg-yellow-700 transition-colors">
             Contact Us Today
           </button>
         </div>
         </Link>
       </div>
     </div>
   );
 };

 export default AboutUs;