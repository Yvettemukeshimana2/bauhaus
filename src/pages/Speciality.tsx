import React from "react";
import weddingImage from "../assets/images/planning-picture.jpg";
import partyImage from "../assets/images/LOLA-Event-Productions-SouthAsianFlare-Wedding-Chicago-OldPostOffice_0699.jpg";
const specialtiesData = [
  {
    title: "WEDDINGS",
    description:
      "At MHS, we specialize in orchestrating weddings and corporate events at offsite locations. We offer a wide range of services, including venue scouting, transportation, accommodations, dining, and decor, ensuring every detail is meticulously planned for a memorable event.",
    image: weddingImage,
  },
  {
    title: "PARTIES",
    description:
      "MHS is your go-to choice for offsite party planning. Our comprehensive services encompass venue selection, transportation, accommodations, decor, and more, providing a seamless experience for various events, from parties to corporate gatherings. Our expert team ensures your event is productive or relaxing, tailored to your needs.",
    image: partyImage,
  },
];
const Specialties: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto  ">
      <h2 className="text-4xl font-bold text-center mt-10">Our Specialties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {specialtiesData.map((specialty, index) => (
          <div key={index} className="  p-6 rounded-lg ">
            <img
              src={specialty.image}
              alt={specialty.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4 text-yellow-600">
              {specialty.title}
            </h3>
            <p className="text-md text-gray-700">{specialty.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Specialties;