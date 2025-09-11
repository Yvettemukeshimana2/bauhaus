 import React from "react";
 import {  ChevronLeft, Check } from "lucide-react";
 import n1 from "../assets/NNN[1](1).jpg";
 import n2 from "../assets/uu.jpg";
 import k1 from "../assets/X1.jpg";
 import k2 from "../assets/XX.jpg";
 import k3 from "../assets/XXX.jpg";
 import b1 from "../assets/B.jpg";
 import b2 from "../assets/BB.jpg"
 import wed1 from "../assets/c.jpg"
 interface Service {
   id: number;
   title: string;
   description: string;
   fullDescription: string;
   features: string[];
   images: string[];
   testimonials: {
     id: number;
     name: string;
     role: string;
     comment: string;
     rating: number;
     avatar: string;
   }[];
 }

 const services: Service[] = [
    {
  id: 1,
  title: "EXPERIENCE KARAOKE AT BAUHAUS",
  description:
    "Bauhaus brings you the ultimate karaoke experience! Sing your favorite hits in our private rooms with premium sound, extensive song selection, and themed karaoke nights. Perfect for birthdays, parties, or a night out with friends — all in a vibrant and fun atmosphere.",
  fullDescription:
    "Our karaoke rooms at Bauhaus feature high-quality sound systems, professional microphones, and a vast library of songs across all genres. Whether it's a small gathering or a large celebration, we ensure a fun, safe, and unforgettable karaoke night.",
  features: [
    "Private Karaoke Rooms",
    "Premium Sound System",
    "10,000+ Song Library",
    "Themed Karaoke Nights",
    "Birthday & Party Packages",
    "Professional Microphones",
    "Dance & Sing Competitions",
    "Drink & Snack Service",
    "Ambient LED Lighting",
    "Reservation & Scheduling",
    "Friendly Staff Assistance",
    "Safe & Comfortable Environment",
  ],
  images: [
    k1,
    k2,
    k3
  ],
  testimonials: [
    {
      id: 1,
      name: "James Carter",
      role: "Music Lover",
      comment: "Bauhaus karaoke is next-level fun! Amazing sound and perfect vibe.",
      rating: 5,
      avatar: "/src/assets/testimony_karaoke1.jpeg",
    },
    {
      id: 2,
      name: "Emily Smith",
      role: "Party Enthusiast",
      comment: "Had my birthday here — the karaoke rooms were incredible and the staff was super helpful!",
      rating: 5,
      avatar: "/src/assets/testimony_karaoke2.jpeg",
    },
  ],
},
    {
  id: 2,
  title: "EXPERIENCE THE NIGHT AT BAUHAUS NIGHT CLUB",
  description:
    "Bauhaus Night Club brings the ultimate nightlife experience! Dance to world-class DJs, enjoy premium drinks, and immerse yourself in dazzling lights and high-energy music. Perfect for parties, celebrations, or a night out with friends in an electrifying atmosphere.",
  fullDescription:
    "Our night club features state-of-the-art sound and lighting systems, VIP sections, themed party nights, and professional bartenders. Whether celebrating a special occasion or just enjoying the nightlife, Bauhaus ensures a safe, vibrant, and unforgettable clubbing experience.",
  features: [
    "World-Class DJs",
    "VIP Bottle Service",
    "LED Lighting & Visual Effects",
    "Themed Party Nights",
    "Dance Floor with Professional Lighting",
    "Exclusive VIP Sections",
    "Premium Spirits & Cocktails",
    "Cocktail & Drink Specials",
    "Professional Bartenders",
    "Reservation & Scheduling",
    "Friendly Staff Assistance",
    "Safe & Vibrant Environment",
  ],
  images: [
    n1,
    n2
  ],
  testimonials: [
    {
      id: 1,
      name: "David Johnson",
      role: "Nightlife Enthusiast",
      comment: "The club vibe at Bauhaus is incredible — music, lights, and energy all perfect!",
      rating: 5,
      avatar: "/src/assets/testimony_nightclub1.jpeg",
    },
    {
      id: 2,
      name: "Sophia Lee",
      role: "Party Goer",
      comment: "Amazing DJs and VIP experience. Bauhaus Night Club never disappoints!",
      rating: 5,
      avatar: "/src/assets/testimony_nightclub2.jpeg",
    },
  ],
}
,
    {
  id: 3,
  title: "ENJOY PREMIUM DRINKS AT BAUHAUS BAR",
  description:
    "Bauhaus Bar offers a vibrant lounge atmosphere where you can unwind with expertly crafted cocktails, premium spirits, craft beers, and fine wines. Perfect for casual evenings, after-work drinks, or special celebrations, our bar ensures a memorable experience with great drinks and a lively ambiance.",
  fullDescription:
    "Our bar provides menu customization, signature cocktails, and a sophisticated yet relaxed environment. With skilled bartenders, ambient lighting, and comfortable seating, Bauhaus Bar guarantees a perfect place to socialize, celebrate, or simply enjoy a great drink.",
  features: [
    "Expert Mixologists",
    "Signature Cocktails",
    "Premium Spirits Collection",
    "Craft Beer Selection",
    "Wine Tasting Events",
    "Happy Hour Specials",
    "Private Lounge Areas",
    "Ambient Lighting & Music",
    "Reservation & Scheduling",
    "Friendly Staff Assistance",
    "Safe & Comfortable Environment",
    "Custom Drink Menus for Events",
  ],
  images: [
     b1,
     b2
  ],
  testimonials: [
    {
      id: 1,
      name: "Michael Brown",
      role: "Cocktail Enthusiast",
      comment: "Amazing cocktails and a perfect vibe for a relaxed evening!",
      rating: 5,
      avatar: "/src/assets/testimony_bar1.jpeg",
    },
    {
      id: 2,
      name: "Laura Davis",
      role: "Bar Lover",
      comment: "Bauhaus Bar never disappoints! Great drinks and friendly staff.",
      rating: 5,
      avatar: "/src/assets/testimony_bar2.jpeg",
    },
  ],
},
 ];
 interface ServiceDetailProps {
   serviceId: number;
   onBookService: () => void;
   onBackClick: () => void;
 }

 const ServiceDetail: React.FC<ServiceDetailProps> = ({
   serviceId,
//    onBookService,
   onBackClick,
 }) => {
   const service = services.find((s) => s.id === serviceId);

   if (!service) {
     return <div className="mt-36 p-10 text-red-500">Service not found</div>;
   }

   return (
     <div className=" h-full">
       <header className="relative bg-black">
         <img
           src={wed1}
           loading="lazy"
           alt="Our Services"
           className="w-full h-96 object-cover opacity-40 bg-black"
         />
         <div className="absolute inset-0 flex justify-center top-32 text-center">
           <div className="container mx-auto px-6 absolute">
             <h1 className="text-2xl ml-5 lg:text-4xl text-white font-semibold">
               Bauhaus
             </h1>

             <h1 className="text-4xl md:text-2xl sm:text-4xl font-bold mt-10 animate-pulse text-white text-center">
               Experience the ultimate nightlife — a vibrant karaoke bar and
               energetic night club all in one place at BAUHAUS
             </h1>
           </div>
         </div>
       </header>

       <header className="mb-8 p-10 text-center">
         <h1 className="text-2xl font-bold text-customGreen-960">
           {service.title}
         </h1>
         <p className="mt-4 text-lg text-gray-600">{service.description}</p>
       </header>

       <div className="flex gap-4 mb-12 pl-20 pr-20 h-72">
         {service.images.slice(0, 3).map((image, index) => (
           <div key={index} className="flex-1 overflow-hidden rounded-lg">
             <img
               src={image}
               loading="lazy"
               alt={`${service.title} image ${index + 1}`}
               className="w-full h-full object-cover"
             />
           </div>
         ))}
       </div>

       <section className="mb-12 bg-custtext-customGreen-960 opacity-70 rounded-lg p-8 text-center">
         <h2 className="text-3xl font-bold mb-4 text-yellow-200">
           About This Service
         </h2>
         <p className="text-black mb-8 font-normal">
           {service.fullDescription}
         </p>

         <h3 className="text-xl font-semibold mb-4 text-white">Features</h3>
         <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-44">
           {service.features.map((feature, idx) => (
             <li key={idx} className="flex items-center space-x-2">
               <Check className="text-yellow-700" />
               <span>{feature}</span>
             </li>
           ))}
         </ul>
       </section>
       {/* <section className="mb-12 text-center">
         <h2 className="text-2xl font-bold mb-6 text-customGreen-960">
           Client Testimonials
         </h2>
         <div className="grid gap-6 md:grid-cols-2 p-10">
           {service.testimonials.map((testimonial) => (
             <article
               key={testimonial.id}
               className="bg-white p-6 rounded-lg shadow-md"
             >
               <div className="flex items-center mb-4">
                 <img
                   src={testimonial.avatar}
                   loading="lazy"
                   alt={`${testimonial.name}'s avatar`}
                   className="w-20 h-20 rounded-full mr-4"
                 />
                 <div>
                   <h3 className="font-semibold">{testimonial.name}</h3>
                   <p className="text-sm text-gray-600">{testimonial.role}</p>
                 </div>
               </div>
               <div className="flex mb-2">
                 {Array.from({ length: testimonial.rating }).map((_, i) => (
                   <Star key={i} className="text-yellow-400" />
                 ))}
               </div>
               <p className="text-gray-700">{testimonial.comment}</p>
             </article>
           ))}
         </div>
       </section> */}
       <footer className="flex items-center justify-center mb-10 space-x-4">
         <button
           onClick={onBackClick}
           className="flex items-center text-yellow-600 hover:text-customGreen-960"
         >
           <ChevronLeft className="w-5 h-5 mr-1" />
           Back to Services
         </button>
         {/* <button
           onClick={onBookService}
           className="px-6 py-3 bg-yellow-600 text-black rounded-lg hover:bg-white hover:border-custtext-customGreen-960 border-2"
         >
           Book This Service
         </button> */}
       </footer>
       <style>{`
        .animate-marquee {
          animation: marquee 10s linear infinite;
          white-space: nowrap;
        }

        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
     </div>
   );
 };

 export default ServiceDetail;
