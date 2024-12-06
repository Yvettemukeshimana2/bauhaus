 import React, { useState, useEffect } from "react";
 import { X } from "lucide-react";

 type ItemType = {
   name: string;
   description?: string;
   image: string;
   types?: { name: string; price: number }[]; // Different types of the item with price
 };

 type ItemModalProps = {
   item: ItemType | null;
   category: string | null;
   onClose: () => void;
   onAddToCart: (
     category: string,
     item: ItemType,
     type?: { name: string; price: number },
     quantity?: number
   ) => void;
 };

 const ItemModal: React.FC<ItemModalProps> = ({
   item,
   category,
   onClose,
   onAddToCart,
 }) => {
   const [quantities, setQuantities] = useState<Record<string, number>>({});
   const [selectedType, setSelectedType] = useState<string | null>(null);
   const [allTypes, setAllTypes] = useState<{ name: string; price: number }[]>(
     []
   );

   // Function to dynamically set types based on category and item name
   const setTypesBasedOnCategory = (
     category: string | null,
     itemName: string
   ) => {
     if (!category) return;

     let types: { name: string; price: number }[] = [];

     // Comprehensive types for different categories
     switch (itemName) {
       case "Chairs":
         types = [
           { name: "Plastic Chair", price: 10 },
           { name: "Wooden Chair", price: 20 },
           { name: "Cushioned Chair", price: 25 },
           { name: "Chiavari Chair", price: 30 },
           { name: "Bar Stool", price: 15 },
         ];
         break;
       case "Tables":
         types = [
           { name: "Round Table", price: 50 },
           { name: "Rectangular Table", price: 60 },
           { name: "Cocktail Table", price: 40 },
           { name: "Banquet Table", price: 70 },
           { name: "Wooden Table", price: 55 },
         ];
         break;
       case "Glass":
         types = [
           { name: "Wine Glass", price: 20 },
           { name: "Beer Glass", price: 15 },
           { name: "Cocktail Glass", price: 25 },
           { name: "Shot Glass", price: 10 },
           { name: "Champagne Flute", price: 22 },
           { name: "Water Glass", price: 12 },
         ];
         break;
       case "DJ":
         types = [
           { name: "Basic DJ Package", price: 500 },
           { name: "Premium DJ Package", price: 800 },
           { name: "Full Night Entertainment", price: 1200 },
         ];
         break;
       case "Photography":
         types = [
           { name: "Basic Photo Coverage", price: 300 },
           { name: "Full Day Photography", price: 600 },
           { name: "Video + Photo Package", price: 900 },
         ];
         break;
       case "Catering":
         types = [
           { name: "Buffet Style", price: 25 },
           { name: "Plated Dinner", price: 40 },
           { name: "Cocktail Reception", price: 35 },
           { name: "Full Course Meal", price: 50 },
         ];
         break;
       default:
         types = [];
     }

     setAllTypes(types);
   };

   // Trigger type change whenever the category or item changes
   useEffect(() => {
     if (item) {
       setTypesBasedOnCategory(category, item.name);
       // Reset states when item changes
       setSelectedType(null);
       setQuantities({});
     }
   }, [category, item]);

   if (!item || !category) return null;

   const handleQuantityChange = (type: string, delta: number) => {
     setQuantities((prevQuantities) => {
       const currentQuantity = prevQuantities[type] || 0;
       const newQuantity = Math.max(0, currentQuantity + delta);
       return {
         ...prevQuantities,
         [type]: newQuantity,
       };
     });
   };

    const handleAddToCart = () => {
      if (allTypes.length > 0) {
        if (!selectedType) {
          alert("Please select a type");
          return;
        }

        const quantity = quantities[selectedType] || 0;
        if (quantity === 0) {
          alert("Please select a quantity");
          return;
        }

        const selectedItemType = allTypes.find((t) => t.name === selectedType);

        if (selectedItemType) {
          onAddToCart(
            category!,
            { ...item, name: `${item.name} (${selectedItemType.name})` },
            selectedItemType,
            quantity
          );
        }
      } else {
        onAddToCart(category!, item, undefined, 1);
      }

      onClose();
    };


   return (
     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
       <div className="bg-white rounded-lg p-6 w-1/2 ">
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
         <h3 className="text-lg font-bold text-yellow-500 mb-2">Select Type</h3>
         {allTypes.length > 0 ? (
           <div className="grid grid-cols-2 space-x-5 space-y-2">
             {allTypes.map((type) => (
               <div
                 key={type.name}
                 className={`flex justify-between border-b py-2 ${
                   selectedType === type.name ? "bg-blue-100" : ""
                 }`}
               >
                 <div className="flex flex-col">
                   <p>{type.name}</p>
                   <p className="text-gray-600">${type.price}</p>
                 </div>
                 <div className="flex items-center gap-2">
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
                     className={`${
                       selectedType === type.name
                         ? "bg-yellow-500 text-white"
                         : "bg-gray-300"
                     } px-1 py-1 rounded`}
                   >
                     {selectedType === type.name ? "Selected" : "Select"}
                   </button>
                 </div>
               </div>
             ))}
           </div>
         ) : (
           <div className="flex justify-between items-center border-b py-2">
             <p>No additional options for this item.</p>
           </div>
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