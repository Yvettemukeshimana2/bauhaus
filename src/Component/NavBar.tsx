 import { useEffect, useState } from "react";
 import { Link } from "react-router-dom";
 import {
   FiHome,
   FiPhone,
   FiActivity,
   FiPackage,
   FiBookmark,
   FiMenu,
   FiX,
 } from "react-icons/fi";
 import Logo from "../assets/boh logo.jpg";
 import MenuItem from "../reusable/MenuItem";
 

 const NavBar = () => {
   const [isScrolled, setIsScrolled] = useState(false);
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   useEffect(() => {
     const handleScroll = () => {
       setIsScrolled(window.scrollY > 0);
     };

     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const handleMenuItemClick = () => {
     if (window.innerWidth <= 640) {
       setIsMenuOpen(false);
     }
   };

   const navItems = [
     { title: "Home", address: "/", Icon: FiHome },
     { title: "About Us", address: "/aboutus1", Icon: FiBookmark },
     { title: "Contact", address: "/contactus", Icon: FiPhone },
     { title: "Services", address: "/venue", Icon: FiActivity },
     { title: "Resto-bar", address: "/inspirations", Icon: FiActivity },
     { title: "Night club", address: "/publication", Icon: FiPackage },
     { title: "Karaoke", address: "/planevent", Icon: FiActivity },
   ];

   return (
     <header
       className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
         isScrolled
           ? "bg-black sm:bg-opacity-75 sm:backdrop-blur-2xl"
           : "bg-transparent"
       }`}
     >
       <div className="flex flex-col w-full max-w-7xl mx-auto">
      

         <div className="flex justify-between items-center rounded-t-sm w-full h-12 px-4" style={{backgroundColor: '#623411'}}>
           <Link to="/">
             <img
               src={Logo}
               alt="Logo"
               loading="lazy"
               width="130"
               className="mr-8"
             />
           </Link>

           {/* Mobile Menu Toggle Button */}
           <div className="lg:hidden">
             <button
               onClick={() => setIsMenuOpen(!isMenuOpen)}
               className="text-white text-xl"
             >
               {isMenuOpen ? <FiX /> : <FiMenu />}
             </button>
           </div>

           {/* Desktop Navigation */}
           <nav className="hidden lg:flex items-center gap-6 pr-14">
             {navItems.map((item) => (
               <MenuItem
                 key={item.title}
                 title={item.title}
                 address={item.address}
                 Icon={item.Icon}
                 onClick={handleMenuItemClick}
               />
             ))}
           </nav>
         </div>
       </div>

       {/* Mobile Slide Menu */}
       {isMenuOpen && (
         <div className="fixed top-14 right-0 w-1/2 sm:w-1/3 h-screen z-40 p-6 shadow-lg" style={{backgroundColor: '#623411'}}>
           <button
             className="absolute top-4 right-4 text-white text-xl"
             onClick={() => setIsMenuOpen(false)}
           >
             <FiX />
           </button>
           <nav className="flex flex-col mt-12 space-y-6 text-center">
             {navItems.map((item) => (
               <MenuItem
                 key={item.title}
                 title={item.title}
                 address={item.address}
                 Icon={item.Icon}
                 onClick={handleMenuItemClick}
               />
             ))}
           </nav>
         </div>
       )}
     </header>
   );
 };

 export default NavBar;
