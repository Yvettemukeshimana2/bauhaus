 import React from "react";
 import { ChevronRight } from "lucide-react";
 import { motion } from "framer-motion";  
 import bg from "../assets/images/3U8A0855.jpg";
 import c1 from "../assets/images/image1.avif";
 import c2 from "../assets/images/DSC_3894.jpg";
 import c3 from "../assets/images/planning-picture.jpg";
 import c4 from "../assets/images/LOLA-Event-Productions-Wedding-Planning-Tent-RichHarvestFarm-014.jpg";

 interface CardProps {
   title: string;
   description: string;
   imageUrl: string;
   index: number;
 }

 interface JobCardProps {
   title: string;
   description?: string;
   buttonText: string;
   onClick: () => void;
   index: number;
 }

 interface TeamQualityProps {
   text: string;
   index: number;
 }

//  const fadeInUp = {
//    initial: { opacity: 0, y: 20 },
//    animate: { opacity: 1, y: 0 },
//    transition: { duration: 0.5 },
//  };

 const TeamQuality: React.FC<TeamQualityProps> = ({ text, index }) => (
   <motion.div
     initial={{ opacity: 0, x: -20 }}
     animate={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.5, delay: index * 0.1 }}
     className="flex items-center space-x-2 mb-3 group hover:bg-yellow-400/20 p-2 rounded-lg transition-all duration-300"
   >
     <ChevronRight className="w-5 h-5 text-yellow-500 group-hover:translate-x-1 transition-transform" />
     <span className="group-hover:translate-x-1 transition-transform">
       {text}
     </span>
   </motion.div>
 );

 const Card: React.FC<CardProps> = ({
   title,
   description,
   imageUrl,
   index,
 }) => (
   <motion.div
     initial={{ opacity: 0, y: 50 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.5, delay: index * 0.2 }}
     whileHover={{ scale: 1.05 }}
     className="w-full px-4 mb-8"
   >
     <div className="bg-white rounded-lg shadow-lg overflow-hidden">
       <div className="h-48 overflow-hidden">
         <img
           src={imageUrl}
           loading="lazy"
           alt={title}
           className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
         />
       </div>
       <div className="p-6">
         <h6 className="text-xl font-semibold mb-2 text-yellow-500">{title}</h6>
         <p className="text-gray-600">{description}</p>
       </div>
     </div>
   </motion.div>
 );

 const JobCard: React.FC<JobCardProps> = ({
   title,
   description,
   buttonText,
   onClick,
   index,
 }) => (
   <motion.div
     initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
     animate={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.5, delay: index * 0.2 }}
     whileHover={{ scale: 1.03 }}
     className="w-full mb-4"
   >
     <div className="bg-white rounded-lg shadow p-4 hover:shadow-xl transition-shadow duration-300">
       <h5 className="text-lg font-semibold text-yellow-500 mb-2">{title}</h5>
       {description && (
         <p className="text-sm text-gray-600 mb-3">{description}</p>
       )}
       <button
         onClick={onClick}
         className="border-yellow-500 border-2 text-black px-4 py-2 rounded hover:bg-yellow-500 hover:text-white transition-all duration-300 transform hover:scale-105"
       >
         {buttonText}
       </button>
     </div>
   </motion.div>
 );

 const Publication = () => {
   const handleContact = () => {
     window.location.href = "tel:+250 788 501 009";
   };

   const teamQualities = [
     "Quick and empathetic responders",
     "Creative problem solvers",
     "Great listeners and leaders",
     "Keen to little details and the big picture",
     "Calm and composed in the eye of the storm",
     "Artful and pragmatic",
     "Self-starters and aren't afraid to ask questions",
   ];

   return (
     <div className="min-h-screen">
       {/* Hero Section */}
       <header className="relative item-center bg-black overflow-hidden">
         <motion.img
           initial={{ scale: 1.2 }}
           animate={{ scale: 1 }}
           transition={{ duration: 1.5 }}
           src={bg}
           loading="lazy"
           alt="Our Services"
           className="w-full h-96 object-cover opacity-40 bg-black"
         />
         <motion.h1
           initial={{ y: -100, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ duration: 1, delay: 0.5 }}
           className="text-5xl absolute top-1/2 left-96 transform animate-bounce -translate-x-1/2 -translate-y-1/2 md:text-5xl font-bold text-white text-center"
         >
           BATO <span className="text-yellow-500  ">BATARI GITO</span>
         </motion.h1>
         <motion.h1
           initial={{ y: 100, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ duration: 1, delay: 0.8 }}
           className="absolute bottom-24 left-80 animate-pulse transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold"
         >
           MHS(Muhe Hospitality Service)
         </motion.h1>
         <motion.button
           initial={{ y: 100, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ duration: 1, delay: 1.1 }}
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.95 }}
           className="absolute p-2 border-2 animate-pulse border-yellow-400 bottom-3 rounded-md left-96 ml-32 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold hover:bg-yellow-500 transition-colors duration-300"
         >
           let's Talk
         </motion.button>
       </header>
       <section className="py-16">
         <motion.h2
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ duration: 1 }}
           className="text-3xl font-bold text-center text-yellow-500 mb-12"
         >
           What's New!
         </motion.h2>
         <div className="container  mx-auto px-4">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
             {[
               {
                 title: "Crafting Memorable MHS Events",
                 description:
                   "Step into the world of event magic! Join us behind the scenes at MHS as we unveil the secrets to creating unforgettable experiences.",
                 imageUrl: c1,
               },
               {
                 title: "Unlocking Success",
                 description:
                   "Discover the power of MHS Digital services in this transformative journey. From boosting efficiency to elevating profits of your Business.",
                 imageUrl: c2,
               },
               {
                 title: "MHS's Impact on Industry Trends",
                 description:
                   "Stay ahead of the curve with MHS! Dive into the future of industry trends as we unveil the innovative solutions shaping tomorrow.",
                 imageUrl: c4,
               },
               {
                 title: "A Journey through MHS Event Experiences",
                 description:
                   "Client Spotlight: Experience events like never before! Join us on a journey through the eyes of our clients.",
                 imageUrl: c3,
               },
             ].map((card, index) => (
               <Card key={index} {...card} index={index} />
             ))}
           </div>
         </div>
       </section>
       <motion.section
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 1 }}
         className="py-16 bg-yellow-100"
       >
         <div className="container mx-auto px-4">
           <h3 className="text-3xl font-bold text-center mb-12">Tenders</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             <JobCard
               title="A Video-grapher"
               description="We Are Looking for an experienced Video-grapher who can Record Our Summer Weddings"
               buttonText="Contact Us"
               onClick={handleContact}
               index={0}
             />
             <JobCard
               title="Caterer"
               description="We Are Looking for an experienced Caterer who can Cater our Upcoming events"
               buttonText="Contact Us"
               onClick={handleContact}
               index={1}
             />
           </div>
         </div>
       </motion.section>
       <motion.section
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 1 }}
         className="py-16 bg-[#fb911f] text-black"
       >
         <div>
           <h3 className="text-3xl font-bold text-center mb-5">Careers</h3>
           <div className="container mx-auto px-4 pl-20 pr-20 flex justify-center items-center">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
               <motion.div
                 initial={{ x: -100, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }}
                 transition={{ duration: 0.8 }}
               >
                 <h5 className="text-2xl font-semibold mb-4">
                   Join Our Team in making a positive impact on our society!
                 </h5>
                 <p className="mb-6">
                   Are you a talented individual, bursting with enthusiasm for
                   event and hospitality management? At MHS Company, we are
                   always on the lookout for talented individuals who feel they
                   would thrive in the ever-changing events industry!
                 </p>
                 <h5 className="text-xl font-semibold mb-4">
                   We love team members who are:
                 </h5>
                 <div className="space-y-1">
                   {teamQualities.map((quality, index) => (
                     <TeamQuality key={index} text={quality} index={index} />
                   ))}
                 </div>
               </motion.div>
               <motion.div
                 initial={{ x: 100, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }}
                 transition={{ duration: 0.8 }}
               >
                 <h5 className="text-2xl font-semibold text-center mb-8">
                   Available Job Positions
                 </h5>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <JobCard
                     title="Event Staffing Officer"
                     buttonText="Apply Here"
                     onClick={() => {}}
                     index={0}
                   />
                   <JobCard
                     title="Marketing Officer"
                     buttonText="Apply Here"
                     onClick={() => {}}
                     index={1}
                   />
                 </div>
               </motion.div>
             </div>
           </div>
         </div>
       </motion.section>
     </div>
   );
 };
 export default Publication;