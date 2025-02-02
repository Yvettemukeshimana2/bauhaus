 import React, { useState, useEffect } from "react";
 import { X } from "lucide-react";

 type ItemType = {
   name: string;
   description?: string;
   image: string;
   types?: { name: string; price: number }[];
 };

 type ItemCategory =
   | "Chairs"
   | "Tables"
   | "Glass"
   | "DJ"
   | "Photography"
   | "Catering";

 type ItemTypeOption = {
   name: string;
   price: number;
 };

 type ItemModalProps = {
   item: ItemType | null;
   category: ItemCategory | null;
   onClose: () => void;
   onAddToCart: (
     category: ItemCategory,
     item: ItemType,
     type?: ItemTypeOption,
     quantity?: number
   ) => void;
 };

 const typeOptions: Record<ItemCategory, ItemTypeOption[]> = {
   Chairs: [
     { name: "Plastic Chair", price: 10 },
     { name: "Wooden Chair", price: 20 },
     { name: "Cushioned Chair", price: 25 },
     { name: "Chiavari Chair", price: 30 },
     { name: "Bar Stool", price: 15 },
   ],
   Tables: [
     { name: "Round Table", price: 50 },
     { name: "Rectangular Table", price: 60 },
     { name: "Cocktail Table", price: 40 },
     { name: "Banquet Table", price: 70 },
     { name: "Wooden Table", price: 55 },
   ],
   Glass: [
     { name: "Wine Glass", price: 20 },
     { name: "Beer Glass", price: 15 },
     { name: "Cocktail Glass", price: 25 },
     { name: "Shot Glass", price: 10 },
     { name: "Champagne Flute", price: 22 },
     { name: "Water Glass", price: 12 },
   ],
   DJ: [
     { name: "Basic DJ Package", price: 500 },
     { name: "Premium DJ Package", price: 800 },
     { name: "Full Night Entertainment", price: 1200 },
   ],
   Photography: [
     { name: "Basic Photo Coverage", price: 300 },
     { name: "Full Day Photography", price: 600 },
     { name: "Video + Photo Package", price: 900 },
   ],
   Catering: [
     { name: "Buffet Style", price: 25 },
     { name: "Plated Dinner", price: 40 },
     { name: "Cocktail Reception", price: 35 },
     { name: "Full Course Meal", price: 50 },
   ],
 };

 const ItemModal: React.FC<ItemModalProps> = ({
   item,
   category,
   onClose,
   onAddToCart,
 }) => {
   const [quantities, setQuantities] = useState<Record<string, number>>({});
   const [selectedType, setSelectedType] = useState<string | null>(null);
   const [availableTypes, setAvailableTypes] = useState<ItemTypeOption[]>([]);

   useEffect(() => {
     if (category && item) {
       setAvailableTypes(typeOptions[category] || []);
       setSelectedType(null);
       setQuantities({});
     }
   }, [category, item]);

   if (!item || !category) return null;

   const handleQuantityChange = (type: string, delta: number) => {
     setQuantities((prev) => ({
       ...prev,
       [type]: Math.max(0, (prev[type] || 0) + delta),
     }));
   };

   const handleAddToCart = () => {
     if (availableTypes.length > 0) {
       if (!selectedType) {
         alert("Please select a type");
         return;
       }

       const quantity = quantities[selectedType] || 0;
       if (quantity === 0) {
         alert("Please select a quantity");
         return;
       }

       const selectedItemType = availableTypes.find(
         (t) => t.name === selectedType
       );
       if (selectedItemType) {
         onAddToCart(
           category,
           { ...item, name: `${item.name} (${selectedItemType.name})` },
           selectedItemType,
           quantity
         );
       }
     } else {
       onAddToCart(category, item, undefined, 1);
     }

     onClose();
   };

   return (
     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
       <div className="bg-white rounded-lg p-6 w-1/2">
         <div className="flex justify-between items-center mb-4">
           <h2 className="text-2xl font-bold">{item.name}</h2>
           <button onClick={onClose}>
             <X className="text-gray-600" />
           </button>
         </div>

         <img
           src={item.image}
           alt={item.name}
           className="w-full h-32 object-cover rounded-lg mb-4"
         />

         {availableTypes.length > 0 ? (
           <>
             <h3 className="text-lg font-bold text-yellow-500 mb-2">
               Select Type
             </h3>
             <div className="grid grid-cols-2 gap-4">
               {availableTypes.map((type) => (
                 <div
                   key={type.name}
                   className={`border-b py-2 ${
                     selectedType === type.name ? "bg-blue-100" : ""
                   }`}
                 >
                   <div className="flex justify-between items-center">
                     <div className="flex flex-col">
                       <p>{type.name}</p>
                       <p className="text-gray-600">${type.price}</p>
                     </div>
                     <div className="flex items-center gap-2">
                       <button
                         className="px-2 py-1 bg-gray-300 rounded"
                         onClick={() => handleQuantityChange(type.name, -1)}
                       >
                         -
                       </button>
                       <span>{quantities[type.name] || 0}</span>
                       <button
                         className="px-2 py-1 bg-gray-300 rounded"
                         onClick={() => handleQuantityChange(type.name, 1)}
                       >
                         +
                       </button>
                     </div>
                     <button
                       onClick={() => setSelectedType(type.name)}
                       className={`px-2 py-1 rounded ${
                         selectedType === type.name
                           ? "bg-yellow-500 text-white"
                           : "bg-gray-300"
                       }`}
                     >
                       {selectedType === type.name ? "Selected" : "Select"}
                     </button>
                   </div>
                 </div>
               ))}
             </div>
           </>
         ) : (
           <p className="border-b py-2 text-gray-600">
             No additional options for this item.
           </p>
         )}

         <div className="mt-6 flex justify-end gap-2">
           <button
             className="px-4 py-2 bg-yellow-500 text-white rounded"
             onClick={handleAddToCart}
           >
             Add to Cart
           </button>
           <button
             className="px-4 py-2 bg-black text-white rounded"
             onClick={onClose}
           >
             Cancel
           </button>
         </div>
       </div>
     </div>
   );
 };

 export default ItemModal;
