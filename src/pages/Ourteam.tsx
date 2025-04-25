 import React, { useState, ReactNode } from "react";
import { Mail, Phone } from "lucide-react";
import salto from "../assets/mh3.jpg"
// Types
interface CardProps {
  children: ReactNode;
  className?: string;
}

interface ExpandableTextProps {
  text: string;
  maxLength?: number;
}

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
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
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

const BannerSection: React.FC = () => (
  <section className="relative bg-gradient-to-r from-yellow-50 to-yellow-100 py-10">
    <div className="absolute inset-0 bg-opacity-50"></div>
    <div className=" container mx-auto text-center">
      <h1 className="text-4xl font-bold text-yellow-500 mb-4">
        <h3 className=" text-2xl lg:text-lg font-bold mb-4">
          Ready to Create Something Amazing?
        </h3>
      </h1>
      <p className="text-xl text-gray-700 font-semibold">
        <p className="text-gray-600  text-lg lg:text-sm mb-8">
          Let's work together to bring your vision to life.
        </p>
      </p>
    </div>
  </section>
);

const ExpandableText: React.FC<ExpandableTextProps> = ({ text, maxLength = 250 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = text.length > maxLength;
  const displayText = shouldTruncate && !isExpanded 
    ? text.slice(0, maxLength) + "..." 
    : text;

  return (
    <div className="space-y-4">
      <p className="text-gray-700 leading-relaxed">{displayText}</p>
      {shouldTruncate && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="px-6 py-2 border-2 border-yellow-500 text-yellow-500 
                     hover:bg-yellow-600 hover:text-white rounded-md 
                     transition-all duration-300 font-semibold"
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

const CEOSection: React.FC = () => {
  const ceoContent = `Salton MUHETO, the owner, and director of Muhe Hospitality Services (MHS) is a prominent figure in Rwanda's hospitality industry. With over six years of experience in prestigious hotels and events, MUHETO has established himself as a dedicated and visionary entrepreneur. Throughout his career, MUHETO has gained extensive expertise in the hospitality sector, refining his skills, and accumulating invaluable experiences. Holding a bachelor's degree in hospitality management and currently pursuing a Master of Business Administration (MBA) specializing in Project Management, he aspires to become a professional event and wedding planner. MUHETO's boundless imagination, exceptional multitasking abilities, and positive outlook have made him a go-to person in his region, contributing to the growth of Rwanda's hospitality industry. He utilizes available resources to help communities, particularly the youth, create career opportunities by applying their knowledge and skills. His goal is to position Rwanda as the most favorable hospitality and event destination in Africa. Driven by the desire to make a visible and meaningful contribution to his country, MUHETO embraced entrepreneurship in events management. As a Rwandan, he has always pondered ways to contribute to the development and progress of his nation. Through the knowledge and skills he acquired, he chose to embark on the path of event planning, aiming to leave a lasting impact.`;

  return (
    <Card className="my-12 mx-auto max-w-7xl">
      <CardContent className="flex flex-col lg:flex-row items-start gap-8">
        <div className="lg:w-1/3">
          <img
            src={salto}
            loading="lazy"
            alt="Salton MUHETO"
            className="rounded-lg  w-full object-cover"
          />
        </div>
        <div className="lg:w-2/3 space-y-4">
          <h2 className="lg:text-xl text-2xl font-bold text-gray-800">Salton MUHETO</h2>
          <h3 className="lg:text-lg text-xl font-semibold text-yellow-500">
            CEO & Founder
          </h3>
          <div className=" text-lg lg:text-sm">
            <ExpandableText text={ceoContent} maxLength={500} />
          </div>
        </div>
      </CardContent>
    </Card>
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
        <p className="text-yellow-500 font-medium">{member.title}</p>
        <div className="text-sm">
          {member.bio && <ExpandableText text={member.bio} maxLength={150} />}
        </div>
      </div>
      <div className="flex justify-center  space-x-3 mt-6">

        <SocialLink  href={member.email} icon={<Mail size={14} />} label="Email" />
        
        <SocialLink href={member.phone} icon={<Phone size={14} />} label="Phone" />
      </div>
    </CardContent>
  </Card>
);

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <a
    href={href}
    aria-label={label}
    className="text-gray-600 hover:text-yellow-700 transition-colors duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

const TeamSection: React.FC = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className=" text-2xl lg:text-xl font-bold text-yellow-500">MHS TEAM</h2>
        <p className="lg:text-lg text-lg text-gray-600 mt-2">Meet Our Exceptional Team</p>
      </div>
      <div className="grid grid-cols-1 text-xl lg:text-lg lg:grid-cols-3 gap-8  mx-auto">
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
    email: "info@muheservices.com",
 
    phone: "0788501009",
    bio: "Emmy brings over 5 years of experience in business development and strategic planning. Specializing in market expansion and client relations, Emmy has successfully led numerous high-profile projects.",
  },
  {
    name: "Paul",
    title: "Project Manager",
    image: "/path/to/t1.jpg",
    email: "info@muheservices.com",
    
    phone: "0788501009",
    bio: "With expertise in event management and coordination, Paul ensures seamless execution of all our projects. His attention to detail and client-focused approach delivers exceptional results.",
  },

  {
    name: "Alain",
    title: "Sales & Marketing Manager",
    image: "/src/assets/A.jpg",
    email: "info@muheservices.com",
    phone: "0788501009",
    bio: "Alain leads our marketing initiatives with innovative strategies. His understanding of market trends and customer needs drives our business growth.",
  },
];
const OurTeam: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <BannerSection />
      <div className="container mx-auto px-4">
        <CEOSection />
      </div>
      <TeamSection />
    </div>
  );
};

export default OurTeam;