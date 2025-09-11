// src/pages/Home.tsx
import React, { useState, useEffect } from "react";
// import im1 from "../assets/images/LOLA-Event-Productions-SouthAsianFlare-Wedding-Chicago-OldPostOffice_0701.jpg";
// import im2 from "../assets/h1.jpeg";
import im3 from "../assets/1002687045s[1](1).jpg";
import im4 from "../assets/c.jpg"
import OurServices from "./service";
import AboutUs from "./Aboutus";
import Specialties from "./Speciality";
const images = [
  {
    src: "https://i.ytimg.com/vi/fFFQSdTK5c0/maxresdefault.jpg",
    description: " ",
  },
  {
    src:  im4,
    description: "",
  },
  {
    src: im3,
    description: "",
  },
];
const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col  items-center">
      <div className="relative  w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images[currentIndex].src}
            srcSet={`${images[currentIndex].src}?w=500 500w, ${images[currentIndex].src}?w=1000 1000w`}
            sizes="(max-width: 768px) 500px, 1000px"
            loading="lazy"
            alt="Slide"
            className="object-cover w-full h-full duration-500 ease-in-out"
          />
          <div
            className="absolute inset-0 bg-black"
            style={{
              opacity: 0.6,
            }}
          ></div>
        </div>
        <div className="pl-10 pt-32 z-0 text-xl sm:text-lg md:text-lg ">
          <h1 className="text-2xl ml-36 lg:text-6xl text-white font-semibold">
            {images[currentIndex].description}
          </h1>
          {/* <h1 className="text-yellow-500 text-xs pl-36 font-semibold">Muhe Hospitality Services</h1> */}
          <h1 className="text-4xl md:text-4xl sm:text-4xl font-bold mt-10 animate-pulse text-white text-center">
            <span className="text-white ">
              Experience the ultimate nightlife — a vibrant karaoke bar and
              energetic night club all in one place at BAUHAUS </span>
          </h1>
        </div>
      </div>
      <AboutUs />
      <OurServices />
      <Specialties />
    </div>
  );
};
export default Home;
