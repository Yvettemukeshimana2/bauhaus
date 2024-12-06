 import React from "react";
 import { useParams, useLocation, useNavigate } from "react-router-dom";

 interface Card {
   id: number;
   title: string;
   fullDescription: string;
   imageUrl: string;
   additionalImages: string[];
 }

 const CardDetailPage: React.FC = () => {
   const { id } = useParams<{ id: string }>();
   const navigate = useNavigate();
   const location = useLocation();
   const card = location.state as Card;

   // Validate `id` to ensure correct data is displayed
   if (!card || card.id !== Number(id)) {
     return <p>Invalid card ID. Please return to the main page.</p>;
   }

   const goBack = () => navigate(-1);

   return (
     <div className="container mx-auto px-4 py-16">
       <button
         className="mb-4 px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
         onClick={goBack}
       >
         Back
       </button>
       <h1 className="text-3xl font-bold text-yellow-500 flex text-center justify-center pt-4">{card.title}</h1>
       <img
         src={card.imageUrl}
         alt={card.title}
         className="w-full h-80 object-cover mt-6 rounded-lg shadow-md"
       />
       <div className="mt-8">
         <h2 className="text-2xl font-semibold text-gray-700 mb-4">
           Description
         </h2>
         <p className="text-gray-600 leading-relaxed">{card.fullDescription}</p>
       </div>
       <div className="mt-8">
         <h3 className="text-xl font-semibold text-gray-700 mb-4">
           More image
         </h3>
         <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
           {card.additionalImages.map((image, index) => (
             <img
               key={index}
               src={image}
               alt={`Additional ${index + 1}`}
               className="w-full h-40 object-cover rounded-lg shadow-md"
             />
           ))}
         </div>
       </div>
     </div>
   );
 };

 export default CardDetailPage;
