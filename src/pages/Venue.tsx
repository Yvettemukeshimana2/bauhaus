import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Calendar,
  Clock,
  Mail,
  User,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  Mic,
  GlassWater,
  PartyPopper,
  X,
} from "lucide-react";

// Constants
const API_URL = import.meta.env.VITE_HOST;
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiamFkbyIsImlhdCI6MTczNzI3MDMyMn0.kkLgJDbm4ojjT1O3OjkELdfy8RBz1cmEesGK8ZvcBDc";

// Types
interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const SERVICES: Service[] = [
  {
    id: 1,
    title: "Karaoke Nights",
    description:
      "Host an unforgettable karaoke night with our professional equipment and extensive song library. Perfect for parties and gatherings.",
    icon: <Mic className="w-4 h-4" />,
    image:
      "https://images.unsplash.com/photo-1543789392-ae78f0d04b86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Nightclub Experience",
    description:
      "Transform your venue into a pulsating nightclub. We provide top-tier DJs, lighting, and sound systems for an epic dance floor.",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <PartyPopper className="w-4 h-4" />,
  },
  {
    id: 3,
    title: "Bar & Mixology",
    description:
      "Elevate your event with a professional mobile bar and expert mixologists crafting custom cocktails to delight your guests.",
    image:
      "https://images.unsplash.com/photo-1514933651105-0646ef70c11cd?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <GlassWater className="w-4 h-4" />,
  },
];

const ServiceCard: React.FC<{
  service: Service;
  onBook: (service: Service) => void;
  onReadMore: (id: number) => void;
}> = ({ service,   }) => (
  <div className="bg-white rounded-lg overflow-hidden border-2 border-custom-green-960 transition-all hover:shadow-lg">
    <img
      src={service.image}
      alt={service.title}
      className="w-full h-60 object-cover"
    />
    <div className="p-4">
      <div className="flex items-center gap-2 mb-2">
        {service.icon}
        <h2 className="text-sm font-bold">{service.title}</h2>
      </div>
      <p className="text-gray-700 mb-4 text-sm">{service.description}</p>
      <div className="flex justify-between items-center">
        <button
          // onClick={() => onReadMore(service.id)}
          className="flex items-center text-custom-green-960 text-sm hover:text-custom-green-960 group"
        >
          Read More
          <ChevronRight className="ml-1 transition-transform group-hover:translate-x-1" />
        </button>
        {/* <button
          onClick={() => onBook(service)}
          className="border-2 border-custom-green-960 px-4 py-2 text-sm text-black hover:bg-green-50 transition-colors rounded-lg"
        >
          Book Service
        </button> */}
      </div>
    </div>
  </div>
);

const Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

const BookingForm: React.FC<{
  selectedService?: Service;
  onClose: () => void;
  onSuccess: () => void;
}> = ({ selectedService, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    contactName: "",
    email: "",
    phonenumber: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    eventType: selectedService?.title || "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(`${API_URL}/item/bookingevent`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit booking");

      onSuccess();
      onClose();
    } catch (error) {
      setError(error instanceof Error ? error.message : "Booking failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg">
          <AlertCircle className="text-red-500" />
          <p className="text-red-700">{error}</p>
        </div>
      )}

      <div className="space-y-4">
        <div className="flex justify-between">
          <div>
            <label className="text-sm font-medium mb-1 flex items-center gap-2">
              <User className="w-4 h-4" /> Contact Name
            </label>
            <input
              type="text"
              value={formData.contactName}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  contactName: e.target.value,
                }))
              }
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-custom-green-960 outline-none"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-1 flex items-center gap-2">
              <Mail className="w-4 h-4" /> Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-custom-green-960 outline-none"
              required
            />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium mb-1 flex items-center gap-2">
            Phone Number
          </label>
          <input
            type="phone number"
            value={formData.phonenumber}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, phonenumber: e.target.value }))
            }
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-custom-green-960 outline-none"
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium mb-1 flex items-center gap-2">
            {selectedService?.icon} Services
          </label>
          <select
            value={formData.eventType}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, eventType: e.target.value }))
            }
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-custom-green-960 outline-none"
            required
          >
            <option value="">Select Services</option>
            {SERVICES.map((service) => (
              <option key={service.id} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-1 flex items-center gap-2">
              <Calendar className="w-4 h-4" /> Date
            </label>
            <input
              type="date"
              value={formData.startDate}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, startDate: e.target.value }))
              }
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-custom-green-960 outline-none"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 flex items-center gap-2">
              <Clock className="w-4 h-4" /> Start Time
            </label>
            <input
              type="time"
              value={formData.startTime}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, startTime: e.target.value }))
              }
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-custom-green-960 outline-none"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-1 flex items-center gap-2">
              <Clock className="w-4 h-4" /> End Time
            </label>
            <input
              type="time"
              value={formData.endTime}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, endTime: e.target.value }))
              }
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-custom-green-960 outline-none"
              required
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-custom-green-960 text-white py-2 rounded-lg hover:bg-green-950 transition-colors flex items-center justify-center gap-2"
      >
        <CheckCircle className="w-4 h-4" /> Book Now
      </button>
    </form>
  );
};

const SuccessModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose} title="Booking Successful">
    <div className="text-center">
      <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
      <h3 className="text-lg font-semibold mb-2">
        Thank you for your booking!
      </h3>
      <p className="text-gray-600 mb-4">
        We have received your request and will contact you shortly.
      </p>
      <button
        onClick={onClose}
        className="bg-custom-green-960 text-white px-6 py-2 rounded-lg hover:bg-green-950 transition-colors"
      >
        Close
      </button>
    </div>
  </Modal>
);

const ServicesPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service>();

  const handleReadMore = (id: number) => {
    navigate(`/services/${id}`);
  };

  const handleBookService = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="relative bg-black">
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Nightclub Header"
          className="w-full h-96 object-cover opacity-40"
        />
        <div className="absolute inset-0 flex justify-center text-center mt-7">
          <div className="container mx-auto px-6 top-36 absolute">
            <h1 className="text-2xl ml-5 lg:text-6xl text-white font-semibold">
              Bauhaus
            </h1>
            <h1 className="text-custom-green-960 text-xs pl-5 font-semibold">
              Bauhaus Entertainment
            </h1>
            <h1 className="text-4xl md:text-4xl sm:text-4xl font-bold mt-10 animate-pulse text-white text-center">
              PREMIUM{" "}
              <span className="text-custom-green-960 ">ENTERTAINMENT</span>
            </h1>
          </div>
        </div>
      </header>

      <div className="text-center py-8">
        
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onBook={handleBookService}
              onReadMore={handleReadMore}
            />
          ))}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Book ${selectedService?.title || "Service"}`}
      >
        <BookingForm
          selectedService={selectedService}
          onClose={() => setIsModalOpen(false)}
          onSuccess={() => {
            setIsModalOpen(false);
            setIsSuccessModalOpen(true);
          }}
        />
      </Modal>

      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
    </div>
  );
};

export default ServicesPage;