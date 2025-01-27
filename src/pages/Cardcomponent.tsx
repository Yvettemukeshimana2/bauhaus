import React from "react";
import { useNavigate } from "react-router-dom";
import { cardsData } from "./Carddata";
 import { motion } from "framer-motion";  

const CardComponent: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (cardId: number) => {
    const selectedCard = cardsData.find((card) => card.id === cardId);
    if (selectedCard) {
      navigate(`/card-detail/${cardId}`, { state: selectedCard });
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {cardsData.map((card) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
                   animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5}}
                   whileHover={{ scale: 1.05 }}
              key={card.id}
              className="cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden"
              onClick={() => handleCardClick(card.id)}
            >
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="lg:text-lg text-2xl font-semibold">{card.title}</h3>
                <p className="lg:text-sm text-2xl text-gray-600 mt-2">
                  {card.description.substring(0, 50)}...
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardComponent;
