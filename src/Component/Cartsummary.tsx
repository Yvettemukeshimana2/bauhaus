 import React from "react";
 import { useCart } from "./cart"; // Adjust the import path as needed

 interface CartSummaryProps {
   onSubmit?: () => void;
 }

 const CartSummary: React.FC<CartSummaryProps> = ({ onSubmit }) => {
   const { cartItems } = useCart();

   const handleSubmit = () => {
     if (onSubmit) {
       onSubmit();
     } else {
       alert("Order submitted!");
     }
   };

   return (
     <div className="mt-6">
       <h3 className="text-xl font-bold mb-4">Cart Summary</h3>
       {cartItems.length === 0 ? (
         <p className="text-gray-500">Your cart is empty</p>
       ) : (
         <>
           <ul>
             {cartItems.map((cartItem, index) => (
               <li key={index} className="mb-2">
                 {cartItem.item} - Quantity: {cartItem.quantity}
               </li>
             ))}
           </ul>
           <button
             className="mt-4 px-4 py-2 bg-green-500 text-white rounded w-full"
             onClick={handleSubmit}
           >
             Submit Order
           </button>
         </>
       )}
     </div>
   );
 };

 export default CartSummary;
