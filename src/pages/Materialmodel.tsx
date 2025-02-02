 import React from "react";
 import { useForm } from "react-hook-form";

 interface BookingModalProps {
   isOpen: boolean;
   onClose: () => void;
   material: {
     name: string;
     price: number;
     priceUnit: string;
   };
   onSubmit: (data: BookingFormData) => void;
 }

 export interface BookingFormData {
   name: string;
   email: string;
   phone: string;
   materialName: string;
   materialType: string;
   materialTitle: string;
   quantity: number;
   pickupDate: string;
   returnDate: string;
 }

//  const materialTypes = [
//    "Premium Tent",
//    "Glass Dining Set",
//    "Chiavari Chairs",
//    "Wine Glass",
//    "Dish",
//    "Cake Table",
//  ];

 const BookingModal: React.FC<BookingModalProps> = ({
   isOpen,
   onClose,
   material,
   onSubmit,
 }) => {
   const {
     register,
     handleSubmit,
     formState: { errors },
     reset,
     watch,
   } = useForm<BookingFormData>({
     defaultValues: {
       materialName: material.name,
       materialType: material.name,
       materialTitle: `${material.name} - ${material.price}${material.priceUnit}`,
       quantity: 1,
     },
   });

   const selectedType = watch("materialType");

   if (!isOpen) return null;

   const onSubmitForm = (data: BookingFormData) => {
     const updatedData = {
       ...data,
       materialTitle: `${selectedType} - ${material.price}${material.priceUnit}`,
     };
     onSubmit(updatedData);
     reset();
     onClose();
   };

   return (
     <div className="fixed inset-0 z-50 flex items-center mx-auto my-auto justify-center">
       <div
         className="absolute inset-0 bg-black bg-opacity-50"
         onClick={onClose}
       />
       <div className="relative bg-white rounded-lg w-full max-w-xl p-10 m-4 max-h-[90vh] overflow-y-auto">
         <div className="flex justify-between items-center mb-4">
           <h2 className="text-xl font-bold">Book {material.name}</h2>
           <button
             onClick={onClose}
             className="text-gray-500 hover:text-gray-700"
           >
             ×
           </button>
         </div>
         <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4">
           {/* Display selected material info */}
           <div className="bg-gray-50 p-3 rounded-md mb-4">
             <p className="text-sm font-medium text-gray-700">
               Selected Material: {selectedType}
             </p>
             <p className="text-sm text-gray-600">
               Price: {material.price}
               {material.priceUnit}
             </p>
           </div>

           {/* First row with Name and Material Type in flex */}
           <div className="flex space-x-4">
             <div className="flex-1">
               <label
                 htmlFor="name"
                 className="block text-sm font-medium text-gray-700 mb-1"
               >
                 Full Name
               </label>
               <input
                 id="name"
                 type="text"
                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
                 {...register("name", {
                   required: "Name is required",
                   minLength: {
                     value: 2,
                     message: "Name must be at least 2 characters",
                   },
                 })}
               />
               {errors.name && (
                 <p className="text-sm text-red-500 mt-1">
                   {errors.name.message}
                 </p>
               )}
             </div>

             <div className="flex-1">
               <label
                 htmlFor="materialType"
                 className="block text-sm font-medium text-gray-700 mb-1"
               >
                 Material Type
               </label>
               <input
                 id="materialname"
                 type="text"
                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
                 {...register("name", {
                   required: "Naterial name is required",
                   minLength: {
                     value: 4,
                     message: "Name must be at least 4characters",
                   },
                 })}
               />
               {errors.materialType && (
                 <p className="text-sm text-red-500 mt-1">
                   {errors.materialType.message}
                 </p>
               )}
               {/* <select
                 id="materialType"
                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
                 {...register("materialType", {
                   required: "Material type is required",
                 })}
               > */}
               {/* <option value="">Select a material type</option>
                 {materialTypes.map((type) => (
                   <option key={type} value={type}>
                     {type}
                   </option>
                 ))} */}
               {/* </select> */}
               {/* {errors.materialType && (
                 <p className="text-sm text-red-500 mt-1">
                   {errors.materialType.message}
                 </p>
               )} */}
             </div>
           </div>

           {/* Email and Phone in flex */}
           <div className="flex space-x-4">
             <div className="flex-1">
               <label
                 htmlFor="email"
                 className="block text-sm font-medium text-gray-700 mb-1"
               >
                 Email
               </label>
               <input
                 id="email"
                 type="email"
                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
                 {...register("email", {
                   required: "Email is required",
                   pattern: {
                     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                     message: "Invalid email address",
                   },
                 })}
               />
               {errors.email && (
                 <p className="text-sm text-red-500 mt-1">
                   {errors.email.message}
                 </p>
               )}
             </div>

             <div className="flex-1">
               <label
                 htmlFor="phone"
                 className="block text-sm font-medium text-gray-700 mb-1"
               >
                 Phone Number
               </label>
               <input
                 id="phone"
                 type="tel"
                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
                 {...register("phone", {
                   required: "Phone number is required",
                   pattern: {
                     value: /^\+?[\d\s-]{10,}$/,
                     message: "Invalid phone number",
                   },
                 })}
               />
               {errors.phone && (
                 <p className="text-sm text-red-500 mt-1">
                   {errors.phone.message}
                 </p>
               )}
             </div>
           </div>

           {/* Quantity in flex with Pickup Date */}
           <div className="flex space-x-4">
             <div className="flex-1">
               <label
                 htmlFor="quantity"
                 className="block text-sm font-medium text-gray-700 mb-1"
               >
                 Quantity
               </label>
               <input
                 id="quantity"
                 type="number"
                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
                 {...register("quantity", {
                   required: "Quantity is required",
                   min: {
                     value: 1,
                     message: "Quantity must be at least 1",
                   },
                 })}
               />
               {errors.quantity && (
                 <p className="text-sm text-red-500 mt-1">
                   {errors.quantity.message}
                 </p>
               )}
             </div>

             <div className="flex-1">
               <label
                 htmlFor="pickupDate"
                 className="block text-sm font-medium text-gray-700 mb-1"
               >
                 Pickup Date and Time
               </label>
               <input
                 id="pickupDate"
                 type="datetime-local"
                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
                 {...register("pickupDate", {
                   required: "Pickup date is required",
                 })}
               />
               {errors.pickupDate && (
                 <p className="text-sm text-red-500 mt-1">
                   {errors.pickupDate.message}
                 </p>
               )}
             </div>
           </div>

           {/* Return Date */}
           <div>
             <label
               htmlFor="returnDate"
               className="block text-sm font-medium text-gray-700 mb-1"
             >
               Return Date and Time
             </label>
             <input
               id="returnDate"
               type="datetime-local"
               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
               {...register("returnDate", {
                 required: "Return date is required",
                 validate: (value, formValues) =>
                   new Date(value) > new Date(formValues.pickupDate) ||
                   "Return date must be after pickup date",
               })}
             />
             {errors.returnDate && (
               <p className="text-sm text-red-500 mt-1">
                 {errors.returnDate.message}
               </p>
             )}
           </div>

           <div className="mt-6 flex justify-end space-x-3">
             <button
               type="button"
               onClick={onClose}
               className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none"
             >
               Cancel
             </button>
             <button
               type="submit"
               className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none"
             >
               Book Now
             </button>
           </div>
         </form>
       </div>
     </div>
   );
 };

 export default BookingModal;