 import React, { useState } from "react";
 import { ShoppingCart } from "lucide-react";
 import CartModal from "../Component/Categorycard";
 import ItemModal from "../Component/Itemmodal";
 import { categories } from "./category";

 type CartItem = {
   category: string;
   name: string;
   quantity: number;
   price: number;
 };

 const EventPlannerPage: React.FC = () => {
   const [cart, setCart] = useState<CartItem[]>([]);
   const [isCartOpen, setIsCartOpen] = useState(false);
   const [selectedCategory, setSelectedCategory] = useState<string | null>(
     null
   );
   const [selectedItem, setSelectedItem] = useState<any>(null);

   const addToCart = (
     category: string,
     item: any,
     type?: { name: string; price: number }
   ) => {
     const newCartItem: CartItem = {
       category,
       name: item.name,
       quantity: 1,
       price: type?.price || 0, // If a type is selected, include the price, else use 0
     };

     setCart((prevCart) => [...prevCart, newCartItem]);
     setSelectedItem(null);
     setSelectedCategory(null);
   };

   const renderCategoryItems = (category: { name: string; items: any[] }) => {
     return category.items.map((item) => (
       <div
         key={item.name}
         className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl  transition-all cursor-pointer"
         onClick={() => {
           setSelectedCategory(category.name);
           setSelectedItem(item);
         }}
       >
         <img
           src={item.image}
           alt={item.name}
           className="w-full h-48 object-cover rounded-t-lg"
         />
         <div className="mt-4">
           <h3 className="text-xl font-bold text-center">{item.name}</h3>
           <p className="text-gray-600 text-sm">{item.description}</p>
         </div>
       </div>
     ));
   };

   // Calculate total items in the cart
   const totalItemsInCart = cart.reduce(
     (total, item) => total + item.quantity,
     0
   );

   return (
     <div className="container mx-auto px-4 py-8 mt-28">
       <div className="flex justify-between items-center mb-8">
         <h1 className="text-2xl font-bold text-yellow-500 ">
           Plan Your Event
         </h1>
         <div
           className="relative cursor-pointer"
           onClick={() => setIsCartOpen(true)}
         >
           <ShoppingCart className="w-8 h-8" />
           {totalItemsInCart > 0 && (
             <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
               {totalItemsInCart}
             </div>
           )}
         </div>
       </div>

       <div className="space-y-8 ">
         {categories.map((category) => (
           <div key={category.name} className=" ">
             <h2 className="text-2xl font-bold text-center text-yellow-500 mb-4">
               {category.name}
             </h2>
             <div className="grid grid-cols-1 text-sm sm:grid-cols-5 gap-3">
               {renderCategoryItems(category)}
             </div>
           </div>
         ))}
       </div>

       {selectedItem && (
         <ItemModal
           item={selectedItem}
           category={selectedCategory!}
           onAddToCart={addToCart}
           onClose={() => setSelectedItem(null)}
         />
       )}

       {isCartOpen && (
         <CartModal
           cart={cart}
           removeFromCart={(index) =>
             setCart((prevCart) => prevCart.filter((_, i) => i !== index))
           }
           updateQuantity={(index, quantity) =>
             setCart((prevCart) =>
               prevCart.map((item, i) =>
                 i === index
                   ? { ...item, quantity: Math.max(1, quantity) }
                   : item
               )
             )
           }
           closeModal={() => setIsCartOpen(false)}
         />
       )}
     </div>
   );
 };

 export default EventPlannerPage;
