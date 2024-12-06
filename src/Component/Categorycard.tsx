 import React from "react";
 import { X } from "lucide-react";

 type CartItem = {
   category: string;
   name: string;
   quantity: number;
   price: number;
 };

 type CartModalProps = {
   cart: CartItem[];
   removeFromCart: (index: number) => void;
   updateQuantity: (index: number, quantity: number) => void;
   closeModal: () => void;
 };

 const CartModal: React.FC<CartModalProps> = ({
   cart,
   removeFromCart,
   updateQuantity,
   closeModal,
 }) => {
   // Calculate the total price of the cart
   const total = cart.reduce(
     (sum, item) => sum + item.price * item.quantity,
     0
   );

   // Handle the order submission
   const handleSubmitOrder = () => {
     alert("Order submitted!");
   };

   return (
     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
       <div className="bg-white rounded-lg p-6 w-96">
         <div className="flex justify-between items-center mb-4">
           <h2 className="text-2xl font-bold text-yellow-500">Your Cart</h2>
           <button onClick={closeModal}>
             <X className="text-gray-600" />
           </button>
         </div>

         <div className="space-y-4">
           {cart.length > 0 ? (
             cart.map((item, index) => (
               <div
                 key={index}
                 className="flex justify-between items-center border-b py-2"
               >
                 <div>
                   <p>{item.name}</p>
                   <p className="text-gray-600">${item.price}</p>
                 </div>
                 <div className="flex items-center">
                   <button
                     onClick={() => updateQuantity(index, item.quantity - 1)}
                     className="bg-gray-300 text-black px-2 py-1 rounded"
                     disabled={item.quantity <= 1}
                   >
                     -
                   </button>
                   <span className="mx-2">{item.quantity}</span>
                   <button
                     onClick={() => updateQuantity(index, item.quantity + 1)}
                     className="bg-gray-300 text-black px-2 py-1 rounded"
                   >
                     +
                   </button>
                   <button
                     onClick={() => removeFromCart(index)}
                     className="ml-4 text-red-500"
                   >
                     Remove
                   </button>
                 </div>
               </div>
             ))
           ) : (
             <p>Your cart is empty.</p>
           )}
         </div>
         <div className=" flex space-x-3">
           {cart.length > 0 && (
             <div className="mt-4 flex space-x-3 items-center ">
               <p className="text-sm  font-bold">Total: ${total.toFixed(2)}</p>
               <button
                 onClick={handleSubmitOrder}
                 className="w-32 bg-yellow-500 text-white py-2 rounded"
               >
                 Submit Order
               </button>
             </div>
           )}

           <div className="mt-4 flex justify-between items-center">
             <button
               onClick={closeModal}
               className="w-14 bg-black text-white py-2 rounded"
             >
               Close
             </button>
           </div>
         </div>
       </div>
     </div>
   );
 };

 export default CartModal;
