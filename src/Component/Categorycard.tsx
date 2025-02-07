 import React from "react";
 import { X } from "lucide-react";
 import { useForm, SubmitHandler } from "react-hook-form";

 const him = import.meta.env.VITE_HOST;
 const token =
   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiamFkbyIsImlhdCI6MTczNzI3MDMyMn0.kkLgJDbm4ojjT1O3OjkELdfy8RBz1cmEesGK8ZvcBDc";

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

   const onSubmit: SubmitHandler<FormData> = async (data) => {
     const orderData = {
       email: data.email,
       phone: data.phone,
       eventDate: data.eventDate,
       items: cart,
     };
     

     try {
       const response = await fetch(`${him}/cart/sendcart`, {
         method: "PUT",
         headers: {
           "Content-Type": "application/json",
           Authorization: `Bearer ${token}`,
         },
         body: JSON.stringify(orderData),
       });

       if (!response.ok) {
         throw new Error("Failed to submit order");
       }

       alert("Order submitted successfully!");
       closeModal();
     } catch (error) {
       console.error("Error submitting order:", error);
       alert("Failed to submit order. Please try again.");
     }
   };
 const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
   return (
     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center  items-center z-50">
       <div className="bg-white rounded-lg w-2/3 max-h-[90vh] flex flex-col">
         {/* Header */}
         <div className="sticky top-0 pl-6 pr-6  bg-white   z-10">
           <div className="flex justify-between items-center">
             <h2 className="text-2xl font-bold">Your Cart</h2>
             <button onClick={closeModal}>
               <X className="text-gray-600" />
             </button>
           </div>
         </div>

         {/* Scrollable 'Content */}
         <div className="flex-1   overflow-x-auto  p-6 max-h-[90vh]">
           {cart.length === 0 ? (
             <p>Your cart is empty.</p>
           ) : (
             <div className="overflow-x-auto">
               <table className="w-full table-auto border-collapse">
                 <thead className="bg-gray-200">
                   <tr>
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
                       <td className="p-2 border">
                         ${item.price * item.quantity}
                       </td>
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
             </div>
           )}
           <div className="mt-4 text-right">
             <p className="text-md font-bold">Total: ${total.toFixed(2)}</p>
           </div>
         </div>

         {/* Footer with Form */}
         <div className="bg-white pr-6 pl-6 sticky bottom-0">
           <form onSubmit={handleSubmit(onSubmit)}>
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
                   <span className="text-red-500 text-sm">
                     Email is required
                   </span>
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
                   <span className="text-red-500 text-sm">
                     Phone is required
                   </span>
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
               className="mt-4 px-4 py-2 mb-2 bg-yellow-500 text-white rounded"
             >
               Submit Order
             </button>
           </form>
         </div>
       </div>
     </div>
   );
 };

 export default CartModal;
