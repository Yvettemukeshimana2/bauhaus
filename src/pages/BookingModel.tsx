import React from "react";
import { Service } from "./Servicedata";

interface BookingModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({
  service,
  isOpen,
  onClose,
}) => {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Book {service.title}</h2>
     <button
          onClick={onClose}
          className="px-4 py-2 bg-red-500 text-white rounded mt-6"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default BookingModal;
