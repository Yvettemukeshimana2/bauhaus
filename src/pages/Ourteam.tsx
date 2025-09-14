 import React, { useState, ReactNode } from "react";
 import { Mail, Phone } from "lucide-react";

 // Types
 interface CardProps {
   children: ReactNode;
   className?: string;
 }

 interface ExpandableTextProps {
   text: string;
   maxLength?: number;
 }

 interface TeamMember {
   name: string;
   title: string;
   image: string;
   email: string;
   phone: string;
   bio?: string;
 }

 // Simple Card Components
 const Card: React.FC<CardProps> = ({ children, className = "" }) => (
   <div className={`bg-white rounded-lg shadow-lg ${className}`}>
     {children}
   </div>
 );

 const CardContent: React.FC<CardProps> = ({ children, className = "" }) => (
   <div className={`p-6 ${className}`}>{children}</div>
 );

 const BannerSection: React.FC = () => (
   <section className="relative bg-gradient-to-r from-yellow-50 to-yellow-100 py-10">
     <div className="absolute inset-0 bg-opacity-50"></div>
     <div className="container mx-auto text-center">
       <h1 className="text-4xl font-bold text-customGreen-960 mb-4">
         <h3 className="text-2xl lg:text-lg font-bold mb-4">
           Ready to Create Something Amazing?
         </h3>
       </h1>
       <p className="text-xl text-gray-700 font-semibold">
         <p className="text-gray-600 text-lg lg:text-sm mb-8">
           Let's work together to bring your vision to life.
         </p>
       </p>
     </div>
   </section>
 );

 const ExpandableText: React.FC<ExpandableTextProps> = ({
   text,
   maxLength = 250,
 }) => {
   const [isExpanded, setIsExpanded] = useState(false);
   const shouldTruncate = text.length > maxLength;
   const displayText =
     shouldTruncate && !isExpanded ? text.slice(0, maxLength) + "..." : text;

   return (
     <div className="space-y-4">
       <p className="text-gray-700 leading-relaxed">{displayText}</p>
       {shouldTruncate && (
         <button
           onClick={() => setIsExpanded(!isExpanded)}
           className="px-6 py-2 border-2 border-custtext-customGreen-960 text-customGreen-960 
                     hover:bg-yellow-800 hover:text-white rounded-md 
                     transition-all duration-300 font-semibold"
         >
           {isExpanded ? "Show Less" : "Read More"}
         </button>
       )}
     </div>
   );
 };
 const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
   <Card className="h-full transform transition-all duration-300 hover:scale-105">
     <CardContent className="text-center">
       <div className="mb-6">
         <img
           src={member.image}
           loading="lazy"
           alt={member.name}
           className="w-40 h-44 rounded-full mx-auto object-cover shadow-lg"
         />
       </div>
       <div className="space-y-2">
         <h3 className="text-md font-bold text-gray-800">{member.name}</h3>
         <p className="text-customGreen-960 font-medium">{member.title}</p>
         <div className="text-sm">
           {member.bio && <ExpandableText text={member.bio} maxLength={150} />}
         </div>
       </div>
       {/* Show Email and Phone as text with icons */}
       <div className="flex flex-col items-center space-y-1 mt-6 text-gray-600 text-sm">
         <div className="flex items-center gap-2">
           <Mail size={14} />
           <span>{member.email}</span>
         </div>
         <div className="flex items-center gap-2">
           <Phone size={14} />
           <span>{member.phone}</span>
         </div>
       </div>
     </CardContent>
   </Card>
 );

 const TeamSection: React.FC = () => (
   <section className="py-16 bg-gray-50">
     <div className="container mx-auto px-4">
       <div className="text-center mb-16">
         <h2 className="text-2xl lg:text-xl font-bold text-customGreen-960">
           BAUHAUS TEAM
         </h2>
         <p className="lg:text-lg text-lg text-gray-600 mt-2">
           Meet Our Exceptional Team
         </p>
       </div>
       <div className="grid grid-cols-1 text-xl lg:text-lg lg:grid-cols-3 gap-8 mx-auto">
         {teamMembers.map((member) => (
           <TeamMemberCard key={member.name} member={member} />
         ))}
       </div>
     </div>
   </section>
 );

 const teamMembers: TeamMember[] = [
   {
     name: "Emmy",
     title: "Business Development Manager",
     image: "/path/to/t3.png",
     email: "bauhaus01@gmail.com",
     phone: "078850101203",
     bio: "Emmy brings over 5 years of experience in business development and strategic planning. Specializing in market expansion and client relations, Emmy has successfully led numerous high-profile projects.",
   },
   {
     name: "Paul",
     title: "Project Manager",
     image: "/path/to/t1.jpg",
     email: "bauhaus01@gmail.com",
     phone: "078850134567",
     bio: "With expertise in event management and coordination, Paul ensures seamless execution of all our projects. His attention to detail and client-focused approach delivers exceptional results.",
   },
   {
     name: "Alain",
     title: "Sales & Marketing Manager",
     image: "/src/assets/A.jpg",
     email: "bauhaus01@gmail.com",
     phone: "0788501345",
     bio: "Alain leads our marketing initiatives with innovative strategies. His understanding of market trends and customer needs drives our business growth.",
   },
 ];

 const OurTeam: React.FC = () => {
   return (
     <div className="min-h-screen bg-white">
       <BannerSection />
       <TeamSection />
     </div>
   );
 };

 export default OurTeam;
