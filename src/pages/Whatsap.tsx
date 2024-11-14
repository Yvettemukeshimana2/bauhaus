import React, { useState, useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import icon1 from "../assets/Muhe-Logo-white.png";
import Avatar from "../assets/images/Muhe-Logo-Black.png";
import { motion } from "framer-motion";
 const relatedQuestions: Record<string, string[]> = {
   "What types of rooms do you offer?": [
     "Do you have suite rooms available?",
     "Are there rooms with ocean views?",
     "Do you offer connecting rooms for families?",
   ],
   "What dining options are available?": [
     "Do you offer room service?",
     "Are there vegetarian menu options?",
     "What are your restaurant opening hours?",
   ],
   "What amenities do you provide?": [
     "Is there a swimming pool?",
     "Do you have a fitness center?",
     "Is parking available?",
   ],
   "Do you offer airport transfers?": [
     "What is the cost of airport pickup?",
     "How do I book a transfer?",
     "Is there a shuttle service available?",
   ],
   "What is your check-in/check-out policy?": [
     "Can I request early check-in?",
     "Is late check-out possible?",
     "What documents do I need for check-in?",
   ],
   "Do you have conference facilities?": [
     "What is the capacity of your meeting rooms?",
     "Do you provide catering for events?",
     "What audiovisual equipment is available?",
   ],
   "Is there a spa at the hotel?": [
     "What treatments do you offer?",
     "How can I book a spa appointment?",
     "Are there special spa packages?",
   ],
 };

 const faq: Record<string, string> = {
   "What types of rooms do you offer?":
     "We offer a variety of rooms including Standard, Deluxe, and Suite rooms. All rooms feature modern amenities, comfortable bedding, and complimentary Wi-Fi.",
   "What dining options are available?":
     "We have multiple dining venues including our main restaurant, rooftop bar, and café. We offer international cuisine, local specialties, and 24/7 room service.",
   "What amenities do you provide?":
     "Our amenities include a swimming pool, fitness center, spa, business center, free Wi-Fi, and concierge services.",
   "Do you offer airport transfers?":
     "Yes, we provide airport pickup and drop-off services. Please book at least 24 hours in advance for guaranteed availability.",
   "What is your check-in/check-out policy?":
     "Check-in time is 3:00 PM and check-out time is 12:00 PM. Early check-in and late check-out can be arranged based on availability.",
   "Do you have conference facilities?":
     "Yes, we offer state-of-the-art conference rooms and ballrooms with full audiovisual equipment and catering services.",
   "Is there a spa at the hotel?":
     "Yes, our luxury spa offers a range of treatments including massages, facials, and body treatments. Advanced booking is recommended.",
   "Do you have suite rooms available?":
     "Yes, we offer various suite options including Executive Suites and Family Suites with separate living areas.",
   "Are there rooms with ocean views?":
     "Yes, we have several room categories that offer stunning ocean views. Please specify your preference when booking.",
   "Do you offer connecting rooms for families?":
     "Yes, we have connecting rooms available. Please request during booking for availability.",
   "Is there a swimming pool?":
     "Yes, we have both indoor and outdoor swimming pools with dedicated children's areas.",
   "Do you have a fitness center?":
     "Our fully-equipped fitness center is open 24/7 with modern cardio and weight training equipment.",
   "What are your restaurant opening hours?":
     "Our main restaurant is open from 6:30 AM to 10:30 PM. The rooftop bar operates from 4:00 PM until midnight.",
   "Do you offer room service?":
     "Yes, we offer 24/7 room service with a variety of dining options.",
 };
const WhatsAppChatButton: React.FC = () => {
  const [chatActive, setChatActive] = useState(false);
  const [conversation, setConversation] = useState<
    { question: string; answer: string }[]
  >([]);
  const [remainingQuestions, setRemainingQuestions] = useState(
    Object.keys(faq).slice(0, 5)
  );
  const chatContentRef = useRef<HTMLDivElement>(null);
  const handleSelectQuestion = (question: string) => {
    const answer = faq[question];
    setConversation((prevConversation) => [
      ...prevConversation,
      { question, answer },
    ]);
    const updatedRemainingQuestions = remainingQuestions.filter(
      (q) => q !== question && !relatedQuestions[question]?.includes(q)
    );
    setRemainingQuestions(updatedRemainingQuestions);
  };
  const handleSelectAnotherQuestion = () => {
    setConversation([]);
    setRemainingQuestions(Object.keys(faq).slice(0, 5));
  };

  const handleCloseChat = () => {
    setChatActive(false);
    setConversation([]);
    setRemainingQuestions(Object.keys(faq).slice(0, 5));
  };

  useEffect(() => {
    if (chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
  }, [conversation]);

  return (
    <div className="fixed">
      <div className="">
        <style>
          {`
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          .bounce {
            animation: bounce 1.5s infinite;
          }
        `}
        </style>
        <button
          onClick={() => setChatActive(!chatActive)}
          className="fixed  bottom-16 right-4 bg-customGreen-700 animate-bounce text-white p-4 rounded-full z-50 shadow-lg hover:bg-customTeal-950 transition-colors duration-300"
          style={{ zIndex: 9999 }}
        >
          <FaWhatsapp className="sm:w-6 sm:h-6  w-24 h-24" />
        </button>
      </div>
      {chatActive && (
        <div
          className="fixed bottom-2 right-4  sm:w-96 p-4 bg-white   border-yellow-500 border-2 rounded-lg max-h-[70vh] overflow-y-96 shadow-md z-50"
          ref={chatContentRef}
          style={{ zIndex: 9999 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="flex items-center justify-between mb-4 bg-gradient-to-t from-yellow-500 to-yellow-700 p-2 rounded-lg">
              <div className="flex items-center space-x-2">
                <img
                  src={Avatar}
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">Jayne N.</p>
                  <p className="text-xs text-customTeal-950">Online</p>
                </div>
              </div>
              <button
                onClick={handleCloseChat}
                className="text-black font-bold hover:text-yellow-800 transition-colors duration-300"
              >
                &#x2715;
              </button>
            </div>
            <div className="text-sm text-gray-700 mb-4">
              <div className="flex flex-col space-y-2">
                <div className="self-start text-lg text-black rounded-lg">
                  <div className="not-italic text-sm pt-6 pb-2">
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="flex flex-col"
                    >
                      <div className="flex items-start space-x-2">
                        <img
                          src={icon1}
                          alt="Profile"
                          className="w-8 h-8 rounded-full"
                        />
                        <div className=" bg-gradient-to-t from-yellow-500 to-yellow-700 font-bold text-white p-2 rounded-lg">
                          <p>Need any help? Click here!</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2 mt-2">
                        <img
                          src={icon1} // Replace with actual image
                          alt="Profile"
                          className="w-8 h-8 rounded-full"
                        />
                        <div className=" bg-gradient-to-t from-yellow-500 to-yellow-700 font-bold text-white p-2 rounded-lg">
                          <p>How can I help you?</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
                {conversation.map((entry, index) => (
                  <div key={index}>
                    <div className="flex justify-end space-x-2">
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col"
                      >
                        <p className="bg-white text-yellow-500 text-sm p-2 rounded-md">
                          {entry.question}
                        </p>
                        <p className="text-xs text-yellow-400 text-right mt-1">
                          11:27 PM
                        </p>
                      </motion.div>
                    </div>
                    <div className="flex space-x-2">
                      <img
                        src={Avatar}
                        alt="Profile"
                        className="w-8 h-8 rounded-full"
                      />
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col"
                      >
                        <p className="bg-customTeal-950 shadow-sm rounded-md text-white bg-yellow-400 text-sm p-2">
                          {entry.answer}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">11:27 PM</p>
                      </motion.div>
                    </div>
                    {relatedQuestions[entry.question]?.length > 0 && (
                      <div className="flex flex-col mt-2 space-y-1">
                        <p className="text-sm font-semibold">
                          Related Questions:
                        </p>
                        {relatedQuestions[entry.question]?.map((q, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSelectQuestion(q)}
                            className="text-yellow-500  text-left hover:underline"
                          >
                            {q}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                {conversation.length > 0 &&
                  !relatedQuestions[
                    conversation[conversation.length - 1].question
                  ]?.length && (
                    <button
                      onClick={handleSelectAnotherQuestion}
                      className="text-yellow-500 text-sm mt-4 hover:underline transition-colors duration-300"
                    >
                      Ask another question
                    </button>
                  )}
                {!conversation.length && remainingQuestions.length > 0 && (
                  <ul className="list-none space-y-2 text-black">
                    {remainingQuestions.map((q, index) => (
                      <li key={index}>
                        <button
                          onClick={() => handleSelectQuestion(q)}
                          className="text-yellow-500 hover:underline"
                        >
                          {q}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="self-start text-black rounded-full mt-4">
              <p className="mt-4 text-gray-600 text-sm">
                Alternatively, send us a message directly on WhatsApp.
              </p>
              <div className="flex gap-5 animate-pulse                   ">
                <p className="mt-5 text-yellow-500">contact us on WhatsApp</p>
                <button className="mt-2  flex items-center  bg-green-700 text-white p-4 rounded-full shadow-md hover:bg-green-600 transition-colors duration-300">
                  <a
                    href="https://wa.me/+250788501009"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row justify-center items-center"
                  >
                    <FaWhatsapp className="w-5 h-5 " />
                  </a>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};
export default WhatsAppChatButton;