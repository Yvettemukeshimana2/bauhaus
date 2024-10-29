 import { useForm } from "react-hook-form";
 import { MapPin, Phone, Mail, Clock } from "lucide-react";
  import { motion } from "framer-motion";
  import bg from "../assets/images/3U8A0855.jpg"

 interface FormInputs {
   name: string;
   email: string;
   subject: string;
   message: string;
 }

 const ContactPage = () => {
   const {
     register,
     handleSubmit,
     reset,
     formState: { errors, isSubmitSuccessful },
   } = useForm<FormInputs>();

   const onSubmit = (data: FormInputs) => {
     console.log(data);
     reset();  
   };

   return (
     <motion.div
       initial={{ scale: 1.2 }}
       animate={{ scale: 1 }}
       transition={{ duration: 0}}
       className="min-h-screen bg-gray-50 "
     >
       <header className="relative item-center bg-black overflow-hidden">
         <motion.img
           initial={{ scale: 1.2 }}
           animate={{ scale: 1 }}
           transition={{ duration: 1.5 }}
           src={bg}
           alt="Our Services"
           className="w-full h-96 object-cover opacity-40 bg-black"
         />
         <motion.h1
           initial={{ y: -100, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ duration: 1, delay: 0.5 }}
           className="text-5xl absolute top-1/2 left-1/2 transform animate-bounce -translate-x-1/2 -translate-y-1/2 md:text-5xl font-bold text-white text-center"
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
           Contact Us
         </motion.button>
       </header>
       <div className="max-w-7xl mx-auto p-10 grid md:grid-cols-2 gap-8 ">
         <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-yellow-500">
           <h2 className="text-2xl font-bold mb-6 text-center ">
             Our Location
           </h2>
           <motion.div
             initial={{ y: 100, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 1, delay: 1.1 }}
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.4 }}
             className="w-full h-64 bg-gray-200 mb-6 rounded-lg overflow-hidden"
           >
             <iframe
               title="Kigali Office Location"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.731971859826!2d30.0648!3d-1.9444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca7eae2393d07%3A0x354d5a92d5c8!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2s!4v1686102805929!5m2!1sen!2s"
               width="100%"
               height="100%"
               style={{ border: 0 }}
               loading="lazy"
               allowFullScreen
             ></iframe>
           </motion.div>

           <div className="space-y-4">
             <div className="flex items-start space-x-3">
               <MapPin className="w-5 h-5 text-blue-600 mt-1" />
               <div>
                 <h3 className="font-semibold">Address</h3>
                 <p className="text-gray-600"> KG 17 Ave, Kigali – Rwanda</p>
                 <p className="text-gray-600"> 24X8+MM Kigali</p>
               </div>
             </div>

             <div className="flex items-start space-x-3">
               <Phone className="w-5 h-5 text-blue-600 mt-1" />
               <div>
                 <h3 className="font-semibold">Phone</h3>
                 <p className="text-gray-600">(+250) 788501009</p>
               </div>
             </div>

             <div className="flex items-start space-x-3">
               <Mail className="w-5 h-5 text-blue-600 mt-1" />
               <div>
                 <h3 className="font-semibold">Email</h3>
                 <p className="text-gray-600">info@muheservices.com</p>
               </div>
             </div>

             <div className="flex items-start space-x-3">
               <Clock className="w-5 h-5 text-blue-600 mt-1" />
               <div>
                 <h3 className="font-semibold">Working Hours</h3>
                 <p className="text-gray-600">
                   Monday - Friday: 8:00 AM - 6:00 PM
                 </p>
                 <p className="text-gray-600">Saturday: 9:00 AM - 3:00 PM</p>
               </div>
             </div>
           </div>
         </div>
         <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-yellow-500">
           <h2 className="text-2xl font-bold mb-6 text-center">Get in Touch</h2>
           <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
             <div className="space-y-2">
               <input
                 {...register("name", {
                   required: "Name is required",
                   minLength: {
                     value: 2,
                     message: "Name must be at least 2 characters",
                   },
                 })}
                 type="text"
                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                 placeholder="Your name"
               />
               {errors.name && (
                 <p className="mt-1 text-sm text-red-600">
                   {errors.name.message}
                 </p>
               )}
             </div>

             <div className="space-y-2">
               <input
                 {...register("email", {
                   required: "Email is required",
                   pattern: {
                     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                     message: "Invalid email address",
                   },
                 })}
                 type="email"
                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 "
                 placeholder="your.email@example.com"
               />
               {errors.email && (
                 <p className="mt-1 text-sm text-red-600">
                   {errors.email.message}
                 </p>
               )}
             </div>

             <div className="space-y-2">
               <input
                 {...register("subject", {
                   required: "Subject is required",
                   minLength: {
                     value: 5,
                     message: "Subject must be at least 5 characters",
                   },
                 })}
                 type="text"
                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                 placeholder="Message subject"
               />
               {errors.subject && (
                 <p className="mt-1 text-sm text-red-600">
                   {errors.subject.message}
                 </p>
               )}
             </div>

             <div className="space-y-2">
               <textarea
                 {...register("message", {
                   required: "Message is required",
                   minLength: {
                     value: 10,
                     message: "Message must be at least 10 characters",
                   },
                 })}
                 rows={5}
                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500"
                 placeholder="Your message"
               />
               {errors.message && (
                 <p className="mt-1 text-sm text-red-600">
                   {errors.message.message}
                 </p>
               )}
             </div>

             <button
               type="submit"
               className="w-96 font-bold sm:ml-16  border-2 hover:border-yellow-500 hover:bg-white text-black py-2 px-4 rounded-md bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-colors"
             >
               Send Message
             </button>
           </form>

           {isSubmitSuccessful && (
             <div className="mt-4 p-4 bg-green-50 text-yellow-700 rounded-md">
               Thank you for your message! We'll get back to you soon.
             </div>
           )}
         </div>
       </div>
     </motion.div>
   );
 };

 export default ContactPage;
