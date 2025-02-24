import React from "react";
import { Calendar, MapPin, Star } from "lucide-react";

const packages = [
  {
    id: 1,
    title: "Char Dham Yatra",
    image: "images/chardham.jpg",
    duration: "12 Days",
    location: "Yamunotri, Gangotri, Kedarnath, Badrinath",
    price: "₹45,999",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Valley of Flowers Trek",
    image: "images/valley_of_flower.avif",
    duration: "6 Days",
    location: "Valley of Flowers, Hemkund Sahib",
    price: "₹24,999",
    rating: 4.9,
  },
  {
    id: 3,
    title: "Mussoorie Dehradun Tour",
    image: "images/mussoorie.png",
    duration: "4 Days",
    location: "Mussoorie, Dehradun, Dhanaulti",
    price: "₹15,999",
    rating: 4.7,
  },
];

function PopularPackages() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Popular Tour Packages
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most loved tour packages, carefully curated to provide
            you with unforgettable experiences in Uttarakhand
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-indigo-600">
                  {pkg.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>

                <div className="flex items-center mb-2 text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{pkg.duration}</span>
                </div>

                <div className="flex items-center mb-4 text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{pkg.location}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="ml-1 text-sm font-medium">
                      {pkg.rating}
                    </span>
                  </div>

                  <a
                    href={`/packages/${pkg.id}`}
                    className="inline-flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/packages"
            className="inline-flex items-center justify-center px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300"
          >
            View All Packages
          </a>
        </div>
      </div>
    </section>
  );
};

export default PopularPackages;
