 // Helpers.tsx

// Function to render category items
import { ItemType,CategoryType } from "./category";
export const renderCategoryItems = (category: CategoryType, onSelectItem: (item: ItemType) => void) => {
  return category.items.map((item) => (
    <div key={item.name} className="flex flex-col items-center border p-4 rounded-lg shadow-md">
      <img src={item.image} alt={item.name} className="h-32 w-32 object-cover rounded-lg" />
      <p className="text-center font-bold">{item.name}</p>
      <p className="text-center text-gray-600">{item.description}</p>
      <button
        className="bg-yellow-500 text-white p-2 rounded mt-2"
        onClick={() => onSelectItem(item)} // Handle item selection
      >
        Select
      </button>
    </div>
  ));
};
