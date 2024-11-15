 import { useEffect, useState } from "react";
 import MenuItem from "../reusable/MenuItem.tsx";
 import { Link } from "react-router-dom";
 import {
   FiHome,
   FiPhone,
   FiActivity,
   FiPackage,
   FiRadio,
   FiBookmark,
   FiChevronDown,
   FiMenu,
   FiX,
 } from "react-icons/fi";
 import Logo from "../assets/Muhe-Logo-white.png";
 import Header from "./Header.tsx";

 const NavBar = () => {
   const [isScrolled, setIsScrolled] = useState(false);
   const [isServicesOpen, setIsServicesOpen] = useState(false);
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   useEffect(() => {
     const handleScroll = () => {
       setIsScrolled(window.scrollY > 0);
     };

     window.addEventListener("scroll", handleScroll);
     return () => {
       window.removeEventListener("scroll", handleScroll);
     };
   }, []);

   const handleMenuItemClick = () => {
     if (window.innerWidth <= 640) {
       setIsMenuOpen(false);
       setIsServicesOpen(false);
     }
   };

   return (
     <>
       <header
         className={`fixed top-0 left-0 z-50 bg-black w-full h-24 flex justify-center items-center transition-all duration-300 ${
           isScrolled
             ? "bg-black sm:bg-opacity-75 sm:backdrop-blur-2xl"
             : "bg-transparent"
         }`}
       >
         <div className="flex flex-col w-full max-w-7xl">
           <Header />

           <div className="flex justify-between items-center mb-8 bg-gradient-to-b from-yellow-800 to-yellow-500 rounded-t-sm w-full px-4">
             <Link to="/"><img
               src={Logo}
               alt="Logo"
               loading="lazy"
               width="150px"
               className="flex justify-start mr-80"
             />
</Link>
             {/* Hamburger menu for small and medium screens */}
             <div className="flex lg:hidden">
               <button
                 onClick={() => setIsMenuOpen(!isMenuOpen)}
                 className="text-white text-3xl "
               >
                 {isMenuOpen ? <FiX /> : <FiMenu />}
               </button>
             </div>

             {/* Navigation Menu */}
             <nav
               className={`${
                 isMenuOpen ? "flex" : "hidden"
               } lg:flex flex-row lg:flex-row items-center lg:bg-transparent w-full lg:w-auto h-full lg:h-auto top-0 right-0 z-50 sm:p-5 lg:p-0`}
             >
               <div className="flex flex-row lg:flex-row gap-3 lg:gap-6 w-full lg:w-auto mt-8 lg:mt-0">
                 <MenuItem
                   title="Home"
                   address="/"
                   Icon={FiHome}
                   onClick={handleMenuItemClick}
                 />
                 <MenuItem
                   title="About Us"
                   address="/aboutus1"
                   Icon={FiBookmark}
                   onClick={handleMenuItemClick}
                 />
                 <MenuItem
                   title="Contact"
                   address="/contactus"
                   Icon={FiPhone}
                   onClick={handleMenuItemClick}
                 />

                 <div
                   className="relative"
                   onMouseEnter={() => setIsServicesOpen(true)}
                   onMouseLeave={() => setIsServicesOpen(false)}
                 >
                   <MenuItem
                     title="Services"
                     address=""
                     Icon={FiRadio}
                     onClick={handleMenuItemClick}
                   />
                   <FiChevronDown
                     className={`absolute -right-4 text-white top-1/2 w-5 h-5 transform -translate-y-1/2 transition-transform ${
                       isServicesOpen ? "rotate-180" : ""
                     }`}
                   />
                   {/* Dropdown items */}
                   {isServicesOpen && (
                     <div className="absolute top-full left-0 bg-white dark:bg-dark-secondary text-center flex flex-col space-y-4 py-4">
                       <Link
                         to="/venue"
                         className="block px-4 py-2 hover:bg-gray-200"
                         onClick={handleMenuItemClick}
                       >
                         Event
                       </Link>
                       <Link
                         to="/material"
                         className="block px-4 py-2 hover:bg-gray-200"
                         onClick={handleMenuItemClick}
                       >
                         Material
                       </Link>
                     </div>
                   )}
                 </div>

                 <MenuItem
                   title="Inspirations"
                   address="/insipirations"
                   Icon={FiActivity}
                   onClick={handleMenuItemClick}
                 />
                 <MenuItem
                   title="Publications"
                   address="/publication"
                   Icon={FiPackage}
                   onClick={handleMenuItemClick}
                 />
               </div>
             </nav>
           </div>
         </div>
       </header>
     </>
   );
 };

 export default NavBar;
