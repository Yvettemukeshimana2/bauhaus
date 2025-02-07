 import React, { useState } from "react";
 import { useForm } from "react-hook-form";
 import {
   Calendar,
   Clock,
   User,
   Mail,
   Phone,
   Package,
   X,
   Loader,
 } from "lucide-react";

 const API_URL = import.meta.env.VITE_HOST;
 const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiamFkbyIsImlhdCI6MTczNzI3MDMyMn0.kkLgJDbm4ojjT1O3OjkELdfy8RBz1cmEesGK8ZvcBDc";

 interface Material {
   name: string;
   price: number;
   priceUnit: string;
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

 interface BookingModalProps {
   isOpen: boolean;
   onClose: () => void;
   material: Material;
   onSubmit: (data: BookingFormData) => void;
 }

 const FormField = ({
   label,
   icon: Icon,
   error,
   children,
 }: {
   label: string;
   icon: React.ElementType;
   error?: string;
   children: React.ReactNode;
 }) => (
   <div className="flex-1">
     <label className="block text-sm font-medium text-gray-700 mb-1">
       <Icon className="inline mr-2" size={16} />
       {label}
     </label>
     {children}
     {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
   </div>
 );

 const BookingModal: React.FC<BookingModalProps> = ({
   isOpen,
   onClose,
   material,
   onSubmit,
 }) => {
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [apiError, setApiError] = useState<string | null>(null);

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

   const submitBooking = async (data: BookingFormData) => {
     if (!API_URL) {
       throw new Error("API endpoint not configured");
     }

     const response = await fetch(`${API_URL}/item/bookingmaterial`, {
       method: "PUT",
       headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${TOKEN}`,
       },
       body: JSON.stringify(data),
     });

     if (!response.ok) {
       const errorData = await response.json().catch(() => null);
       throw new Error(errorData?.message || "Failed to submit booking");
     }

     return response.json();
   };

   const handleFormSubmit = async (data: BookingFormData) => {
     setApiError(null);

     try {
       setIsSubmitting(true);
       const updatedData = {
         ...data,
         materialTitle: `${selectedType} - ${material.price}${material.priceUnit}`,
       };

       await submitBooking(updatedData);
       onSubmit(updatedData);
       reset();
       onClose();
     } catch (error) {
       setApiError(
         error instanceof Error ? error.message : "An unexpected error occurred"
       );
     } finally {
       setIsSubmitting(false);
     }
   };

   return (
     <div className="fixed inset-0 z-50 flex items-center justify-center">
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
             <X size={24} />
           </button>
         </div>

         <div className="bg-gray-50 p-3 rounded-md mb-4">
           <p className="text-sm font-medium text-gray-700">
             <Package className="inline mr-2" size={16} />
             Selected Material: {selectedType}
           </p>
           <p className="text-sm text-gray-600">
             Price: {material.price}
             {material.priceUnit}
           </p>
         </div>

         {apiError && (
           <div className="bg-red-50 text-red-500 p-3 rounded-md mb-4">
             {apiError}
           </div>
         )}

         <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
           <div className="flex space-x-4">
             <FormField
               label="Full Name"
               icon={User}
               error={errors.name?.message}
             >
               <input
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
             </FormField>

             <FormField
               label="Material Name"
               icon={Package}
               error={errors.materialName?.message}
             >
               <input
                 type="text"
                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
                 {...register("materialName", {
                   required: "Material name is required",
                   minLength: {
                     value: 4,
                     message: "Name must be at least 4 characters",
                   },
                 })}
               />
             </FormField>
           </div>

           <div className="flex space-x-4">
             <FormField label="Email" icon={Mail} error={errors.email?.message}>
               <input
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
             </FormField>

             <FormField
               label="Phone Number"
               icon={Phone}
               error={errors.phone?.message}
             >
               <input
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
             </FormField>
           </div>

           <div className="flex space-x-4">
             <FormField
               label="Quantity"
               icon={Package}
               error={errors.quantity?.message}
             >
               <input
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
             </FormField>

             <FormField
               label="Pickup Date and Time"
               icon={Calendar}
               error={errors.pickupDate?.message}
             >
               <input
                 type="datetime-local"
                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
                 {...register("pickupDate", {
                   required: "Pickup date is required",
                 })}
               />
             </FormField>
           </div>

           <FormField
             label="Return Date and Time"
             icon={Clock}
             error={errors.returnDate?.message}
           >
             <input
               type="datetime-local"
               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
               {...register("returnDate", {
                 required: "Return date is required",
                 validate: (value, formValues) =>
                   new Date(value) > new Date(formValues.pickupDate) ||
                   "Return date must be after pickup date",
               })}
             />
           </FormField>

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
               disabled={isSubmitting}
               className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none flex items-center"
             >
               {isSubmitting ? (
                 <>
                   <Loader className="animate-spin mr-2" size={16} />
                   Submitting...
                 </>
               ) : (
                 "Book Now"
               )}
             </button>
           </div>
         </form>
       </div>
     </div>
   );
 };

 export default BookingModal;