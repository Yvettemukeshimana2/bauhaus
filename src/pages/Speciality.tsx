import React from "react";
 
import partyImage from "../assets/images/LOLA-Event-Productions-SouthAsianFlare-Wedding-Chicago-OldPostOffice_0699.jpg";
const specialtiesData = [
  {
    title: "VENUES",
    description:
      " MHS,Recommends and secures the perfect location based on your event type and guest sizeHandles venue setup, seating, lighting, and technical arrangements  .",
    image:
      "https://media.cntraveler.com/photos/56e0811762c2faba1dda7045/master/pass/peabody-opera-house-wedding-cr-mnc-photography.jpg",
  },
  {
    title: "VENDORS",
    description:
      "MHS  Ensures each vendor delivers on time and meets quality standards.",
    image:
      "https://michiganbarnwedding.com/wp-content/uploads/2016/11/wedding-vendor.jpg",
  },
  {
    title: "MATERIALS",
    description:
      "MHS  Provides or sources high-quality materials tailored to your theme ,Ensures materials match your color scheme, brand, or occasion Manages setup and teardown of all materials.",
    image: partyImage,
  },
];
const Specialties: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto  ">
      <h2 className="lg:text-2xl text-5xl font-bold text-center text-yellow-500 mt-10">
        Our Specialties
      </h2>
      <h1 className="text-sm">
        At Muhe Hospitality Services (MHS), our specialty is simple: “We plan
        your event – or help you plan it yourself, just the way you wish!”
        Whether you want a fully-managed experience or prefer to be involved in
        every detail, MHS offers flexible, personalized concierge-style support
        tailored to your needs.
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
            <h3 className="lg:text-lg text-3xl font-semibold mb-4 text-yellow-500">
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