 import img1 from "../assets/images/mettings.jpg"
 import img2 from "../assets/images/LOLA-Event-Productions-SouthAsianFlare-Wedding-Chicago-OldPostOffice_0699.jpg"
 import img3 from "../assets/images/LOLA-Event-Productions-SouthAsianFlare-Wedding-Chicago-OldPostOffice_0701.jpg"
import h1 from "../assets/histo.jpeg";
import h2 from "../assets/history.jpeg";
import ach1 from "../assets/achv2.jpeg";
import ach2 from "../assets/h3.jpeg"
 const AboutUs = () => {
   return (
     <div className=" space-y-6">
       <div className="grid grid-cols-1 lg:grid-cols-3  gap-6 lg:w-full  sm:bg-yellow-500 -mt-7">
         <div className="relative">
           <img
             src={img2}
             alt="Our Mission"
             loading="lazy"
             className="w-full h-80 object-cover rounded-lg opacity-70"
           />
           <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-60">
             <h3 className="lg:text-2xl text-5xl  text-yellow-500 font-bold mb-2">
               Our Mission
             </h3>
             <p className="lg:text-sm text-3xl px-4">
               Your one-stop solution for extraordinary events from concept to
               clean-up, we handle planning, staffing, catering, and vendor
               management with passion and precision in every detail, ensuring a
               seamless experience from start to finish
             </p>
           </div>
         </div>
         <div className="relative">
           <img
             src={img1}
             alt="Our Value"
             loading="lazy"
             className="w-full h-80 object-cover rounded-lg opacity-70"
           />
           <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-60">
             <h3 className="lg:text-2xl text-5xl font-bold mb-2 text-yellow-500">
               Our Value
             </h3>
             <p className="lg:text-sm text-3xl px-4">
               Do it right.
               <br />
               Do it with heart.
               <br />
               Do it together.
               <br />
               Every event we plan is a reflection of these beliefs.
             </p>
           </div>
         </div>
         <div className="relative">
           <img
             src={img3}
             alt="Our Vision"
             loading="lazy"
             className="w-full h-80 object-cover rounded-lg opacity-70"
           />
           <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-60">
             <h3 className="lg:text-2xl text-5xl font-bold mb-2 text-yellow-500">
               Our Vision
             </h3>
             <p className="lg:text-sm text-3xl px-4">
               We envision a world where every event, big or small, is executed
               flawlessly, leaving lasting memories for our clients and their
               guests. Our mission is to make event planning easy, exciting, and
               stress-free, becoming the first choice for those who want it all
               handled with heart, creativity, and style.
             </p>
           </div>
         </div>
       </div>

       <div className="flex flex-col lg:flex-row gap-6 items-center">
         <div className="lg:w-1/2 p-6 mx-auto bg-gray-50 rounded-lg shadow-lg">
           <h3 className="lg:text-2xl text-5xl font-bold mb-4 text-yellow-500 text-center">
             Our History
           </h3>
           <p className="lg:text-sm text-3xl text-gray-700">
             Our journey began with a simple idea to take the stress out of
             event planning and replace it with joy, creativity, and
             unforgettable moments. What began as a dream among young
             hospitality students has grown into a full-service event company
             with 7 years of experience.
           </p>
         </div>
         <div className="lg:w-1/2  w-full  p-5 lg:p-0 grid grid-cols-2 focus-within  gap-4">
           <img
             src={h1}
             alt="History Image 1"
             loading="lazy"
             className="w-full h-56 object-cover mr-5 rounded-lg shadow-md"
           />
           <img
             src={h2}
             alt="History Image 2"
             loading="lazy"
             className="w-full h-56 object-cover mr-10 rounded-lg shadow-md"
           />
         </div>
       </div>
       <div className="flex flex-col lg:flex-row gap-6  items-center">
         <div className="lg:w-1/2  w-full  p-5 lg:p-0  grid grid-cols-2 gap-4 order-2 md:order-1">
           <img
             src={ach2}
             alt="Achievements Image 1"
             loading="lazy"
             className="w-full h-80 p-2 mt-4 ml-2 object-cover rounded-lg shadow-md"
           />
           <img
             src={ach1}
             alt="Achievements Image 2"
             loading="lazy"
             className="w-full h-80 p-2 mt-4 object-cover  rounded-lg shadow-md"
           />
         </div>
         <div className="lg:w-1/2 p-6 bg-gray-50 rounded-lg shadow-lg order-1 lg:order-2">
           <h3 className="lg:text-2xl text-5xl font-bold mb-4 text-yellow-500 text-center">
             Our Achievements
           </h3>
           <p className="lg:text-sm text-3xl text-gray-700">
             From high-profile events like our first family wedding to receiving
             the Consumer's Choice Award in 2022, our commitment to creativity
             and excellence has earned us industry recognition and a loyal
             client base. With a passion for hospitality, we've planned hundreds
             of events, offering expert planning, staffing, catering, and vendor
             solutions for unforgettable experiences.
           </p>
         </div>
       </div>
     </div>
   );
 };
 export default AboutUs;