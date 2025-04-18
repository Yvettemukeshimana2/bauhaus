 import React from "react";

 const OurProcess: React.FC = () => {
   return (
     <div className="max-w-6xl mx-auto p-8">
       <h2 className="lg:text-2xl text-5xl font-bold text-center text-yellow-500 mb-10">
         Our Process
       </h2>

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 -z-50">
         <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-700 ease-in-out">
           <h3 className="text-4xl lg:text-lg font-semibold mb-4 text-gray-800">
             We Plan
           </h3>
           <p className="text-sm">
             MHS excels at thorough event planning, addressing every detail,
             from floral arrangements to lighting effects. We turn your vision
             into reality through strategic organization and budgeting, assuring
             flawless execution.
           </p>
         </div>

         {/* Step 2: We Design */}
         <div className="bg-gradient-to-r from-gray-600 to-gray-200 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-700 ease-in-out">
           <h3 className="text-4xl lg:text-lg font-semibold mb-4 text-gray-800">
             We Design
           </h3>
           <p className="text-sm">
             Our design process focuses on creating a unique representation of
             your style. Our expertise results in a visual storyboard that
             serves as a roadmap for your event’s details.
           </p>
         </div>

         <div className="bg-gradient-to-r from-purple-400 to-pink-200 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-700 ease-in-out">
           <h3 className="text-4xl lg:text-lg font-semibold mb-4 text-gray-800">
             We Manage
           </h3>
           <p className="text-sm">
             MHS excels in event management, ensuring all elements run smoothly
             and on schedule, allowing you to focus on enjoying the event.
           </p>
         </div>

         <div className="bg-gradient-to-r from-blue-400 to-indigo-200 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-700 ease-in-out">
           <h3 className="font-semibold text-4xl lg:text-lg mb-4 text-gray-800">
             We Coordinate
           </h3>
           <p className="lg:text-sm text-2xl">
             MHS takes charge of event coordination on the day, ensuring
             everything runs smoothly and addressing any unexpected issues.
           </p>
         </div>
       </div>
     </div>
   );
 };

 export default OurProcess;
