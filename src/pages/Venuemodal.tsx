import React from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  maxWidth?: string;
  showCloseButton?: boolean;
  overlayClassName?: string;
  modalClassName?: string;
  titleClassName?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = "max-w-md",
  showCloseButton = true,
  overlayClassName = "bg-black bg-opacity-50",
  modalClassName = "bg-white",
  titleClassName = "text-2xl font-bold mb-6 text-yellow-600",
}) => {
  if (!isOpen) return null;

  // Close modal when clicking overlay (outside modal)
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle escape key press
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent scrolling on body when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-center items-center ${overlayClassName}`}
      onClick={handleOverlayClick}
    >
      <div
        className={`${modalClassName} rounded-lg p-6 w-full ${maxWidth} relative`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
      >
        {showCloseButton && (
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        )}

        {title && (
          <h2 id="modal-title" className={titleClassName}>
            {title}
          </h2>
        )}

        {children}
      </div>
    </div>
  );
};

export default Modal;
