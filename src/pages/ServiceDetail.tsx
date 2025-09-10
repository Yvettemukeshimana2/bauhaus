 import React from "react";
 import { Star, ChevronLeft, Check } from "lucide-react";
 import img1 from "../assets/images/LOLA-Event-Productions-Moody-Wedding-Chicago-Harold-Washington-Library_0633.jpg";
 import testmony from "../assets/images/testimony1.jpg";
 import testmony1 from "../assets/images/testmony2.jpg";
 import wed1 from "../assets/images/weeding2.jpg"
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
     title: "DO YOU NEED EVENT OR WEDDING PLANNING SERVICES?",
     description:
       "We created MHS intending to make special events more memorable by simplifying one very important event and wedding planning process. We take the pressure off of the host, guaranteeing responsibility by making follow-ups.Our event or wedding planning involves a wide range of tasks and responsibilities which are full planning, partial planning, and monthly-of coordination by assisting with the design, planning, management, and coordinating whether in a wedding, corporate event, birthday, cocktail party, corporate mixer, or any special event by ensuring that ceremony runs smoothly and meets the client's objectives.Are you ready to plan and make the wedding or event of your dreams come to life with MHS?",
     fullDescription:
       "  Wedding planning services help couples organize their special day by handling details such as venue selection, vendor coordination, budget management, and event design, ensuring a seamless and memorable celebration",
     features: [
        "Venue Scouting",
       "Full Vendor Resourcing",
       " Floor Plan Design",
       " Mood Board & Design",
       " Budget Analysis",
       " Timeline Development & Management",
       " Vendor Coordination",
       " Client & Vendor Meetings",
       " Venue Walk-through",
       " Ceremony Rehearsal",
       " Unlimited Phone & Email Communication",
       " Day-of Coordination through the breakdown",
     
     ],
     images: ["/src/assets/plan2.jpeg", "/src/assets/plan4.jpeg", wed1],
     testimonials: [
       {
         id: 1,
         name: "Sarah Johnson",
         role: "Corporate Executive",
         comment: "The team anticipated my needs perfectly!",
         rating: 5,
         avatar: testmony,
       },
       {
         id: 2,
         name: "Sarah ",
         role: "Corporate Executive",
         comment: "The team anticipated my needs perfectly!",
         rating: 5,
         avatar: testmony1,
       },
     ],
   },
   {
     id: 2,
     title: "DO YOU NEED EVENT STAFFING SOLUTIONS SERVICE?",
     description:
       "  Bauhaus is your full-service staffing solution, specializing in On-time, well-groomed, professionally mannered, and experienced temporary and full-time staff. We screen, Test, interview, and train all hospitality staff. The Bauhaus team is a part of your event's success by helping to establish your ceremony as one that is defined by a good sense of professionalism in corporate and private Events. Includes Event Planners, Protocol Officers, Waiter Staff, Bartenders, Baristas, Mixologists, Private Chefs, Housekeepers, and more! We have worked with a wide variety of hotels, large-scale events venues, weddings, catering companies, event organizers, and ceremonies for more than five years of experience with an illustrious career spanning the hospitality industry.                                   ",
     fullDescription:
       " Bauhaus is your full-service staffing solution, specializing in On-time, well-groomed, professionally mannered, and experienced temporary and full-time staff. We screen, Test, interview, and train all hospitality staff.   The Bauhaus team is a part of your event's success by helping to establish your ceremony as one that is defined by a good sense of professionalism in corporate and private Events.   and Wedding Planners, Protocol Officers, Waiter Staff, Bartenders, Baristas, Mixologists, Private Chefs, Housekeepers, and more! We have worked with a wide variety of hotels, large-scale events venues, weddings, catering companies, event organizers, and ceremonies for more than five years of experience with an illustrious career spanning the hospitality industry. ",
     features: [
       "24/7 availability",
       "Comprehensive travel planning",
       "Restaurant bookings",
       "Event management",
       "Personal shopping",
       "Emergency assistance",
       "Access to exclusive events",
     ],
     images: [
       "https://d3tl80hy6t5toy.cloudfront.net/wp-content/uploads/sites/3/2012/10/10110233/careers-in-hotel-management.jpg",
       "https://myaolcc.com/wp-content/uploads/2019/10/Oct-16-hospitality-training-1200x800-1.jpg",
       "https://esoftskills.com/hospitality/wp-content/uploads/2023/11/Building-a-Strong-Hospitality-Team-Through-Training-and-Development.jpg",
     ],
     testimonials: [
       {
         id: 1,
         name: "Sarah Johnson",
         role: "Corporate Executive",
         comment: "The team anticipated my needs perfectly!",
         rating: 5,
         avatar: testmony,
       },
       {
         id: 2,
         name: "Sarah ",
         role: "Corporate Executive",
         comment: "The team anticipated my needs perfectly!",
         rating: 5,
         avatar: testmony1,
       },
     ],
   },
   {
     id: 3,
     title: " DO YOU NEED EVENT CATERING SERVICES?",
     description:
       " We’ve got you covered.  Our caterers provide food and drinks for weddings and events, dinner parties, and any special events at a range of different venues. We are in charge of preparing, delivering, and serving bulk meal orders to clients based on their menu selection and event type. we also have a mobile bar service that provides a fully stocked bar and trained staff such as mixologists or bartenders for preparing your cocktails, coffee, and tea for high-end events, weddings, corporate events, private parties, and any special events.",
     fullDescription:
       "  Bauhaus provide menu customization to setup and cleanup, these services ensure a seamless dining experience for occasions like weddings, corporate gatherings, and parties, tailored to guests' preferences and dietary needs",
     features: [
       "Venue Scouting",
       "Full Vendor Resourcing",
       " Floor Plan Design",
       " Mood Board & Design",
       " Budget Analysis",
       " Timeline Development & Management",
       " Vendor Coordination",
       " Client & Vendor Meetings",
       " Venue Walk-through",
       " Ceremony Rehearsal",
       " Unlimited Phone & Email Communication",
       " Day-of Coordination through the breakdown",
     ],
     images: [
       " https://i.pinimg.com/736x/4c/0a/3c/4c0a3c451352432b9662fd47871e4f2b.jpg",
       " https://d2fryjlmubyuuh.cloudfront.net/wp-content/uploads/2024/04/07221435/chasse-sauvage-zlUGL4hBHcw-unsplash-1-1-scaled-e1713171328131-jpg.webp",
       " https://i.pinimg.com/736x/30/6c/66/306c66b16bc3013a296c061d2d8e9ee8.jpg",
     ],
     testimonials: [
       {
         id: 1,
         name: "Sarah Johnson",
         role: "Corporate Executive",
         comment: "The team anticipated my needs perfectly!",
         rating: 5,
         avatar: testmony,
       },
       {
         id: 2,
         name: "Sarah ",
         role: "Corporate Executive",
         comment: "The team anticipated my needs perfectly!",
         rating: 5,
         avatar: testmony1,
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
   onBookService,
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
           src={img1}
           loading="lazy"
           alt="Our Services"
           className="w-full h-96 object-cover opacity-40 bg-black"
         />
         <div className="absolute inset-0 flex justify-center top-32 text-center">
           <div className="container mx-auto px-6 absolute">
             <h1 className="text-2xl ml-5 lg:text-6xl text-white font-semibold">
               Bauhaus
             </h1>
             <h1 className="text-yellow-500 text-xs pl-5 font-semibold">
               Bauhaus Entertainment
             </h1>
             <h1 className="text-4xl md:text-4xl sm:text-4xl font-bold mt-10 animate-pulse text-white text-center">
               PREMIUM <span className="text-yellow-500 ">ENTERTAINMENT</span>
             </h1>
           </div>
         </div>
       </header>

       <header className="mb-8 p-10 text-center">
         <h1 className="text-4xl font-bold text-yellow-500">{service.title}</h1>
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

       <section className="mb-12 bg-yellow-500 opacity-70 rounded-lg p-8 text-center">
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
       <section className="mb-12 text-center">
         <h2 className="text-2xl font-bold mb-6 text-yellow-500">
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
       </section>
       <footer className="flex items-center justify-center mb-10 space-x-4">
         <button
           onClick={onBackClick}
           className="flex items-center text-yellow-600 hover:text-yellow-500"
         >
           <ChevronLeft className="w-5 h-5 mr-1" />
           Back to Services
         </button>
         <button
           onClick={onBookService}
           className="px-6 py-3 bg-yellow-600 text-black rounded-lg hover:bg-white hover:border-yellow-500 border-2"
         >
           Book This Service
         </button>
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
