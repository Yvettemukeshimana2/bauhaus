 import { useEffect, useState } from "react";
 import MenuItem from "../reusable/MenuItem.tsx";
 import { Link } from "react-router-dom";
 import { FiHome, FiPhone, FiActivity, FiPackage, FiBookmark, FiChevronDown, FiMenu,  FiX, } from "react-icons/fi";
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
         className={`fixed top-0 left-0 z-50 bg-black w-full h-5 flex justify-center items-center transition-all duration-300 ${
           isScrolled
             ? "bg-black sm:bg-opacity-75 sm:backdrop-blur-2xl"
             : "bg-transparent"
         }`}
       >
         <div className="flex flex-col w-full max-w-7xl">
           <Header />
           <div className="flex justify-between items-center bg-gradient-to-b from-yellow-800 to-yellow-500 rounded-t-sm w-full h-12 ">
             <Link to="/">
               <img
                 src={Logo}
                 alt="Logo"
                 loading="lazy"
                 width="130px"
                 className="flex justify-start mr-80"
               />
             </Link>
             <div className="relative">
               {/* Menu Button for Mobile */}
               <div className="flex lg:hidden">
                 <button
                   onClick={() => setIsMenuOpen(!isMenuOpen)}
                   className="text-white mr-8  text-sm"
                 >
                   {isMenuOpen ? <FiX /> : <FiMenu />}
                 </button>
               </div>

               {/* Popup Menu for Mobile */}
               {isMenuOpen && (
                 <div className="fixed top-10 right-0 w-1/4 h-5/6 bg-yellow-500 z-20 flex flex-col justify-center items-center">
                   <button
                     className="absolute top-4 right-4 text-white text-lg"
                     onClick={() => setIsMenuOpen(false)}
                   >
                     <FiX />
                   </button>

                   <nav className="flex flex-col space-y-6 text-center">
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
                       <div
                         className="flex items-center justify-center cursor-pointer"
                         onClick={(e) => {
                           e.preventDefault();
                           setIsServicesOpen((prev) => !prev);
                         }}
                       >
                         <span className="pb-2 text-white">Services</span>
                         <FiChevronDown
                           className={`text-white transition-transform ${
                             isServicesOpen ? "rotate-180" : ""
                           }`}
                         />
                       </div>
                       {isServicesOpen && (
                         <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white text-black shadow-lg mt-2 p-4 rounded-lg">
                           <Link
                             to="/venue"
                             className="block px-4 py-2 hover:bg-yellow-300"
                             onClick={() => setIsServicesOpen(false)}
                           >
                             Event
                           </Link>
                           <Link
                             to="/material"
                             className="block px-4 py-2 hover:bg-yellow-300"
                             onClick={() => setIsServicesOpen(false)}
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
                     <MenuItem
                       title="Plan Your Event"
                       address="/planevent"
                       Icon={FiActivity}
                       onClick={handleMenuItemClick}
                     />
                   </nav>
                 </div>
               )}

               {/* Normal Navigation for Large Screens */}
               <nav className="hidden lg:flex flex-row pr-14 items-center gap-6">
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
                 {/* <div
                   className="relative"
                   onMouseEnter={() => setIsServicesOpen(true)}
                   onMouseLeave={() => setIsServicesOpen(false)}
                 > */}
                 {/* <div
                     className="flex items-center cursor-pointer"
                     onClick={(e) => {
                       e.preventDefault();
                       setIsServicesOpen((prev) => !prev);
                     }}
                   > */}
                 {/* <Link to="/venue">
                   {" "}
                   <span className="top-5  text-white">Services</span>
                 </Link> */}
                 {/* <FiChevronDown
                       className={` text-white transition-transform ${
                         isServicesOpen ? "rotate-180" : ""
                       }`}
                     />
                   </div>
                   {isServicesOpen && (
                     <div className="absolute top-full left-0 bg-white text-black shadow-lg mt-2 p-4 rounded-lg">
                       <Link
                         to="/venue"
                         className="block px-4 py-2 hover:bg-yellow-300"
                         onClick={() => setIsServicesOpen(false)}
                       >
                         Event
                       </Link>
                       <Link
                         to="/material"
                         className="block px-4 py-2 hover:bg-yellow-300"
                         onClick={() => setIsServicesOpen(false)}
                       >
                         Material
                       </Link>
                     </div>
                   )} */}
                 {/* </div> */}
                 <MenuItem
                   title="Services"
                   address="/venue"
                   Icon={FiActivity}
                   onClick={handleMenuItemClick}
                 />
                 <MenuItem
                   title="Inspirations"
                   address="/inspirations"
                   Icon={FiActivity}
                   onClick={handleMenuItemClick}
                 />
                 <MenuItem
                   title="Publications"
                   address="/publication"
                   Icon={FiPackage}
                   onClick={handleMenuItemClick}
                 />
                 <MenuItem
                   title="Plan Your Event"
                   address="/planevent"
                   Icon={FiActivity}
                   onClick={handleMenuItemClick}
                 />
               </nav>
             </div>
           </div>
         </div>
       </header>
     </>
   );
 };
 export default NavBar;