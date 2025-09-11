  import React, { useState } from "react";
 import { motion } from "framer-motion";
 import { useNavigate } from "react-router-dom";
 import {Calendar,Clock,Mail, User, ChevronRight,CheckCircle, AlertCircle, UtensilsCrossed, Heart,Users,X} from "lucide-react";

 // Constants
 const API_URL = import.meta.env.VITE_HOST;
 const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiamFkbyIsImlhdCI6MTczNzI3MDMyMn0.kkLgJDbm4ojjT1O3OjkELdfy8RBz1cmEesGK8ZvcBDc";

 // Types
 interface Service {
   id: number;
   title: string;
   description: string;
   image: string;
   icon: React.ReactNode;
 }
 const SERVICES: Service[] = [
   {
     id: 1,
     title: "karaoke",
     description:
       "Sing your heart out in private rooms with top-notch sound and thousands of songs to choose from",
     icon: <Heart className="w-4 h-4" />,
     image: "https://wallpapercave.com/wp/wp9577449.jpg",
   },

   {
     id: 2,
     title: " Night club",
     description:
       " Dance the night away with world-class DJs, dazzling lights, and an electric atmosphere.",
     image:
       "https://i.pinimg.com/originals/0e/5f/c1/0e5fc1120e8224c5c5e9789d53f9b659.jpg",
     icon: <Users className="w-4 h-4" />,
   },
   {
     id: 3,
     title: "bar",
     description:
       " Delicious meals, crafted drinks, and a lively atmosphere — the perfect spot to eat, drink, and unwind. at bauhaus",
     image:
       "https://st.hzcdn.com/simgs/f86142d3020fcef1_4-9803/home-design.jpg",
     icon: <UtensilsCrossed className="w-4 h-4" />,
   },
 ];

 const ServiceCard: React.FC<{
   service: Service;
   onBook: (service: Service) => void;
   onReadMore: (id: number) => void;
 }> = ({ service, onReadMore }) => (
   <div className="bg-white rounded-lg overflow-hidden border-2 border-customtext-customGreen-960 transition-all hover:shadow-lg">
     <img
       src={service.image}
       alt={service.title}
       className="w-full h-60 object-cover"
     />
     <div className="p-4">
       <div className="flex items-center gap-2 mb-2">
         {service.icon}
         <h2 className="text-sm font-bold">{service.title}</h2>
       </div>
       <p className="text-gray-700 mb-4 text-sm">{service.description}</p>
       <div className="flex justify-between items-center">
         <button
           onClick={() => onReadMore(service.id)}
           className="flex items-center text-customGreen-960 text-sm hover:text-yellow-600 group"
         >
           Read More
           <ChevronRight className="ml-1 transition-transform group-hover:translate-x-1" />
         </button>
         {/* <button
           onClick={() => onBook(service)}
           className="border-2 border-customtext-customGreen-960 px-4 py-2 text-sm text-black hover:bg-yellow-50 transition-colors rounded-lg"
         >
           Book Service
         </button> */}
       </div>
     </div>
   </div>
 );

 const Modal: React.FC<{
   isOpen: boolean;
   onClose: () => void;
   title: string;
   children: React.ReactNode;
 }> = ({ isOpen, onClose, title, children }) => {
   if (!isOpen) return null;

   return (
     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
       <div className="bg-white rounded-lg p-6 max-w-lg w-full relative">
         <div className="flex justify-between items-center mb-4">
           <h2 className="text-2xl font-bold">{title}</h2>
           <button
             onClick={onClose}
             className="text-gray-500 hover:text-gray-700"
           >
             <X className="w-6 h-6" />
           </button>
         </div>
         {children}
       </div>
     </div>
   );
 };

 const BookingForm: React.FC<{
   selectedService?: Service;
   onClose: () => void;
   onSuccess: () => void;
 }> = ({ selectedService, onClose, onSuccess }) => {
   const [formData, setFormData] = useState({
     contactName: "",
     email: "",
     phonenumber:"",
     startDate: "",
     startTime: "",
     endDate: "",
     endTime: "",
     eventType: selectedService?.title || "",
   });
   const [error, setError] = useState("");

   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     setError("");

     try {
       const response = await fetch(`${API_URL}/item/bookingevent`, {
         method: "PUT",
         headers: {
           "Content-Type": "application/json",
           Authorization: `Bearer ${TOKEN}`,
         },
         body: JSON.stringify(formData),
       });

       if (!response.ok) throw new Error("Failed to submit booking");

       onSuccess();
       onClose();
     } catch (error) {
       setError(error instanceof Error ? error.message : "Booking failed");
     }
   };

   return (
     <form onSubmit={handleSubmit} className="space-y-4">
       {error && (
         <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg">
           <AlertCircle className="text-red-500" />
           <p className="text-red-700">{error}</p>
         </div>
       )}

       <div className="space-y-4">
         <div className="flex justify-between">
           <div>
             <label className=" text-sm font-medium mb-1 flex items-center gap-2">
               <User className="w-4 h-4" /> Contact Name
             </label>
             <input
               type="text"
               value={formData.contactName}
               onChange={(e) =>
                 setFormData((prev) => ({
                   ...prev,
                   contactName: e.target.value,
                 }))
               }
               className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-customtext-customGreen-960 outline-none"
               required
             />
           </div>

           <div>
             <label className="text-sm font-medium mb-1 flex items-center gap-2">
               <Mail className="w-4 h-4" /> Email
             </label>
             <input
               type="email"
               value={formData.email}
               onChange={(e) =>
                 setFormData((prev) => ({ ...prev, email: e.target.value }))
               }
               className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-customtext-customGreen-960 outline-none"
               required
             />
           </div>
         </div>
         <div>
           <label className="text-sm font-medium mb-1 flex items-center gap-2">
              Phone Number
           </label>
           <input
             type="phone number"
             value={formData.phonenumber}
             onChange={(e) =>
               setFormData((prev) => ({ ...prev, phonenumber: e.target.value }))
             }
             className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-customtext-customGreen-960 outline-none"
             required
           />
         </div>

         <div>
           <label className=" text-sm font-medium mb-1 flex items-center gap-2">
             {selectedService?.icon} Services
           </label>
           <select
             value={formData.eventType}
             onChange={(e) =>
               setFormData((prev) => ({ ...prev, eventType: e.target.value }))
             }
             className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-customtext-customGreen-960 outline-none"
             required
           >
             <option value="">Select Services</option>
             {SERVICES.map((service) => (
               <option key={service.id} value={service.title}>
                 {service.title}
               </option>
             ))}
           </select>
         </div>

         <div className="grid grid-cols-2 gap-4">
           <div>
             <label className=" text-sm font-medium mb-1 flex items-center gap-2">
               <Calendar className="w-4 h-4" /> Date
             </label>
             <input
               type="date"
               value={formData.startDate}
               onChange={(e) =>
                 setFormData((prev) => ({ ...prev, startDate: e.target.value }))
               }
               className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-customtext-customGreen-960 outline-none"
               required
             />
           </div>
           <div>
             <label className=" text-sm font-medium mb-1 flex items-center gap-2">
               <Clock className="w-4 h-4" /> Start Time
             </label>
             <input
               type="time"
               value={formData.startTime}
               onChange={(e) =>
                 setFormData((prev) => ({ ...prev, startTime: e.target.value }))
               }
               className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-customtext-customGreen-960 outline-none"
               required
             />
           </div>
         </div>

         <div className="grid grid-cols-2 gap-4">
            
           <div>
             <label className=" text-sm font-medium mb-1 flex items-center gap-2">
               <Clock className="w-4 h-4" /> End Time
             </label>
             <input
               type="time"
               value={formData.endTime}
               onChange={(e) =>
                 setFormData((prev) => ({ ...prev, endTime: e.target.value }))
               }
               className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-customtext-customGreen-960 outline-none"
               required
             />
           </div>
         </div>
       </div>

       <button
         type="submit"
         className="w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition-colors flex items-center justify-center gap-2"
       >
         <CheckCircle className="w-4 h-4" /> Book Now
       </button>
     </form>
   );
 };

 const SuccessModal: React.FC<{
   isOpen: boolean;
   onClose: () => void;
 }> = ({ isOpen, onClose }) => (
   <Modal isOpen={isOpen} onClose={onClose} title="Booking Successful">
     <div className="text-center">
       <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
       <h3 className="text-lg font-semibold mb-2">
         Thank you for your booking!
       </h3>
       <p className="text-gray-600 mb-4">
         We have received your request and will contact you shortly.
       </p>
       <button
         onClick={onClose}
         className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition-colors"
       >
         Close
       </button>
     </div>
   </Modal>
 );

 const ServicesPage = () => {
   const navigate = useNavigate();
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
   const [selectedService, setSelectedService] = useState<Service>();

   const handleReadMore = (id: number) => {
     navigate(`/services/${id}`);
   };

   const handleBookService = (service: Service) => {
     setSelectedService(service);
     setIsModalOpen(true);
   };

   return (
     <div className="min-h-screen bg-gray-100">
       <header className="relative bg-black">
         <motion.img
           initial={{ scale: 1.2 }}
           animate={{ scale: 1 }}
           transition={{ duration: 1.5 }}
           src="https://i.pinimg.com/originals/44/78/b3/4478b30f549b1ad810f1c4a6b9641da5.jpg"
           alt="Services Header"
           className="w-full h-96 object-cover opacity-40"
         />
         <div className="absolute inset-0 flex justify-center text-center mt-7">
           <div className="container mx-auto px-6 top-36 absolute">
             
             <h1 className="text-4xl md:text-4xl sm:text-4xl font-bold mt-10 animate-pulse text-white text-center">
               Experience the ultimate nightlife — a vibrant karaoke bar and
               energetic night club all in one place at 
               <span className="text-customGreen-960 ml-4">BAUHAUS</span>
             </h1>
           </div>
         </div>
       </header>

       <div className="text-center py-8"></div>

       <div className="container mx-auto px-4 py-8">
         <div className="grid grid-cols-1  lg:grid-cols-3 gap-8">
           {SERVICES.map((service) => (
             <ServiceCard
               key={service.id}
               service={service}
               onBook={handleBookService}
               onReadMore={handleReadMore}
             />
           ))}
         </div>
       </div>

       <Modal
         isOpen={isModalOpen}
         onClose={() => setIsModalOpen(false)}
         title={`Book ${selectedService?.title || "Service"}`}
       >
         <BookingForm
           selectedService={selectedService}
           onClose={() => setIsModalOpen(false)}
           onSuccess={() => {
             setIsModalOpen(false);
             setIsSuccessModalOpen(true);
           }}
         />
       </Modal>

       <SuccessModal
         isOpen={isSuccessModalOpen}
         onClose={() => setIsSuccessModalOpen(false)}
       />
     </div>
   );
 };

 export default ServicesPage;