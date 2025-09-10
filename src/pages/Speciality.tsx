import React from "react";
 
 
const specialtiesData = [
  {
    title: "KARAOKE SPECIALTIES",
    description:
      "Private karaoke rooms with premium sound systems, extensive song library featuring 10,000+ tracks from every genre, themed karaoke nights, group performance competitions, and professional microphones. Perfect for birthday parties, corporate events, and intimate gatherings with friends.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "NIGHT CLUB FEATURES",
    description:
      "World-class DJs spinning the latest hits, VIP bottle service with premium spirits, state-of-the-art LED lighting and sound systems, themed party nights, dance floor with professional lighting effects, and exclusive VIP sections for private celebrations.",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "BAR EXCLUSIVES",
    description:
      "Expert mixologists crafting signature cocktails, premium spirits collection, craft beer selection, wine tasting events, cocktail making classes, happy hour specials, and elegant lounge atmosphere with comfortable seating and ambient lighting.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
];
const Specialties: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto  ">
      <h2 className="lg:text-2xl text-5xl font-bold text-customGreen-960 text-center  mt-10">
        Our Specialties
      </h2>
      <h1 className="text-sm">
        At Bauhaus Entertainment, each of our venues offers unique specialties that set them apart. 
        From intimate karaoke experiences to electrifying night club vibes and sophisticated bar atmospheres, 
        we provide distinct entertainment options tailored to different preferences and occasions.
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {specialtiesData.map((specialty, index) => (
          <div key={index} className="  p-6 rounded-lg ">
            <img
              src={specialty.image}
              loading="lazy"
              alt={specialty.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="lg:text-lg text-3xl  font-semibold 
            ">
              {specialty.title}
            </h3>
            <p className="lg:text-sm text-xl text-gray-700">
              {specialty.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Specialties;