// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// import im1 from "../assets/images/DSC_3894.jpg";
// import im6 from "../assets/images/testimony1.jpg";
// import im2 from "../assets/images/testmony2.jpg";
// import im3 from "../assets/images/weeding2.jpg";
// import im4 from "../assets/images/3U8A0855.jpg";
// import im5 from "../assets/images/3U8A1253.jpg";

// interface Inspiration {
//   id: string;
//   title: string;
//   image: string;
//   message: string;
// }

// const inspirations: Inspiration[] = [
//   {
//     id: "pamella-wedding",
//     title: "Pamella Wedding",
//     image: im1,
//     message:
//       "Bauhaus made my wedding stress-free and elegant. Their staff handled everything perfectly from ceremony to reception!",
//   },
//   {
//     id: "annie-black-show",
//     title: "Annie Black Show Offs",
//     image: im6,
//     message:
//       "The show was classy and energetic, thanks to the ambiance and attention to detail provided by Bauhaus.",
//   },
//   {
//     id: "lounge-party",
//     title: "Lounge Party",
//     image: im2,
//     message:
//       "A perfect night to remember. Muhe’s team set the vibe just right—comfort, class, and perfect service.",
//   },
//   {
//     id: "kigali-summer-vegas",
//     title: "Kigali Summer Vegas",
//     image: im3,
//     message:
//       "Bauhaus made our summer show unforgettable with seamless coordination and top-tier service.",
//   },
//   {
//     id: "point-up-show",
//     title: "Kigali Point Up Show",
//     image: im4,
//     message:
//       "Great atmosphere, excellent setup, and everything handled professionally by Muhe.",
//   },
//   {
//     id: "davi-house-port",
//     title: "Davi House Port",
//     image: im5,
//     message:
//       "A top-notch experience, from decor to catering. Muhe is simply the best!",
//   },
// ];

// const InspirationDetailPage: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const navigate = useNavigate();

//   const inspiration = inspirations.find((item) => item.id === id);

//   if (!inspiration) {
//     return (
//       <div className="flex flex-col items-center justify-center h-screen text-white bg-black">
//         <h1 className="text-3xl font-bold mb-4">Inspiration not found</h1>
//         <button
//           onClick={() => navigate(-1)}
//           className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600"
//         >
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen mt-16  text-white px-6 py-10 flex flex-col items-center">
//       <motion.div
//         className="max-w-4xl w-full"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <img
//           src={inspiration.image}
//           alt={inspiration.title}
//           className="w-full h-96 object-cover rounded-lg mb-6 shadow-lg"
//         />
//         <h1 className="text-xl font-bold text-yellow-500 mb-4">
//           {inspiration.title}
//         </h1>
//         <p className="text-sm text-gray-500 leading-relaxed">
//           {inspiration.message}
//         </p>

//         <div className="mt-8">
//           <button
//             onClick={() => navigate(-1)}
//             className="bg-yellow-500 text-black text-sm px-6 py-2 rounded hover:bg-yellow-600 transition"
//           >
//             ← Back to Inspirations
//           </button>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default InspirationDetailPage;
