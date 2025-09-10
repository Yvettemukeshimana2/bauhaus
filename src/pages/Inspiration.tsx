 import React from "react";
 import { Link } from "react-router-dom";
 import { motion } from "framer-motion";
 import bg from "../assets/bgrng.jpeg";

 import im1 from "../assets/images/DSC_3894.jpg";
 import im6 from "../assets/images/testimony1.jpg";
 import im2 from "../assets/images/testmony2.jpg";
 import im3 from "../assets/images/weeding2.jpg";
 import im4 from "../assets/images/3U8A0855.jpg";
 import im5 from "../assets/images/3U8A1253.jpg";

 interface Inspiration {
   id: string;
   title: string;
   image: string;
   message: string;
 }

 const inspirations: Inspiration[] = [
   {
     id: "pamella-wedding",
     title: "Pamella Wedding",
     image: im1,
     message:
       "Bauhaus made my wedding stress-free and elegant. Their staff handled everything perfectly from ceremony to reception!",
   },
   {
     id: "annie-black-show",
     title: "Annie Black Show Offs",
     image: im6,
     message:
       "The show was classy and energetic, thanks to the ambiance and attention to detail provided by Bauhaus.",
   },
   {
     id: "lounge-party",
     title: "Lounge Party",
     image: im2,
     message:
       "A perfect night to remember. Muhe’s team set the vibe just right—comfort, class, and perfect service.",
   },
   {
     id: "kigali-summer-vegas",
     title: "Kigali Summer Vegas",
     image: im3,
     message:
       "Bauhaus made our summer show unforgettable with seamless coordination and top-tier service.",
   },
   {
     id: "point-up-show",
     title: "Kigali Point Up Show",
     image: im4,
     message:
       "Great atmosphere, excellent setup, and everything handled professionally by Muhe.",
   },
   {
     id: "davi-house-port",
     title: "Davi House Port",
     image: im5,
     message:
       "A top-notch experience, from decor to catering. Muhe is simply the best!",
   },
 ];

 const InspirationPage: React.FC = () => {
   return (
     <div className="text-white min-h-screen">
       {/* Header Section */}
       <div className="bg-black relative">
         <header className="relative h-96">
           <motion.img
             initial={{ scale: 1.2 }}
             animate={{ scale: 1 }}
             transition={{ duration: 1.5 }}
             src={bg}
             loading="lazy"
             alt="Inspiration Header"
             className="w-full h-96 object-cover mt-10 opacity-40"
           />
           <div className="absolute inset-0 flex flex-col items-center mt-10 justify-center">
             <motion.div
               initial={{ y: -100, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 1, delay: 0.5 }}
               className="text-center space-y-4"
             >
               <h2 className="text-4xl lg:text-2xl font-bold tracking-wider">
                 GET INSPIRED
               </h2>
               <div className="flex items-center justify-center gap-3">
                 <span className="lg:text-2xl text-3xl text-yellow-500 font-bold">
                   By
                 </span>
                 <h3 className="lg:text-2xl text-3xl font-bold text-yellow-500">
                   Bauhaus Entertainment
                 </h3>
               </div>
             </motion.div>

             <motion.div
               initial={{ y: 100, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 1, delay: 0.8 }}
               className="mt-12"
             >
               <Link
                 to="/contactus"
                 className="btn px-8 py-4 border-2 border-yellow-500 hover:bg-yellow-600 text-white lg:text-sm text-lg font-semibold rounded-full transition duration-300"
               >
                 LET'S CONNECT
               </Link>
             </motion.div>
           </div>
         </header>
       </div>

       {/* Message Section */}
       <section className="py-10">
         <h1 className="text-center text-4xl lg:text-2xl font-bold text-gray-600 mb-10">
           GRAB SOME INSPIRATION
         </h1>

         <section className="container-fluid p-4 mx-20 mb-5 bg-yellow-600 rounded">
           <div className="text-center text-xl lg:text-sm">
             <p>
               "At Bauhaus Entertainment, we believe that true inspiration
               comes from dedication, passion, and an unwavering commitment to
               excellence. Every moment is an opportunity to create experiences
               that resonate, connecting us deeply with our clients and their
               journeys. Let’s work together to inspire, serve, and exceed
               expectations, one exceptional experience at a time."
             </p>
           </div>
         </section>

         {/* Inspiration Cards */}
         <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 px-10">
           {inspirations.map((item) => (
             <Link
               key={item.id}
               to={`/inspirations/${item.id}`}
               className="block bg-black bg-opacity-90 h-72 p-4 rounded-lg hover:scale-105 transform transition"
             >
               <div
                 className="rounded-lg w-full h-full text-center bg-cover bg-center flex flex-col justify-end"
                 style={{ backgroundImage: `url(${item.image})` }}
               >
                 <div className="bg-black bg-opacity-60  rounded-b-lg">
                   <h1 className="text-md lg:text-lg font-semibold text-yellow-500">
                     {item.title}
                   </h1>
                   <h1 className="text-md lg:text-sm  text-white">
                     {item.message}
                   </h1>
                   <span className="text-yellow-500 text-2xl mt-2 inline-block">
                     <i className="fa fa-heart"></i>
                   </span>
                 </div>
               </div>
             </Link>
           ))}
         </div>
       </section>
     </div>
   );
 };

 export default InspirationPage;
