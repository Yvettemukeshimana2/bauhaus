 import { useEffect, useState } from "react";
 import MenuItem from "../reusable/MenuItem.tsx";
 import { Link } from "react-router-dom";
 import {
   FiHome,
   FiMenu,
   FiX,
   FiPhone,
   FiActivity,
   FiPackage,
   FiRadio,
   FiBookmark,
   FiChevronDown,
 } from "react-icons/fi";
 import Button from "../reusable/Button.tsx";
 import Logo from "../assets/Muhe-Logo-white.png";
 import Header from "./Header.tsx";

 const NavBar = () => {
   const [isScrolled, setIsScrolled] = useState(false);
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isServicesOpen, setIsServicesOpen] = useState(false);

   useEffect(() => {
     const handleScroll = () => {
       setIsScrolled(window.scrollY > 0);
     };
     const handleResize = () => {
       if (window.innerWidth > 640 && isMenuOpen) {
         setIsMenuOpen(false);
       }
     };

     window.addEventListener("scroll", handleScroll);
     window.addEventListener("resize", handleResize);
     return () => {
       window.removeEventListener("scroll", handleScroll);
       window.removeEventListener("resize", handleResize);
     };
   }, [isMenuOpen]);

   const toggleMenu = () => {
     setIsMenuOpen(!isMenuOpen);
   };

   const handleMenuItemClick = () => {
     if (isMobile()) {
       toggleMenu();
     }
      if (window.innerWidth <= 640) {
        setIsMenuOpen(false);
      }
   };

   const isMobile = () => window.innerWidth <= 640;

   return (
     <>
       {isMenuOpen && (
         <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
       )}
       <header
         className={`fixed top-0 left-0 z-50 bg-black w-full h-24 flex justify-center items-center transition-all duration-300 ${
           isScrolled
             ? "bg-black sm:bg-opacity-75 sm:backdrop-blur-2xl"
             : "bg-transparent"
         }`}
       >
         <div className="flex flex-col">
           <div className="">
             <Header />
           </div>
           <div className="flex justify-between items-center mb-8 bg-gradient-to-b from-yellow-800 to-yellow-500 rounded-t-sm w-full max-w-7xl px-4 lg:px-8">
             <img
               src={Logo}
               alt="Logo"
               loading="lazy"
               width="150px"
               className="flex justify-start mr-80"
             />
             <button className="md:hidden text-white z-50" onClick={toggleMenu}>
               {!isMenuOpen ? <FiMenu size={54} /> : <FiX size={24} />}
             </button>
             <nav
               className={`fixed md:static flex flex-col md:flex-row items-center bg-black md:bg-transparent transition-transform transform ${
                 isMenuOpen ? "translate-x-0" : "translate-x-full"
               } md:translate-x-0 w-4/5 md:w-auto h-full md:h-auto top-0 right-0 z-50 p-5 md:p-0`}
             >
               <button
                 className="md:hidden text-white absolute top-4 right-4 z-50"
                 onClick={toggleMenu}
               >
                 <FiX size={24} />
               </button>
               <div className="flex flex-col md:flex-row gap-6 w-full md:w-auto mt-8 md:mt-0">
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
                     className={`absolute -right-4 text-white top-1/2 w-6 h-6 transform -translate-y-1/2 transition-transform ${
                       isServicesOpen ? "rotate-180" : ""
                     }`}
                   />
                   {isServicesOpen && (
                     <div className="absolute left-0 w-40 bg-white bg-opacity-90 border rounded shadow-lg z-50">
                       <Link
                         to="/venue"
                         className="block px-4 py-2 hover:bg-gray-200"
                         onClick={() => setIsServicesOpen(false)}
                       >
                         Event
                       </Link>
                       <Link
                         to="/material"
                         className="block px-4 py-2 hover:bg-gray-200"
                         onClick={() => setIsServicesOpen(false)}
                       >
                         Material
                       </Link>
                     </div>
                   )}
                 </div>
                 <MenuItem
                   title="Inspirations"
                   address="/insipiration"
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
               <div className="md:hidden mt-4 w-full">
                 <Button label="Contact Us" onClick={toggleMenu} />
               </div>
             </nav>
           </div>
         </div>
       </header>
     </>
   );
 };

 export default NavBar;
