 import {ChevronRight,Clock,Music,Users,Wine,Star,MapPin,Phone} from "lucide-react";
 import { motion } from "framer-motion";
 import { Link } from "react-router-dom";

 const AboutUs = () => {

   const venues = [
     {
       title: "Karaoke Lounge",
       icon: <Music className="w-8 h-8 text-customGreen-960" />,
       image: "https://wallpapercave.com/wp/wp9577449.jpg",
       description:
         "Sing your heart out in our premium karaoke lounge with thousands of songs, private rooms, and professional sound systems for unforgettable musical experiences.",
       operatingHours: "Monday - Sunday: 6:00 PM - 2:00 AM",
       features: [
         "Private karaoke rooms",
         "10,000+ song library",
         "Professional sound systems",
         "Themed karaoke nights",
         "Group competitions",
       ],
     },
     {
       title: "Night Club",
       icon: <Users className="w-8 h-8 text-customGreen-960" />,
       image:
         "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
       description:
         "Dance the night away in our electrifying night club with world-class DJs, VIP sections, signature cocktails, and stunning light shows.",
       operatingHours: "Thursday - Sunday: 9:00 PM - 4:00 AM",
       features: [
         "World-class DJs",
         "VIP bottle service",
         "LED lighting systems",
         "Themed party nights",
         "Exclusive VIP sections",
       ],
     },
     {
       title: "Premium Bar",
       icon: <Wine className="w-8 h-8 text-customGreen-960" />,
       image:
         "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
       description:
         "Enjoy expertly crafted cocktails, premium spirits, and exceptional bar service in our stylish lounge atmosphere with professional mixologists.",
       operatingHours: "Monday - Sunday: 5:00 AM - 22:00 PM",
       features: [
         "Expert mixologists",
         "Premium spirits collection",
         "Craft beer selection",
         "Wine tasting events",
         "Cocktail making classes",
       ],
     },
   ];

   return (
     <div className="min-h-screen bg-white">
       <div className="h-[80vh] overflow-hidden bg-black relative">
         <motion.img
           initial={{ scale: 1.2 }}
           animate={{ scale: 1 }}
           transition={{ duration: 1.5 }}
           src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
           alt="Bauhaus Entertainment"
           loading="lazy"
           className="w-full h-96 object-cover pt-16 opacity-40"
         />
         <div className="absolute inset-0 flex justify-center text-center mt-7">
           <div className="container mx-auto px-6 top-36 absolute">
             <h1 className="text-2xl ml-5 lg:text-6xl text-white font-semibold">
               Bauhaus
             </h1>
             <h1 className="text-customGreen-960 text-xs pl-5 font-semibold">
               Bauhaus Entertainment
             </h1>
             <h1 className="text-4xl md:text-4xl sm:text-4xl font-bold mt-10 animate-pulse text-white text-center">
               PREMIUM <span className="text-customGreen-960 ">ENTERTAINMENT</span>
             </h1>
           </div>
         </div>
       </div>

       <div className="text-center mb-20">
         <h2 className="lg:text-xl text-2xl font-bold mt-4">
           Our Entertainment Venues
         </h2>
         <p className="bg-gradient-to-t p-9 text-white lg:text-sm text-2xl m-10 from-customGreen-960 to-black">
             Experience the ultimate entertainment at Bauhaus with our three distinct venues: 
             Premium Bar, Karaoke Lounge, and Night Club. Each venue offers unique experiences 
             tailored to different moods and occasions.
         </p>
       </div>

       <div className="grid lg:grid-cols-1 grid-cols-1 gap-8 mb-20 max-w-6xl mx-auto px-4">
         {venues.map((venue) => (
           <div
             key={venue.title}
             className="bg-gray-50 rounded-lg p-8 shadow-lg"
           >
             <div className="flex flex-col lg:flex-row gap-6">
               <div className="lg:w-1/3">
                 <img
                   src={venue.image}
                   alt={venue.title}
                   className="w-full h-64 object-cover rounded-lg"
                 />
               </div>
               <div className="lg:w-2/3">
                 <div className="flex items-center mb-4">
                   {venue.icon}
                   <h3 className="text-4xl lg:text-2xl font-bold ml-3">
                     {venue.title}
                   </h3>
                 </div>
                 <p className="text-gray-600 lg:text-sm text-xl mb-4">
                   {venue.description}
                 </p>
                 <div className="flex items-center mb-4">
                   <Clock className="w-5 h-5 text-customGreen-960 mr-2" />
                   <span className="text-lg lg:text-sm font-semibold text-customGreen-960">
                     {venue.operatingHours}
                   </span>
                 </div>
                 <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                   {venue.features.map((feature, index) => (
                     <div key={index} className="flex items-center">
                       <ChevronRight className="w-4 h-4 text-customGreen-960 mr-1" />
                       <span className="text-sm lg:text-xs text-gray-600">
                         {feature}
                       </span>
                     </div>
                   ))}
                 </div>
               </div>
             </div>
           </div>
         ))}
       </div>

       {/* Operating Hours Section */}
       <div className="bg-yellow-50 rounded-lg p-8 mb-20 max-w-4xl mx-auto">
         <div className="flex items-center mb-8">
           <Clock className="w-8 h-8 text-customGreen-960" />
           <h3 className="text-4xl lg:text-2xl font-bold ml-3 text-customGreen-960">
             Operating Hours
           </h3>
         </div>
         <div className="grid lg:grid-cols-3 gap-6">
           {venues.map((venue, index) => (
             <div
               key={index}
               className="bg-white p-6 rounded-lg shadow"
             >
               <div className="flex items-center mb-3">
                 {venue.icon}
                 <h4 className="text-xl lg:text-lg font-bold ml-2">
                   {venue.title}
                 </h4>
               </div>
               <p className="text-gray-600 lg:text-sm text-lg font-semibold">
                 {venue.operatingHours}
               </p>
             </div>
           ))}
         </div>
         <div className="mt-6 text-center">
           <p className="text-gray-600 lg:text-sm text-lg">
             <strong>Note:</strong> Hours may vary on holidays and special events. 
             Please call ahead to confirm availability.
           </p>
         </div>
       </div>

       {/* Why Choose Bauhaus Section */}
       <div className="bg-gray-50 rounded-lg p-8 mb-20 max-w-6xl mx-auto">
         <h3 className="text-4xl lg:text-2xl font-bold text-center mb-8 text-customGreen-960">
           Why Choose Bauhaus Entertainment?
         </h3>
         <div className="grid lg:grid-cols-3 gap-8">
           <div className="text-center">
             <div className="bg-customGreen-960 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
               <Star className="w-8 h-8 text-white" />
             </div>
             <h4 className="text-xl lg:text-lg font-bold mb-3">Premium Experience</h4>
             <p className="text-gray-600 lg:text-sm text-lg">
               We provide top-tier entertainment with professional service, 
               high-quality equipment, and unforgettable experiences.
             </p>
           </div>
           <div className="text-center">
             <div className="bg-customGreen-960 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
               <Clock className="w-8 h-8 text-white" />
             </div>
             <h4 className="text-xl lg:text-lg font-bold mb-3">Flexible Hours</h4>
             <p className="text-gray-600 lg:text-sm text-lg">
               Open 7 days a week with extended hours to accommodate 
               your schedule and entertainment needs.
             </p>
           </div>
           <div className="text-center">
             <div className="bg-customGreen-960 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
               <Users className="w-8 h-8 text-white" />
             </div>
             <h4 className="text-xl lg:text-lg font-bold mb-3">Diverse Venues</h4>
             <p className="text-gray-600 lg:text-sm text-lg">
               Three unique venues under one roof - Bar, Karaoke, and Night Club 
               for every mood and occasion.
             </p>
           </div>
         </div>
       </div>

       {/* Contact Information Section */}
       <div className="bg-yellow-50 rounded-lg p-8 mb-20 max-w-4xl mx-auto">
         <h3 className="text-4xl lg:text-2xl font-bold text-center mb-8 text-customGreen-960">
           Visit Us Today
         </h3>
         <div className="grid lg:grid-cols-2 gap-8">
           <div className="flex items-center">
             <MapPin className="w-6 h-6 text-customGreen-960 mr-3" />
             <div>
               <h4 className="text-xl lg:text-lg font-bold">Location</h4>
               <p className="text-gray-600 lg:text-sm text-lg">
                 KN 169 St Nyamirambo, Kigali-Rwanda
               </p>
             </div>
           </div>
           <div className="flex items-center">
             <Phone className="w-6 h-6 text-customGreen-960 mr-3" />
             <div>
               <h4 className="text-xl lg:text-lg font-bold">Contact</h4>
               <p className="text-gray-600 lg:text-sm text-lg">
                 +250 788647315/+250788816126
               </p>
             </div>
           </div>
         </div>
         <div className="text-center mt-8">
           <Link to="/contactus">
             <button className="bg-custtext-customGreen-960 text-white text-lg px-8 py-3 rounded-lg hover:bg-yellow-700 transition-colors">
               Get Directions
             </button>
           </Link>
         </div>
       </div>
     </div>
   );
 };

 export default AboutUs;
