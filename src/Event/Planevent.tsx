 
import { Mic, Music, Users, Star, Clock, MapPin } from "lucide-react";

const KaraokeComponent = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg">
      {/* Header Section */}
      <div className="text-center mb-4 mt-8">
        <div className="flex justify-center items-center mb-7">
          <Mic className="w-8 h-8 text-customGreen-960 mr-2" />
          <h1 className="text-4xl font-bold text-gray-800">
            Bauhaus Karaoke Experience
          </h1>
          <Music className="w-8 h-8 text-customGreen-960 ml-2" />
        </div>
        <p className="text-xl text-gray-600">
          Where Every Voice Becomes a Star
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative mb-8 rounded-lg overflow-hidden shadow-xl">
        <img
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Karaoke at Bauhaus"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-2">Sing Your Heart Out</h2>
            <p className="text-lg">
              Professional karaoke setup in the heart of Bauhaus
            </p>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-customGreen-960 mb-4 flex items-center">
            <Star className="w-6 h-6 mr-2" />
            About Our Karaoke
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Step into Bauhaus's premier karaoke experience where music meets
            magic! Our state-of-the-art karaoke setup transforms any gathering
            into an unforgettable musical journey. Whether you're planning a
            birthday celebration, corporate event, or just want to unleash your
            inner superstar, we've got you covered.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With our extensive song library spanning decades and genres,
            professional-grade equipment, and vibrant atmosphere, every
            performance becomes a memorable moment. From classic hits to the
            latest chart-toppers, find your perfect song and let your voice
            shine.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-customGreen-960 mb-4 flex items-center">
            <MapPin className="w-6 h-6 mr-2" />
            Venue Features
          </h3>
          <div className="space-y-3">
            {[
              "Premium sound system with crystal clear acoustics",
              "Comfortable seating areas for audience and performers",
              "Dynamic stage lighting to set the perfect mood",
              "Full bar and refreshment service available",
              "Private rooms available for intimate gatherings",
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-customtext-customGreen-960 rounded-full mr-3"></div>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="mb-8">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-customGreen-960 mb-4">
              What Makes Us Special
            </h3>
            <div className="space-y-3">
              {[
                {
                  icon: Music,
                  title: "Massive Song Library",
                  text: "Over 10,000 songs from every decade and genre",
                },
                {
                  icon: Mic,
                  title: "Professional Equipment",
                  text: "Studio-quality microphones and sound system",
                },
                {
                  icon: Star,
                  title: "VIP Treatment",
                  text: "Dedicated staff to make your night unforgettable",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <item.icon className="w-5 h-5 text-customGreen-960 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-customGreen-960 mb-4">
              Operating Hours
            </h3>
            <div className="space-y-2">
              {[
                { days: "Monday - Thursday", hours: "7:00 PM - 12:00 AM" },
                { days: "Friday - Saturday", hours: "6:00 PM - 2:00 AM" },
                { days: "Sunday", hours: "7:00 PM - 11:00 PM" },
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between">
                  <span className="text-gray-700">{item.days}</span>
                  <span className="text-gray-600">{item.hours}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">
                Special Events
              </h4>
              <p className="text-gray-600 text-sm">
                Available for private bookings outside regular hours
              </p>
            </div>
          </div>
        </div>

        {/* Perfect For Section */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Perfect For Any Occasion
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Birthday Parties",
                text: "Celebrate another year with friends, music, and unforgettable performances",
              },
              {
                icon: Star,
                title: "Corporate Events",
                text: "Team building activities and office celebrations with a musical twist",
              },
              {
                icon: Music,
                title: "Date Nights",
                text: "Romantic evenings filled with your favorite duets and love songs",
              },
              {
                icon: Clock,
                title: "Bachelor/Bachelorette",
                text: "Send-off celebrations with the wedding party's favorite hits",
              },
              {
                icon: Mic,
                title: "Family Reunions",
                text: "Multi-generational fun with songs that span the decades",
              },
              {
                icon: MapPin,
                title: "Special Occasions",
                text: "Graduations, anniversaries, and any reason to celebrate life",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-customGreen-960" />
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Gallery
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            ].map((src, idx) => (
              <div key={idx} className="relative group cursor-pointer">
                <img
                  src={src}
                  alt="Karaoke scene"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KaraokeComponent;
