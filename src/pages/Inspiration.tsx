import React from "react";
import { motion } from "framer-motion";
import {
  GlassWater,
  Wine,
  Coffee,
  Zap,
  
  UtensilsCrossed,
  ChefHat,
  
  Music,
  Sparkles,
  Award,
} from "lucide-react";

// Types
interface BarFeature {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  highlights: string[];
}

const BAR_FEATURES: BarFeature[] = [
  {
    id: 1,
    title: "Signature Cocktails",
    description:
      "Our master mixologists craft exceptional cocktails using premium spirits, fresh ingredients, and house-made syrups. Each drink is a work of art, perfectly balanced and beautifully presented.",
    image:
      "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=2070&auto=format&fit=crop",
    icon: <GlassWater className="w-6 h-6" />,
    highlights: [
      "House-made signature cocktails",
      "Premium spirits collection",
      "Fresh daily ingredients",
      "Artisanal garnish presentations",
    ],
  },
  {
    id: 2,
    title: "Fine Wine Selection",
    description:
      "Discover our carefully curated wine collection featuring exceptional bottles from renowned vineyards worldwide. From bold reds to crisp whites and celebratory champagnes.",
    image:
      "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=2070&auto=format&fit=crop",
    icon: <Wine className="w-6 h-6" />,
    highlights: [
      "International wine collection",
      "Vintage selections available",
      "Expert sommelier recommendations",
      "Perfect food pairings",
    ],
  },
  {
    id: 3,
    title: "Craft Beer Experience",
    description:
      "Experience the finest selection of local and international craft beers. Our rotating taps feature everything from hoppy IPAs to smooth lagers and seasonal specialties.",
    image:
      "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=2070&auto=format&fit=crop",
    icon: <Zap className="w-6 h-6" />,
    highlights: [
      "15+ premium beers on tap",
      "Local brewery partnerships",
      "Seasonal specialty selections",
      "Beer tasting experiences",
    ],
  },
  {
    id: 4,
    title: "Gourmet Cuisine",
    description:
      "Our talented chefs create exceptional dishes using the finest ingredients. From contemporary international cuisine to beloved local favorites, every meal is memorable.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
    icon: <UtensilsCrossed className="w-6 h-6" />,
    highlights: [
      "Contemporary international menu",
      "Local Rwandan specialties",
      "Fresh ingredients daily",
      "Vegetarian and dietary options",
    ],
  },
  {
    id: 5,
    title: "Coffee & Desserts",
    description:
      "Indulge in our premium coffee selections and artisanal desserts. Perfect for afternoon meetings, casual catch-ups, or a sweet ending to your evening.",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2070&auto=format&fit=crop",
    icon: <Coffee className="w-6 h-6" />,
    highlights: [
      "Artisanal coffee blends",
      "Espresso and specialty drinks",
      "House-made desserts",
      "Perfect afternoon treats",
    ],
  },
  {
    id: 6,
    title: "Entertainment & Events",
    description:
      "Experience live entertainment, DJ nights, and special events in our vibrant atmosphere. From intimate dinners to lively celebrations, we create unforgettable moments.",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2080&auto=format&fit=crop",
    icon: <Music className="w-6 h-6" />,
    highlights: [
      "Live music performances",
      "DJ entertainment nights",
      "Private event hosting",
      "Themed celebration nights",
    ],
  },
];

const FeatureCard: React.FC<{
  feature: BarFeature;
  index: number;
}> = ({ feature, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
  >
    <div className="relative h-80 overflow-hidden">
      <img
        src={feature.image}
        alt={feature.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-6 left-6 text-white">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-amber-500 rounded-lg">{feature.icon}</div>
          <span className="font-bold text-2xl">{feature.title}</span>
        </div>
      </div>
    </div>

    <div className="p-8">
      <p className="text-gray-700 mb-6 leading-relaxed text-lg">
        {feature.description}
      </p>

      <div className="space-y-3">
        {feature.highlights.map((highlight, idx) => (
          <div key={idx} className="flex items-center gap-3 text-gray-600">
            <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
            <span className="font-medium">{highlight}</span>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const BauhausRestoBar = () => {
  return (
    <div className="min-h-screen bg-customGreen-960">
      {/* Hero Section */}
      <header className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop"
            alt="Bauhaus Resto Bar Interior"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center text-white z-10 px-6 max-w-5xl"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="mb-12"
          >
            <h1 className="text-2xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
              BAUHAUS
            </h1>
            <div className="w-40 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto mb-8"></div>
            <p className="text-2xl md:text-3xl font-light text-amber-200 mb-6">
              Resto Bar & Entertainment
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="space-y-2"
          >
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light">
              Where exceptional cuisine meets premium beverages in an atmosphere
              of sophistication. Experience the perfect blend of fine dining,
              craft cocktails, and vibrant entertainment in the heart of Kigali.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </header>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-b from-customGreen-960 ">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl font-bold text-white mb-8">
              DISCOVER <span className="text-amber-400">BAUHAUS</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Bauhaus Resto Bar is Kigali's premier destination for exceptional
              dining and entertainment. We combine world-class cuisine, premium
              beverages, and vibrant atmosphere to create unforgettable
              experiences for every occasion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {BAR_FEATURES.map((feature, index) => (
              <FeatureCard key={feature.id} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-5xl font-bold text-white mb-8">
                THE <span className="text-amber-400">EXPERIENCE</span>
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 mb-8"></div>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Step into Bauhaus and immerse yourself in an atmosphere where
                every detail has been carefully crafted to provide an
                extraordinary experience. From the moment you arrive, you'll
                discover why we're Kigali's most celebrated resto bar.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      Award-Winning Excellence
                    </h4>
                    <p className="text-gray-400">
                      Recognized for outstanding service, cuisine, and
                      atmosphere
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <ChefHat className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      Expert Culinary Team
                    </h4>
                    <p className="text-gray-400">
                      Master chefs and mixologists creating exceptional
                      experiences
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      Sophisticated Ambiance
                    </h4>
                    <p className="text-gray-400">
                      Elegant design and atmosphere perfect for any occasion
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1968&auto=format&fit=crop"
                  alt="Bar Interior"
                  className="rounded-2xl shadow-2xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1974&auto=format&fit=crop"
                  alt="Restaurant Dining"
                  className="rounded-2xl shadow-2xl mt-8"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-500 rounded-full opacity-20 blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BauhausRestoBar;