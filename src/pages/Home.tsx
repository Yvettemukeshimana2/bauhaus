 // src/pages/Home.tsx
import React, { useState, useEffect } from "react";
import im1 from "../assets/images/LOLA-Event-Productions-Wedding-Planning-Tent-RichHarvestFarm-034.jpg";
import im2 from "../assets/images/image1.avif";
import im3 from "../assets/images/3U8A0855.jpg";
import OurServices from "./service";
import AboutUs from "./Aboutus";
import OurProcess from "./Ourprocess";
import Specialties from "./Speciality";
const images = [
  {
    src: im1,
    description: "MHS a five-star quality service",
  },
  {
    src: im2,
    description:
      "From weddings to corporate gatherings, we bring your visions to life. BATO BATARI GITO",
  },
  {
    src: im3,
    description:
      "Based in Kigali, Muhe Hospitality Services provides comprehensive planning and coordination services.",
  },
];

const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);  

    return () => clearInterval(interval);  
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images[currentIndex].src}
            loading="lazy"
            alt="Slide"
            className="object-cover w-full h-full duration-500 ease-in-out"
          />
          <div
            className="absolute inset-0 bg-black"
            style={{
              opacity: 0.4,
            }}
          ></div>
        </div>
        <div className="pl-10 pt-32 z-0">
          <h1 className="text-2xl text-white font-semibold">
            {images[currentIndex].description}
          </h1>
          <h1 className="text-5xl md:text-5xl font-bold mt-10 animate-pulse text-white text-center">
            BATO <span className="text-yellow-500 ">BATARI GITO</span>
          </h1>
        </div>
      </div>
      <AboutUs />
      <OurServices />
      <Specialties />
      <OurProcess />
    </div>
  );
};
export default Home;