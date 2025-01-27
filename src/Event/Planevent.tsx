 import React, { useState, useEffect } from "react";
 import { ShoppingCart } from "lucide-react";
 import CartModal from "../Component/Categorycard";
 import ItemModal from "../Component/Itemmodal";

 // Define types for Cart and Category
 type CartItem = {
   category: string;
   name: string;
   quantity: number;
   price: number;
 };

 type Category = {
   name: string;
   items: any[];
 };

 const EventPlannerPage: React.FC = () => {
   const [cart, setCart] = useState<CartItem[]>([]);
   const [isCartOpen, setIsCartOpen] = useState(false);
   const [selectedCategory, setSelectedCategory] = useState<string | null>(
     null
   );
   const [selectedItem, setSelectedItem] = useState<any>(null);
   const [categories, setCategories] = useState<Category[]>([]); // State for categories
   const [loading, setLoading] = useState<boolean>(true); // Loading state

   const him = import.meta.env.VITE_HOST;
   const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiamFkbyIsImlhdCI6MTczNzI3MDMyMn0.kkLgJDbm4ojjT1O3OjkELdfy8RBz1cmEesGK8ZvcBDc"; // Make sure to replace with a valid token

   // Fetch categories on component mount
   useEffect(() => {
     const fetchCategories = async () => {
       try {
         const headers = {
           Authorization: `Bearer ${token}`,
         };

         const vendorUrl = `${him}/cat/vendor`;
         const venueUrl = `${him}/cat/venue`;
         const materialUrl = `${him}/item/materials`;

         // Log URLs to verify the API endpoint
        //  console.log("Vendor URL:", vendorUrl);
        //  console.log("Venue URL:", venueUrl);
        //  console.log("Material URL:", materialUrl);

         // Fetch data from API
         const vendorResponse = await fetch(vendorUrl, { headers });
         const venueResponse = await fetch(venueUrl, { headers });
         const materialResponse = await fetch(materialUrl, { headers });

         
         if (!vendorResponse.ok || !venueResponse.ok || !materialResponse.ok) {
           console.error("Error fetching categories");
           return;
         }

         // Get data from responses
         const vendorData = await vendorResponse.json();
         const venueData = await venueResponse.json();
         const materialData = await materialResponse.json();

         // Log raw data for debugging
        //  console.log("Vendor Data:", vendorData);
        //  console.log("Venue Data:", venueData);
        //  console.log("Material Data:", materialData);

         // Check if 'data' exists and is an array before using it
         const allCategories = [
           {
             name: "Vendors",
             items: Array.isArray(vendorData.data) ? vendorData.data : [],
           },
           {
             name: "Venues",
             items: Array.isArray(venueData.data) ? venueData.data : [],
           },
           {
             name: "Materials",
             items: Array.isArray(materialData.data) ? materialData.data : [],
           },
         ];

         // Log categories before setting state
         console.log("All Categories:", allCategories);

         // Set the categories state
         setCategories(allCategories);
         setLoading(false);
       } catch (error) {
         console.error("Error fetching categories:", error);
         setLoading(false);
       }
     };

     fetchCategories();
   }, []);

   const addToCart = (category: string, item: any) => {
     const newCartItem: CartItem = {
       category,
       name: item.name,
       quantity: 1,
       price: item.price || 0, // Set price if available
     };

     setCart((prevCart) => [...prevCart, newCartItem]);
     setSelectedItem(null);
     setSelectedCategory(null);
   };

   const renderCategoryItems = (category: { name: string; items: any[] }) => {
     return category.items.map((item) => (
       <div
         key={item.itemid} // Assuming each item has a unique `itemid`
         className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-all cursor-pointer"
         onClick={() => {
           setSelectedCategory(category.name);
           setSelectedItem(item);
         }}
       >
         <img
           src={
             item.catimage ||
             "https://www.bellanaijaweddings.com/wp-content/uploads/2023/02/Hope-Kassim-Rwandan-White-Wedding-BellaNaija-Weddings-63-520x400.jpg"
           } // Fallback image if no image is provided
           alt={item.catname}
           className="w-full h-48 object-cover rounded-t-lg"
         />
         <div className="mt-4">
           <h3 className="lg:text-lg text-2xl font-bold text-center">
             {item.catname}
           </h3>
           <p className="text-gray-600 lg:text-sm text-lg">
             {item.catdescription || "No description available"}
           </p>
           {/* <p className="text-gray-600 text-lg font-semibold">
             Price: ${item.cattype}
           </p> */}
           {/* <p className="text-gray-600 text-lg font-semibold">
             Quantity Available: {item.itemquantity}
           </p> */}
         </div>
       </div>
     ));
   };

   const totalItemsInCart = cart.reduce(
     (total, item) => total + item.quantity,
     0
   );

   return (
     <div className="mx-auto px-4 py-8 mt-28">
       <div className="flex justify-between items-center mb-8">
         <h1 className="lg:text-2xl text-4xl font-bold text-yellow-500">
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

       <div className="space-y-8">
         {loading ? (
           <p>Loading categories...</p> // Display loading message while fetching
         ) : (
           categories.map((category) => (
             <div key={category.name}>
               <h2 className="lg:text-2xl text-4xl font-bold text-center text-yellow-500 mb-4">
                 {category.name}
               </h2>
               <div className="grid grid-cols-3 lg:text-sm text-xl lg:grid-cols-5 gap-3">
                 {renderCategoryItems(category)}{" "}
                 {/* Map items of each category */}
               </div>
             </div>
           ))
         )}
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
