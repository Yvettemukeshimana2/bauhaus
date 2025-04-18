import React, { useState, useEffect, useCallback } from "react";
import { ShoppingCart } from "lucide-react";
import CartModal from "../Component/Categorycard";
import ItemModal from "../Component/Itemmodal";

// Type Definitions
type ItemType = {
  name: string;
  price: number;
};

type CartItem = {
  category: string;
  name: string;
  quantity: number;
  price: number;
};

type Category = {
  catid: number;
  catname: string;
  cattype: string;
  catimage: string;
  catdescription: string;
  type: "Vendor" | "Venue" | "Materials";
};

type Item = {
  itemid: number;
  itemname: string;
  catid: number;
  itemPPU: number;
  itemquantity: number;
  Itemimage: string | null;
  itemdiscription: string | null;
  Category: {
    catname: string;
    cattype: string;
  };
};

const EventPlannerPage: React.FC = () => {
  // State Management
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);

  const APIdata = import.meta.env.VITE_HOST;
  const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiamFkbyIsImlhdCI6MTczNzI3MDMyMn0.kkLgJDbm4ojjT1O3OjkELdfy8RBz1cmEesGK8ZvcBDc";

  // Data Fetching
  const fetchData = useCallback(async () => {
    try {
      const headers = { Authorization: `Bearer ${token}` };
      const categoryUrls = {
        vendor: `${APIdata}/cat/vendor`,
        venue: `${APIdata}/cat/venue`,
        material: `${APIdata}/item/materials`,
      };
      const itemsUrl = `${APIdata}/item/all`;

      const [vendorData, venueData, materialData, itemsData] =
        await Promise.all([
          fetch(categoryUrls.vendor, { headers }).then((res) => res.json()),
          fetch(categoryUrls.venue, { headers }).then((res) => res.json()),
          fetch(categoryUrls.material, { headers }).then((res) => res.json()),
          fetch(itemsUrl, { headers }).then((res) => res.json()),
        ]);

      const allCategories: Category[] = [
        ...vendorData.data.map((cat: Category) => ({
          ...cat,
          type: "Vendor",
        })),
        ...venueData.data.map((cat: Category) => ({ ...cat, type: "Venue" })),
        ...materialData.data.map((cat: Category) => ({
          ...cat,
          type: "Materials",
        })),
      ];

      setCategories(allCategories);
      setItems(itemsData.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, [APIdata, token]);

  // Effects
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (selectedCategory) {
      const filtered = items.filter(
        (item) => item.Category.catname === selectedCategory.catname
      );
      setFilteredItems(filtered);
    }
  }, [selectedCategory, items]);

  // Cart Management
  const handleAddToCart = (
    category: string,
    selectedItem: Item,
    type?: ItemType,
    quantity: number = 1
  ) => {
    const newCartItem: CartItem = {
      category,
      name: type?.name
        ? `${selectedItem.itemname} - ${type.name}`
        : selectedItem.itemname,
      quantity,
      price: type?.price ?? selectedItem.itemPPU,
    };

    setCart((prev) => [...prev, newCartItem]);
    setSelectedItem(null);
    setSelectedCategory(null);
  };

  const handleUpdateCart = (index: number, quantity: number) => {
    setCart((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const handleRemoveFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  // UI Components
  const CategoryCard: React.FC<{ category: Category }> = ({ category }) => (
    <div
      className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-all cursor-pointer"
      onClick={() => setSelectedCategory(category)}
    >
      <img
        src={
          category.catimage || "https://wallpaperaccess.com/full/5458954.jpg"
        }
        alt={category.catname}
        className="w-full h-48 object-cover rounded-t-lg"
        onError={(e) => {
          const imgElement = e.target as HTMLImageElement;
          imgElement.src = "https://wallpaperaccess.com/full/5458954.jpg";
        }}
      />
      <div className="mt-4">
        <h3 className="lg:text-lg text-2xl font-bold text-center">
          {category.catname}
        </h3>
        <p className="text-gray-600 lg:text-sm text-lg">
          {category.catdescription || "No description available"}
        </p>
      </div>
    </div>
  );

  const ItemCard: React.FC<{ item: Item }> = ({ item }) => (
    <div
      className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-all cursor-pointer"
      onClick={() => setSelectedItem(item)}
    >
      <img
        src={item.Itemimage || "https://wallpaperaccess.com/full/5458954.jpg"}
        alt={item.itemname}
        className="w-full h-48 object-cover rounded-t-lg"
        onError={(e) => {
          const imgElement = e.target as HTMLImageElement;
          imgElement.src = "https://wallpaperaccess.com/full/5458954.jpg";
        }}
      />
      <div className="mt-4">
        <h3 className="lg:text-lg text-2xl font-bold text-center">
          {item.itemname}
        </h3>
        <p className="text-gray-600 lg:text-sm text-lg">
          {item.itemdiscription || "No description available"}
        </p>
        <p className="text-yellow-500 font-bold text-center">
          ${item.itemPPU}
        </p>
      </div>
    </div>
  );

  const CategorySection: React.FC<{ type: Category["type"] }> = ({ type }) => (
    <div>
      <h2 className="lg:text-2xl text-4xl font-bold text-center text-yellow-500 mb-4">
        {type}
      </h2>
      <div className="grid grid-cols-3 lg:text-sm text-xl lg:grid-cols-4 gap-3">
        {categories
          .filter((cat) => cat.type === type)
          .map((category) => (
            <CategoryCard key={category.catid} category={category} />
          ))}
      </div>
    </div>
  );

  const totalItemsInCart = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="mx-auto px-4 py-8 mt-28">
      <div className="flex justify-between items-center mb-8">
        <h1 className="lg:text-2xl text-4xl font-bold text-yellow-500">
          Plan Your Event
        </h1>
        <div
          className="relative cursor-pointer"
          onClick={() => setIsCartOpen(true)}
        >
          <ShoppingCart className="w-8 h-8" />
          {totalItemsInCart > 0 && (
            <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {totalItemsInCart}
            </div>
          )}
        </div>
      </div>

      <div className="space-y-8">
        {loading ? (
          <p>Loading categories...</p>
        ) : (
          <>
            {!selectedCategory ? (
              ["Vendor", "Venue", "Materials"].map((type) => (
                <CategorySection key={type} type={type as Category["type"]} />
              ))
            ) : (
              <div>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="mb-4 px-4 py-2 bg-yellow-500 text-white rounded"
                >
                  Back to Categories
                </button>
                <h2 className="lg:text-2xl text-4xl font-bold text-center text-yellow-500 mb-4">
                  {selectedCategory.catname}
                </h2>
                <div className="grid grid-cols-3 lg:text-sm text-xl lg:grid-cols-5 gap-3">
                  {filteredItems.map((item) => (
                    <ItemCard key={item.itemid} item={item} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {selectedItem && (
        <ItemModal
          item={{
            name: selectedItem.itemname,
            description: selectedItem.itemdiscription || "",
            image:
              selectedItem.Itemimage ||
              "https://wallpaperaccess.com/full/5458954.jpg",
          }}
          category={selectedCategory?.cattype || null}
          onAddToCart={(category, _, type, quantity) =>
            handleAddToCart(category, selectedItem, type, quantity)
          }
          onClose={() => setSelectedItem(null)}
        />
      )}

      {isCartOpen && (
        <CartModal
          cart={cart}
          removeFromCart={handleRemoveFromCart}
          updateQuantity={handleUpdateCart}
          closeModal={() => setIsCartOpen(false)}
        />
      )}
    </div>
  );
};

export default EventPlannerPage;