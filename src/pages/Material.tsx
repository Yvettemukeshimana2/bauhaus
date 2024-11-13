 import React, { useState } from "react";
 import { motion } from "framer-motion";
 import bg from "../assets/images/DSC_3894.jpg";
 import BookingModal, { BookingFormData } from "./Materialmodel";

 interface Material {
   id: string;
   name: string;
   description: string;
   imageUrl: string;
   price: number;
   priceUnit: string;
   category: string;
   dimensions: {
     width: number;
     height: number;
     depth: number;
   };
 }

 const HospitalityMaterials: React.FC = () => {
   const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(
     null
   );
   const [isModalOpen, setIsModalOpen] = useState(false);

   const [materials] = useState<Material[]>([
    
    
    
      
     {
       id: "1",
       name: "Premium Tent",
       description: "Durable and weatherproof tent for your outdoor events.",
       imageUrl: "https://bluepeaktents.com/wp-content/uploads/2018/10/lg2.jpg",
       price: 150,
       priceUnit: "day",
       category: "Tents",
       dimensions: {
         width: 20,
         height: 10,
         depth: 10,
       },
     },
     {
       id: "2",
       name: "Glass Dining Set",
       description: "Elegant glass tableware and glassware for your events.",
       imageUrl:
         "https://www.purbafurniture.ca/wp-content/uploads/2021/01/Glass-Dining-Set.png",
       price: 75,
       priceUnit: "set",
       category: "Glass",
       dimensions: {
         width: 6,
         height: 3,
         depth: 6,
       },
     },
     {
       id: "3",
       name: "Chiavari Chairs",
       description: "Stylish and comfortable chairs for your events.",
       imageUrl:
         "https://i0.wp.com/chiavarisales.com/wp-content/uploads/2024/09/Black-Royal-Chair-with-Ivory-seat-and-back_1-scaled.jpg?resize=247%2C346&ssl=1",
       price: 10,
       priceUnit: "chair",
       category: "Chairs",
       dimensions: {
         width: 2,
         height: 4,
         depth: 2,
       },
     },
     {
       id: "4",
       name: "Wine Glass",
       description: "Stylish and comfortable chairs for your events.",
       imageUrl:
         " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsOyRdp38uaNGgU-NUsSqxA0XW3DQxNDbLWQ&s",
       price: 10,
       priceUnit: "chair",
       category: "Chairs",
       dimensions: {
         width: 0,
         height: 0,
         depth: 0,
       },
     },
     {
       id: "2",
       name: "dish",
       description: "Elegant glass tableware and glassware for your events.",
       imageUrl:
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc7c7SrpkdjqretsCNgB7KQkQuBKQl3botgG1OnepA7vwA7f3vmC538wa0JEWznyLJzu0&usqp=CAU",
       price: 75,
       priceUnit: "set",
       category: "Glass",
       dimensions: {
         width: 6,
         height: 3,
         depth: 6,
       },
     },
     {
       id: "2",
       name: "Cake Table",
       description: "Elegant glass tableware and glassware for your events.",
       imageUrl:
         " https://buttercream.info/wp-content/uploads/2022/05/Gold-Tiered-Stands.jpg",
       price: 75,
       priceUnit: "set",
       category: "Glass",
       dimensions: {
         width: 6,
         height: 3,
         depth: 6,
       },
     },
     {
       id: "2",
       name: "Cake Table",
       description: "Elegant glass tableware and glassware for your events.",
       imageUrl:
         " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMzQQggHyOyNFUdxY8me2_0q2tAOIDvrzhwk3wpoHlA2wge9SkiWyCx34IIehR2qoTFrk&usqp=CAU",
       price: 75,
       priceUnit: "set",
       category: "Glass",
       dimensions: {
         width: 6,
         height: 3,
         depth: 6,
       },
     },
   ]);
    
    
    
    
    
    
    
    
    
    
    //    ... your existing materials array ...
   

   const handleBookNow = (material: Material) => {
     setSelectedMaterial(material);
     setIsModalOpen(true);
   };

   const handleCloseModal = () => {
     setIsModalOpen(false);
     setSelectedMaterial(null);
   };

   const handleBookingSubmit = (data: BookingFormData) => {
     // Handle the booking submission here
     console.log("Booking submitted:", data);
     // You can add API calls or other logic here
   };

   return (
     <div className="container min-h-full max-w-screen-2xl">
       <header className="relative  bg-black overflow-hidden">
         <motion.img
           initial={{ scale: 1.2 }}
           animate={{ scale: 1 }}
           transition={{ duration: 1.5 }}
           src={bg}
           alt="Our Services"
           className="w-full h-96 mt-20 object-cover opacity-40 bg-black"
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
       <h1 className="text-4xl font-bold mb  mt-5 text-center text-yellow-500">
         Rental Materials
       </h1>
       <div className="grid grid-cols-1 p-10 md:grid-cols-4 w-full gap-8">
         {materials.map((material) => (
           <div
             key={material.id}
             className={`bg-white rounded-lg shadow-md overflow-hidden relative ${
               material.category === "Tents" ? "col-span-2" : ""
             }`}
           >
             <img
               src={material.imageUrl}
               loading="lazy"
               alt={material.name}
               className="w-full h-96 object-cover"
             />
             <div className="absolute inset-0 bg-black bg-opacity-50 p-6 flex flex-col justify-center">
               <h2 className="text-xl font-bold mb-2 text-white">
                 {material.name}
               </h2>
               <p className="text-gray-300 mb-4">{material.description}</p>
               <p className="text-gray-300 mb-4">
                 {material.dimensions.width} x {material.dimensions.height} x{" "}
                 {material.dimensions.depth} inches
               </p>
               <p className="text-gray-300 font-bold mb-4">
                 ${material.price} per {material.priceUnit}
               </p>
               <button
                 onClick={() => handleBookNow(material)}
                 className="text-yellow-500 border-2 border-yellow-500 hover:text-yellow-700 font-bold py-2 px-4 rounded"
               >
                 Book Now
               </button>
             </div>
           </div>
         ))}
       </div>

       {selectedMaterial && (
         <BookingModal
           isOpen={isModalOpen}
           onClose={handleCloseModal}
           material={selectedMaterial}
           onSubmit={handleBookingSubmit}
         />
       )}
     </div>
   );
 };

 export default HospitalityMaterials;