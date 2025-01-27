 import React, { useState } from "react";
 import { categories } from "./category";
 import { renderCategoryItems } from "./Helpers";

 const VendorComponent: React.FC<{
   category: (typeof categories)[number];
   onAddToCart: (item: any) => void;
 }> = ({ category, onAddToCart }) => {
   const [selectedItem, setSelectedItem] = useState<any | null>(null);

   const handleSelectItem = (item: any) => {
     setSelectedItem(item);
     onAddToCart(item); // Handle adding to cart
   };

   return (
     <div>
       <h2 className="lg:text-2xl text-4xl font-bold text-center text-yellow-500 mb-4">
         {category.name}
       </h2>
       <div className="grid grid-cols-3 lg:text-sm text-xl lg:grid-cols-5 gap-3">
         {renderCategoryItems(category, handleSelectItem)}
       </div>

       {selectedItem && (
         <div className="mt-4">
           <p className="text-xl font-bold">Selected: {selectedItem.name}</p>
           <p className="text-lg">Price: ${selectedItem.price}</p>
         </div>
       )}
     </div>
   );
 };

 export default VendorComponent;
