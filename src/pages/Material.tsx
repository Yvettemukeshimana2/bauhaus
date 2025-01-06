 import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import bg from "../assets/images/DSC_3894.jpg";
import BookingModal, { BookingFormData } from "./Materialmodel";

interface Material {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  priceUnit: string;
  category: string;
}

const HospitalityMaterials: React.FC = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [materials, setMaterials] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const token = "mysecret";  

  
  useEffect(() => {
    const fetchMaterials = async () => {
      setLoading(true);
      setError(null);
try {
  const response = await fetch("https://muheservices.vercel.app/item/all", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,   
    },
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  const materialsData = data.data || [];

  const transformedMaterials = materialsData.map((item: any) => ({
    id: item.itemid.toString(),
    name: item.itemname || "Unnamed Material",
    description: item.itemdescription || "No description available",
    imageUrl: item.Itemimage || "/default-image.jpg",
    price: item.itemPPU || 0,
    priceUnit: "unit",
    category: item.Category?.catname || "Uncategorized",
  }));

  setMaterials(transformedMaterials);
} catch (err) {
  console.error("Failed to fetch materials:", err);
  setError("Failed to load materials. Please check your network connection.");
} finally {
  setLoading(false);
}
    };

    fetchMaterials();
  }, []);

  const handleBookNow = (material: Material) => {
    setSelectedMaterial(material);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMaterial(null);
  };

  const handleBookingSubmit = (data: BookingFormData) => {
    console.log("Booking submitted:", data);
  };

  return (
    <div className="container min-h-full max-w-screen-2xl">
      <header className="relative bg-black overflow-hidden">
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={bg}
          alt="Our Services"
          className="w-full h-96 mt-20 object-cover opacity-40 bg-black"
        />
        <div className="absolute inset-0 flex justify-center space-y-5 text-center">
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl absolute top-1/2 transform animate-bounce md:text-5xl font-bold text-white text-center"
          >
            BATO <span className="text-yellow-500">BATARI GITO</span>
          </motion.h1>
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute bottom-24 animate-pulse text-white text-4xl font-bold"
          >
            MHS (Muhe Hospitality Service)
          </motion.h1>
          <motion.button
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute p-2 border-2 animate-pulse border-yellow-400 bottom-3 rounded-md text-white text-4xl font-bold hover:bg-yellow-500 duration-300"
          >
            Let's Talk
          </motion.button>
        </div>
      </header>

      <h1 className="text-4xl font-bold mt-5 text-center text-yellow-500">
        Rental Materials
      </h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading materials...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : materials.length > 0 ? (
        <div className="grid grid-cols-1 p-10 md:grid-cols-4 w-full gap-8">
          {materials.map((material) => (
            <div
              key={material.id}
              className={`bg-white rounded-lg shadow-md overflow-hidden relative ${
                material.category === "Tents" ? "col-span-2" : ""
              }`}
            >
              <img
                src={material.imageUrl}
                loading="lazy"
                alt={material.name}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 p-6 flex flex-col justify-center">
                <h2 className="text-xl font-bold mb-2 text-white">
                  {material.name}
                </h2>
                <p className="text-gray-300 mb-4">{material.description}</p>
                <p className="text-gray-300 font-bold mb-4">
                  ${material.price} per {material.priceUnit}
                </p>
                <button
                  onClick={() => handleBookNow(material)}
                  className="text-yellow-500 border-2 border-yellow-500 hover:text-yellow-700 font-bold py-2 px-4 rounded"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No materials available</p>
      )}

      {selectedMaterial && (
        <BookingModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          material={selectedMaterial}
          onSubmit={handleBookingSubmit}
        />
      )}
    </div>
  );
};

export default HospitalityMaterials;
