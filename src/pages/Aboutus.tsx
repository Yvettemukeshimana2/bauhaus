//  import img1 from "../assets/images/mettings.jpg"
//  import img2 from "../assets/images/LOLA-Event-Productions-SouthAsianFlare-Wedding-Chicago-OldPostOffice_0699.jpg"
//  import img3 from "../assets/images/LOLA-Event-Productions-SouthAsianFlare-Wedding-Chicago-OldPostOffice_0701.jpg"
// import h1 from "../assets/histo.jpeg";
// import h2 from "../assets/history.jpeg";
// import ach1 from "../assets/achv2.jpeg";
// import ach2 from "../assets/h3.jpeg"
 const AboutUs = () => {
   return (
     <div className=" space-y-6">
       {/* <div className="grid grid-cols-1 lg:grid-cols-3  gap-6 lg:w-full  sm:bg-custtext-customGreen-960 -mt-7">
         <div className="relative">
           <img
             src={img2}
             alt="Our Mission"
             loading="lazy"
             className="w-full h-80 object-cover rounded-lg opacity-70"
           />
           <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-60">
             <h3 className="lg:text-2xl text-5xl  text-customGreen-960 font-bold mb-2">
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
             <h3 className="lg:text-2xl text-5xl font-bold mb-2 text-customGreen-960">
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
             <h3 className="lg:text-2xl text-5xl font-bold mb-2 text-customGreen-960">
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
       </div> */}

       <div className="flex flex-col lg:flex-row gap-6 items-center">
         <div className="lg:w-1/2 p-6 mx-auto bg-gray-50 rounded-lg shadow-lg">
           <h3 className="lg:text-2xl text-5xl font-bold mb-4 text-customGreen-960 text-center">
             Night club
           </h3>
           <p className="lg:text-sm text-3xl text-gray-700">
             Experience the ultimate nightlife destination at our premium night
             club! Dance the night away to the hottest beats from our
             world-class DJs, enjoy signature cocktails crafted by expert
             mixologists, and immerse yourself in an electrifying atmosphere
             with state-of-the-art sound systems and stunning light shows. Our
             night club features VIP sections, bottle service, themed nights,
             and special events that create unforgettable memories. Whether
             you're celebrating with friends, hosting a private party, or
             looking for the perfect night out, our night club delivers an
             unparalleled entertainment experience with premium service and
             world-class hospitality.
           </p>
         </div>
         <div className="lg:w-1/2  w-full  p-5 lg:p-0 grid grid-cols-2 focus-within  gap-4">
           <img
             src="http://www.lasvegasguestlist.com/wp-content/uploads/Marquee-Nightclub.jpg"
             alt="History Image 1"
             loading="lazy"
             className="w-full h-56 object-cover mr-5 rounded-lg shadow-md"
           />
           <img
             src="https://i.pinimg.com/originals/0e/5f/c1/0e5fc1120e8224c5c5e9789d53f9b659.jpg"
             alt="History Image 2"
             loading="lazy"
             className="w-full h-56 object-cover mr-10 rounded-lg shadow-md"
           />
         </div>
       </div>
       <div className="flex flex-col lg:flex-row gap-6  items-center">
         <div className="lg:w-1/2  w-full  p-5 lg:p-0  grid grid-cols-2 gap-4 order-2 md:order-1">
           <img
             src="https://static.vecteezy.com/system/resources/previews/028/215/668/large_2x/music-karaoke-party-vivid-background-free-photo.jpg"
             alt="Achievements Image 1"
             loading="lazy"
             className="w-full h-80 p-2 mt-4 ml-2 object-cover rounded-lg shadow-md"
           />
           <img
             src="https://wallpapercave.com/wp/wp9577449.jpg"
             alt="Achievements Image 2"
             loading="lazy"
             className="w-full h-80 p-2 mt-4 object-cover  rounded-lg shadow-md"
           />
         </div>
         <div className="lg:w-1/2 p-6 bg-gray-50 rounded-lg shadow-lg order-1 lg:order-2">
           <h3 className="lg:text-2xl text-5xl font-bold mb-4 text-customGreen-960 text-center">
             Karaoke
           </h3>

           <p className="lg:text-sm text-3xl px-4">
             Step into the spotlight at our premium karaoke lounge! Sing your
             heart out with our extensive song library featuring thousands of
             tracks from every genre and era. Our private karaoke rooms offer
             intimate settings perfect for groups, while our main stage provides
             the ultimate performance experience. Enjoy professional sound
             systems, high-quality microphones, and stunning visual displays.
             Whether you're a seasoned performer or a first-time singer, our
             karaoke experience includes song requests, group performances,
             themed nights, and friendly competitions. Create unforgettable
             memories with friends and family while enjoying delicious drinks
             and snacks in our comfortable lounge atmosphere.
           </p>
         </div>
       </div>
     </div>
   );
 };
 export default AboutUs;