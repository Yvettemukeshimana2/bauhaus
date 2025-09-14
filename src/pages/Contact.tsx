 import { useForm } from "react-hook-form";
 import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
  import { motion } from "framer-motion";

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
     <div className="min-h-screen bg-gray-50">
       {/* Hero Section */}
       <header className="relative bg-black overflow-hidden">
         <motion.img
           initial={{ scale: 1.2 }}
           animate={{ scale: 1 }}
           transition={{ duration: 1.5 }}
           src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
           loading="lazy"
           alt="Bauhaus Entertainment Contact"
           className="w-full h-96 object-cover opacity-40"
         />
         <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
           <motion.div
             initial={{ y: -50, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 1, delay: 0.5 }}
             className="text-center"
           >
             <h1 className="text-4xl lg:text-6xl text-white font-bold mb-2">
               Contact Us
             </h1>
             <h2 className="text-customGreen-960 text-lg lg:text-xl font-semibold mb-4">
               Bauhaus Entertainment
             </h2>
             <p className="text-white text-lg lg:text-xl max-w-2xl mx-auto">
               Get in touch with us for reservations, inquiries, or to plan your
               perfect night out
             </p>
           </motion.div>
         </div>
       </header>
       {/* Main Content */}
       <div className="max-w-7xl mx-auto px-4 py-16">
         <div className="text-center mb-12">
           <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
             We'd Love to Hear From You
           </h2>
           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
             Whether you're planning a special event, want to make a
             reservation, or have any questions about our venues, we're here to
             help!
           </p>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           {/* Contact Information */}
           <div className="bg-white rounded-xl shadow-xl p-8">
             <div className="flex items-center mb-8">
               <MessageCircle className="w-8 h-8 text-customGreen-960 mr-3" />
               <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
                 Contact Information
               </h2>
             </div>
             {/* Map */}
             <div className="w-full h-64 bg-gray-200 mb-8 rounded-lg overflow-hidden shadow-lg">
               <iframe
                 title="Bauhaus Entertainment Location"
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.731971859826!2d30.0648!3d-1.9444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca7eae2393d07%3A0x354d5a92d5c8!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2s!4v1686102805929!5m2!1sen!2s"
                 width="100%"
                 height="100%"
                 style={{ border: 0 }}
                 loading="lazy"
                 allowFullScreen
               ></iframe>
             </div>

             {/* Contact Details */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                 <div className="bg-customGreen-960 p-3 rounded-full">
                   <MapPin className="w-6 h-6 text-white" />
                 </div>
                 <div>
                   <h3 className="font-bold text-lg text-gray-800 mb-1">
                     Address
                   </h3>
                   <p className="text-gray-600">
                     KN 169 ST Nyamirambo, Kigali – Rwanda
                   </p>
                   <p className="text-gray-600">24X8+MM Kigali</p>
                 </div>
               </div>

               <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                 <div className="bg-customGreen-960 p-3 rounded-full">
                   <Phone className="w-6 h-6 text-white" />
                 </div>
                 <div>
                   <h3 className="font-bold text-lg text-gray-800 mb-1">
                     Phone
                   </h3>
                   <p className="text-gray-600">(+250) 788816126</p>
                   <p className="text-gray-600">(+250) 788 647 315</p>
                   <p className="text-sm text-gray-500">
                     Call for reservations
                   </p>
                 </div>
               </div>

               <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                 <div className="bg-customGreen-960 p-3 rounded-full">
                   <Mail className="w-6 h-6 text-white" />
                 </div>
                 <div>
                   <h3 className="font-bold text-lg text-gray-800 mb-1">
                     Email
                   </h3>
                   <p className="text-gray-600">bauhausltd01@gmail.com</p>
                   <p className="text-sm text-gray-500">
                     We'll respond within 24 hours
                   </p>
                 </div>
               </div>

               <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                 <div className="bg-customGreen-960 p-3 rounded-full">
                   <Clock className="w-6 h-6 text-white" />
                 </div>
                 <div>
                   <h3 className="font-bold text-lg text-gray-800 mb-1">
                     Operating Hours
                   </h3>
                   <p className="text-gray-600">Bar: 1:00 PM - 5:00 AM</p>
                   <p className="text-gray-600">Karaoke: 6:00 PM - 2:00 AM</p>
                   <p className="text-gray-600">
                     Night Club: Thu-Sun 9:00 PM - 4:00 AM
                   </p>
                 </div>
               </div>
             </div>
           </div>
           {/* Contact Form */}
           <div className="bg-white rounded-xl shadow-xl p-8">
             <div className="flex items-center mb-8">
               <MessageCircle className="w-8 h-8 text-customGreen-960 mr-3" />
               <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
                 Send Us a Message
               </h2>
             </div>

             <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <label className="block text-sm font-medium text-gray-700">
                     Full Name *
                   </label>
                   <input
                     {...register("name", {
                       required: "Name is required",
                       minLength: {
                         value: 2,
                         message: "Name must be at least 2 characters",
                       },
                     })}
                     type="text"
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-customGreen-960 focus:border-customGreen-960 transition-colors"
                     placeholder="Enter your full name"
                   />
                   {errors.name && (
                     <p className="text-sm text-red-600">
                       {errors.name.message}
                     </p>
                   )}
                 </div>

                 <div className="space-y-2">
                   <label className="block text-sm font-medium text-gray-700">
                     Email Address *
                   </label>
                   <input
                     {...register("email", {
                       required: "Email is required",
                       pattern: {
                         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                         message: "Invalid email address",
                       },
                     })}
                     type="email"
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-customGreen-960 focus:border-customGreen-960 transition-colors"
                     placeholder="your.email@example.com"
                   />
                   {errors.email && (
                     <p className="text-sm text-red-600">
                       {errors.email.message}
                     </p>
                   )}
                 </div>
               </div>

               <div className="space-y-2">
                 <label className="block text-sm font-medium text-gray-700">
                   Subject *
                 </label>
                 <input
                   {...register("subject", {
                     required: "Subject is required",
                     minLength: {
                       value: 5,
                       message: "Subject must be at least 5 characters",
                     },
                   })}
                   type="text"
                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-customGreen-960 focus:border-customGreen-960 transition-colors"
                   placeholder="What's this about?"
                 />
                 {errors.subject && (
                   <p className="text-sm text-red-600">
                     {errors.subject.message}
                   </p>
                 )}
               </div>

               <div className="space-y-2">
                 <label className="block text-sm font-medium text-gray-700">
                   Message *
                 </label>
                 <textarea
                   {...register("message", {
                     required: "Message is required",
                     minLength: {
                       value: 10,
                       message: "Message must be at least 10 characters",
                     },
                   })}
                   rows={6}
                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-customGreen-960 focus:border-customGreen-960 transition-colors resize-none"
                   placeholder="Tell us how we can help you..."
                 />
                 {errors.message && (
                   <p className="text-sm text-red-600">
                     {errors.message.message}
                   </p>
                 )}
               </div>

               <button
                 type="submit"
                 className="w-full bg-customGreen-960 text-white font-bold py-3 px-6 rounded-lg hover:bg-customGreen-800 focus:outline-none focus:ring-2 focus:ring-customGreen-960 focus:ring-offset-2 transition-colors duration-200"
               >
                 Send Message
               </button>
             </form>

             {isSubmitSuccessful && (
               <div className="mt-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
                 <div className="flex items-center">
                   <div className="flex-shrink-0">
                     <svg
                       className="h-5 w-5 text-green-400"
                       viewBox="0 0 20 20"
                       fill="currentColor"
                     >
                       <path
                         fillRule="evenodd"
                         d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                         clipRule="evenodd"
                       />
                     </svg>
                   </div>
                   <div className="ml-3">
                     <p className="text-sm font-medium">
                       Thank you for your message! We'll get back to you within
                       24 hours.
                     </p>
                   </div>
                 </div>
               </div>
             )}
           </div>
         </div>
       </div>
     </div>
   );
 };

 export default ContactPage;
