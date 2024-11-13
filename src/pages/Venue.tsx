 import React, { useState } from "react";
 import { useNavigate } from "react-router-dom";
 import Modal from "../pages/Venuemodal"; // Add this import
 import img1 from "../assets/images/LOLA-Event-Productions-Moody-Wedding-Chicago-Harold-Washington-Library_0636.jpg";

 interface Service {
   id: number;
   title: string;
   description: string;
   image: string;
 }

 const services: Service[] = [
   {
     id: 1,
     title: "Concierge",
     description: "Providing exceptional personal assistance services...",
     image:
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt6SOp6EmJ_b8ESp5-WOB1ha6ARMY2DCGx8g&s",
   },
   {
     id: 2,
     title: "Event Catering",
     description: "  provide food and beverage planning, preparation, and serving for events in all ...",
     image:"https://i.pinimg.com/originals/dc/ee/5a/dcee5a65bdc18a6fdc25bbb562828aaf.jpg",
   },
   {
     id: 3,
     title: "Social Media",
     description: " creating, scheduling, analyzing, and engaging with content posted on social media platforms like Facebook, Instagram,...",
     image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/social-media-marketing-expert-design-template-29fc1c8ac314052ec4ae171670723b4e_screen.jpg?ts=1634140094",
   },
   {
     id: 4,
     title: "Event Wedding",
     description: "Delicious and custom menus tailored for every event...",
     image: "https://i.pinimg.com/736x/66/60/19/66601944c33dfb68c17a2e8bdbb79630.jpg",
   },
   {
     id: 5,
     title: "Hospitality",
     description: "Delicious and custom menus tailored for every event...",
     image: "https://i.pinimg.com/736x/5f/2d/74/5f2d74bc7ca36b7d20611c9a90b069f1.jpg",
   },
   {
     id: 6,
     title: "Staffing",
     description: "Delicious and custom menus tailored for every event...",
     image: "https://www.partyhelp4u.com/wp-content/uploads/2024/07/DALL%C2%B7E-2024-07-29-14.06.09-A-featured-image-representing-professional-food-servers-for-hire-showing-a-team-of-well-dressed-servers-at-an-elegant-event-setup.-The-servers-are-we-768x768.webp",
   },
 ];
   // ... your existing services array stays exactly the same ...
  

 // BookingForm component to be used inside the modal
 const BookingForm: React.FC<{
   selectedService?: Service;
   onClose: () => void;
 }> = ({ selectedService, onClose }) => {
   const [formData, setFormData] = useState({
     contactName: "",
     email: "",
     startDate: "",
     startTime: "",
     endDate: "",
     endTime: "",
     eventType: selectedService?.title || "",
   });

   const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     console.log("Form submitted:", formData);
     onClose();
   };

   const handleChange = (
     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
   ) => {
     const { name, value } = e.target;
     setFormData((prev) => ({
       ...prev,
       [name]: value,
     }));
   };

   return (
     <form onSubmit={handleSubmit} className="space-y-4">
       <div>
         <label className="block text-sm font-medium text-gray-700 mb-1">
           Contact Name
         </label>
         <input
           type="text"
           name="contactName"
           value={formData.contactName}
           onChange={handleChange}
           required
           className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
           placeholder="Your name"
         />
       </div>

       <div>
         <label className="block text-sm font-medium text-gray-700 mb-1">
           Email
         </label>
         <input
           type="email"
           name="email"
           value={formData.email}
           onChange={handleChange}
           required
           className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
           placeholder="your.email@example.com"
         />
       </div>

       <div>
         <label className="block text-sm font-medium text-gray-700 mb-1">
           Event Type
         </label>
         <select
           name="eventType"
           value={formData.eventType}
           onChange={handleChange}
           required
           className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
         >
           <option value="">Select Event Type</option>
           {services.map((service) => (
             <option key={service.id} value={service.title}>
               {service.title}
             </option>
           ))}
         </select>
       </div>

       <div className="grid grid-cols-2 gap-4">
         <div>
           <label className="block text-sm font-medium text-gray-700 mb-1">
             Start Date
           </label>
           <input
             type="date"
             name="startDate"
             value={formData.startDate}
             onChange={handleChange}
             required
             className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
           />
         </div>
         <div>
           <label className="block text-sm font-medium text-gray-700 mb-1">
             Start Time
           </label>
           <input
             type="time"
             name="startTime"
             value={formData.startTime}
             onChange={handleChange}
             required
             className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
           />
         </div>
       </div>

       <div className="grid grid-cols-2 gap-4">
         <div>
           <label className="block text-sm font-medium text-gray-700 mb-1">
             End Date
           </label>
           <input
             type="date"
             name="endDate"
             value={formData.endDate}
             onChange={handleChange}
             required
             className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
           />
         </div>
         <div>
           <label className="block text-sm font-medium text-gray-700 mb-1">
             End Time
           </label>
           <input
             type="time"
             name="endTime"
             value={formData.endTime}
             onChange={handleChange}
             required
             className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
           />
         </div>
       </div>

       <button
         type="submit"
         className="w-full bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-700 transition-colors duration-200"
       >
         Book Now
       </button>
     </form>
   );
 };

 const ServicesPage: React.FC = () => {
   const navigate = useNavigate();
   // Add these state variables
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [selectedService, setSelectedService] = useState<
     Service | undefined
   >();

   const handleReadMore = (id: number) => {
     navigate(`/services/${id}`);
   };

   // Update this function
   const handleBookService = (service: Service) => {
     setSelectedService(service);
     setIsModalOpen(true);
   };

   return (
     <div className="bg-gray-100 min-h-screen">
       <header className="relative bg-black">
         <img
           src={img1}
           loading="lazy"
           alt="Our Services"
           className="w-full h-96 object-cover opacity-40 bg-black"
         />
         <h1 className="absolute animate-pulse top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
           Our Services
         </h1>
         <h1 className="text-5xl animate-bounce absolute top-1/2 left-1/2 md:text-5xl font-bold mt-10 text-white text-center">
           BATO <span className="text-yellow-500 ">BATARI GITO</span>
         </h1>
       </header>
       <div className="font-bold text-3xl flex justify-center items-center p-2 text-yellow-600">
         WE PLANN YOUR EVENT
       </div>
       <section className="p-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
         {services.map((service) => (
           <div
             key={service.id}
             className="bg-white rounded-lg border-2 border-yellow-600 shadow-lg overflow-hidden"
           >
             <img
               src={service.image}
               alt={service.title}
               loading="lazy"
               className="w-full h-40 object-cover"
             />
             <div className="p-6">
               <h2 className="text-xl font-bold mb-2">{service.title}</h2>
               <p className="text-gray-700">{service.description}</p>
               <div className="mt-4 flex space-x-4">
                 <button
                   onClick={() => handleReadMore(service.id)}
                   className="text-black p-1 rounded-md hover:text-yellow-700 border-2 border-yellow-500"
                 >
                   Read More
                 </button>
                 <button
                   onClick={() => handleBookService(service)}
                   className="text-yellow-500 font-bold hover:text-yellow-700"
                 >
                   Book Service
                 </button>
               </div>
             </div>
           </div>
         ))}
       </section>

       {/* Add the Modal component here, right before the closing div */}
       <Modal
         isOpen={isModalOpen}
         onClose={() => setIsModalOpen(false)}
         title={`Book ${selectedService?.title || "Service"}`}
         maxWidth="max-w-lg"
       >
         <BookingForm
           selectedService={selectedService}
           onClose={() => setIsModalOpen(false)}
         />
       </Modal>
     </div>
   );
 };

 export default ServicesPage;