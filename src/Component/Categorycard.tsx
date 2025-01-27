 import React from "react";
 import { X } from "lucide-react";
 import { useForm, SubmitHandler } from "react-hook-form";

 type CartItem = {
   category: string;
   name: string; // Includes item name and selected type
   quantity: number;
   price: number;
 };

 type CartModalProps = {
   cart: CartItem[];
   removeFromCart: (index: number) => void;
   updateQuantity: (index: number, quantity: number) => void;
   closeModal: () => void;
 };

 type FormData = {
   email: string;
   phone: string;
   eventDate: string;
 };

 const CartModal: React.FC<CartModalProps> = ({
   cart,
   removeFromCart,
   updateQuantity,
   closeModal,
 }) => {
   const {
     register,
     handleSubmit,
     formState: { errors },
   } = useForm<FormData>();

   const onSubmit: SubmitHandler<FormData> = (data) => {
     alert(`Order submitted! Details:\n${JSON.stringify(data, null, 2)}`);
   };

   return (
     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
       <div className="bg-white rounded-lg p-6 w-2/3">
         <div className="flex justify-between items-center mb-4">
           <h2 className="text-2xl font-bold">Your Cart</h2>
           <button onClick={closeModal}>
             <X className="text-gray-600" />
           </button>
         </div>

         {cart.length === 0 ? (
           <p>Your cart is empty.</p>
         ) : (
           <table className="w-full table-auto border-collapse">
             <thead>
               <tr className="bg-gray-200">
                 <th className="p-2 border">Item</th>
                 <th className="p-2 border">Category</th>
                 <th className="p-2 border">Quantity</th>
                 <th className="p-2 border">Price</th>
                 <th className="p-2 border">Actions</th>
               </tr>
             </thead>
             <tbody>
               {cart.map((item, index) => (
                 <tr key={index}>
                   <td className="p-2 border">{item.name}</td>
                   <td className="p-2 border">{item.category}</td>
                   <td className="p-2 border">
                     <div className="flex items-center gap-2">
                       <button
                         onClick={() =>
                           updateQuantity(index, item.quantity - 1)
                         }
                         className="px-2 py-1 bg-gray-300 rounded"
                       >
                         -
                       </button>
                       <span>{item.quantity}</span>
                       <button
                         onClick={() =>
                           updateQuantity(index, item.quantity + 1)
                         }
                         className="px-2 py-1 bg-gray-300 rounded"
                       >
                         +
                       </button>
                     </div>
                   </td>
                   <td className="p-2 border">${item.price * item.quantity}</td>
                   <td className="p-2 border">
                     <button
                       onClick={() => removeFromCart(index)}
                       className="px-4 py-2 bg-red-500 text-white rounded"
                     >
                       Remove
                     </button>
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
         )}

         <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
           <h3 className="text-lg font-bold mb-2">Order Details</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             <div>
               <label className="block font-medium">Email</label>
               <input
                 type="email"
                 {...register("email", { required: true })}
                 className="w-full p-2 border rounded"
               />
               {errors.email && (
                 <span className="text-red-500 text-sm">Email is required</span>
               )}
             </div>
             <div>
               <label className="block font-medium">Phone</label>
               <input
                 type="tel"
                 {...register("phone", { required: true })}
                 className="w-full p-2 border rounded"
               />
               {errors.phone && (
                 <span className="text-red-500 text-sm">Phone is required</span>
               )}
             </div>
             <div>
               <label className="block font-medium">Event Date</label>
               <input
                 type="date"
                 {...register("eventDate", { required: true })}
                 className="w-full p-2 border rounded"
               />
               {errors.eventDate && (
                 <span className="text-red-500 text-sm">
                   Event date is required
                 </span>
               )}
             </div>
           </div>
           <button
             type="submit"
             className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded"
           >
             Submit Order
           </button>
         </form>
       </div>
     </div>
   );
 };

 export default CartModal;
