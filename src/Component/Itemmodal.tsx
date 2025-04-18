 import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

interface ItemType {
  name: string;
  description?: string;
  image: string;
  types?: ItemTypeOption[];
}

interface Item {
  id: string;
  name: string;
  price: number;
  description?: string;
  image?: string;
}

interface ItemTypeOption {
  name: string;
  price: number;
}

interface ItemModalProps {
  item: ItemType | null;
  category: string | null;
  onClose: () => void;
  onAddToCart: (
    category: string,
    item: Item,
    type?: ItemTypeOption,
    quantity?: number
  ) => void;
}

const ItemModal: React.FC<ItemModalProps> = ({
  item,
  category,
  onClose,
  onAddToCart,
}) => {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [availableTypes, setAvailableTypes] = useState<ItemTypeOption[]>([]);

  useEffect(() => {
    if (category && item) {
      setAvailableTypes(item.types || []);
      setSelectedType(null);
      setQuantities({});
    }
  }, [category, item]);

  if (!item || !category) return null;

  const handleQuantityChange = (type: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [type]: Math.max(0, (prev[type] || 0) + delta),
    }));
  };

  const handleAddToCart = () => {
    if (availableTypes.length > 0 && selectedType) {
      const quantity = quantities[selectedType] || 0;
      const selectedItemType = availableTypes.find(
        (t) => t.name === selectedType
      );
      if (selectedItemType && quantity > 0) {
        onAddToCart(
          category,
          {
            id: "",
            name: `${item.name} (${selectedItemType.name})`,
            price: selectedItemType.price,
          },
          selectedItemType,
          quantity
        );
      }
    } else {
      onAddToCart(category, { id: "", name: item.name, price: 0 });
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl mx-4 shadow-lg flex flex-col max-h-[90vh]">
        
        {/* Fixed Header */}
        <div className="sticky top-0 bg-white p-6 border-b flex justify-between items-center z-10">
          <h2 className="text-2xl font-bold">{item.name}</h2>
          <button
            onClick={onClose}
            className="hover:bg-gray-100 p-1 rounded-full"
          >
            <X className="text-gray-600" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto flex-grow">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />

          {item.description && (
            <p className="text-gray-600 mb-4">{item.description}</p>
          )}

          {availableTypes.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-yellow-500">Select Type</h3>
              {availableTypes.map((type) => (
                <div
                  key={type.name}
                  className="flex justify-between items-center py-2 border-b"
                >
                  <div>
                    <p className="font-medium">{type.name}</p>
                    <p className="text-yellow-500">${type.price}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <button
                        className="px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded"
                        onClick={() => handleQuantityChange(type.name, -1)}
                      >
                        -
                      </button>
                      <span className="w-8 text-center">
                        {quantities[type.name] || 0}
                      </span>
                      <button
                        className="px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded"
                        onClick={() => handleQuantityChange(type.name, 1)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => setSelectedType(type.name)}
                      className={`px-4 py-2 rounded transition-colors ${
                        selectedType === type.name
                          ? "bg-yellow-500 text-white"
                          : "bg-gray-100 hover:bg-gray-200"
                      }`}
                    >
                      {selectedType === type.name ? "Selected" : "Select"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Fixed Footer */}
        <div className="sticky bottom-0 bg-white p-6 border-t flex justify-end gap-2 z-10">
          <button
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded transition-colors"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded transition-colors"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
