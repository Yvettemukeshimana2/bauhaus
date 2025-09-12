 
import { motion } from "framer-motion";
import { Music, Volume2, Users, Clock, Calendar, MapPin } from "lucide-react";

const BauhausNightclub = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="src/assets/night.jpg"
            alt="Bauhaus Nightclub"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            BAUHAUS
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-black to-customGreen-960 mx-auto mb-6"></div>
          <p className="text-2xl md:text-3xl font-light text-purple-200 mb-8">
            NIGHTCLUB EXPERIENCE
          </p>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            Where music comes alive and nights become unforgettable. Experience
            Kigali's premier nightclub destination.
          </p>
        </motion.div>
      </section>

      {/* About Nightclub */}
      <section className="py-20 bg-gradient-to-b from-customGreen-960 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              THE <span className="text-customGreen-960">EXPERIENCE</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-black to-customGreen-960 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Step into Bauhaus Nightclub and immerse yourself in an
              electrifying atmosphere where world-class DJs, premium sound
              systems, and stunning visuals create the ultimate nightlife
              experience in Kigali.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Music className="w-8 h-8" />,
                title: "World-Class DJs",
                description:
                  "International and local DJs spinning the hottest tracks all night long",
              },
              {
                icon: <Volume2 className="w-8 h-8" />,
                title: "Premium Sound",
                description:
                  "State-of-the-art sound system delivering crystal-clear audio experience",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "VIP Experience",
                description:
                  "Exclusive VIP sections with bottle service and premium amenities",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-700 transition-colors"
              >
                <div className="w-16 h-16 bg-customGreen-960 rounded-full flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events & Schedule */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              UPCOMING <span className="text-customGreen-960">EVENTS</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-black to-customGreen-960 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Saturday Night Fever",
                date: "Every Saturday",
                time: "10PM - 4AM",
                description:
                  "The hottest party in town with top DJs and special performances",
              },
              {
                title: "Ladies Night",
                date: "Every Thursday",
                time: "9PM - 3AM",
                description:
                  "Special night for ladies with exclusive drinks and entertainment",
              },
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-black border border-black rounded-2xl p-8 hover:border-customtext-customGreen-960 transition-colors"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {event.title}
                </h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-customGreen-960">
                    <Calendar className="w-5 h-5" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-customGreen-960">
                    <Clock className="w-5 h-5" />
                    <span>{event.time}</span>
                  </div>
                </div>
                <p className="text-gray-300">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-white mb-8">
              JOIN THE <span className="text-customGreen-960">PARTY</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-black to-customGreen-960 mx-auto mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-customGreen-960 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                <p className="text-gray-300">
                  KG 17 Ave, Kigali
                  <br />
                  Rwanda
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-customGreen-960 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Hours</h3>
                <p className="text-gray-300">
                  Thu - Sat: 9PM - 4AM
                  <br />
                  Closed Sun - Wed
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-customGreen-960 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Age Limit</h3>
                <p className="text-gray-300">
                  21+ Only
                  <br />
                  Valid ID Required
                </p>
              </div>
            </div>

            <p className="text-xl text-gray-300 mb-8">
              Ready for an unforgettable night? Contact us for VIP reservations
              and group bookings.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-customGreen-960 text-lg">
              <p>+250 788 888 889</p>
              <p>nightclub@bauhaus.com</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BauhausNightclub;