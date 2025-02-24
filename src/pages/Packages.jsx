import React, { useState } from "react";
import { Calendar, MapPin, Star, Filter } from "lucide-react";

export const packages = [
  {
    id: 1,
    title: "Char Dham Yatra",
    image: "images/chardham.jpg",
    duration: "12 Days",
    location: "Yamunotri, Gangotri, Kedarnath, Badrinath",
    price: "₹45,999",
    rating: 4.8,
    category: "Pilgrimage",
  },
  {
    id: 2,
    title: "Valley of Flowers Trek",
    image: "images/valley_of_flower.avif",
    duration: "6 Days",
    location: "Valley of Flowers, Hemkund Sahib",
    price: "₹24,999",
    rating: 4.9,
    category: "Adventure",
  },
  {
    id: 3,
    title: "Mussoorie Dehradun Tour",
    image: "images/mussoorie.png",
    duration: "4 Days",
    location: "Mussoorie, Dehradun, Dhanaulti",
    price: "₹15,999",
    rating: 4.7,
    category: "Sightseeing",
  },
  {
    id: 4,
    title: "Nainital Lake Tour",
    image: "images/nainital.png",
    duration: "3 Days",
    location: "Nainital, Bhimtal, Sattal",
    price: "₹12,999",
    rating: 4.6,
    category: "Sightseeing",
  },
  {
    id: 5,
    title: "Rishikesh Adventure Package",
    image: "images/rishikesh.avif",
    duration: "5 Days",
    location: "Rishikesh",
    price: "₹19,999",
    rating: 4.9,
    category: "Adventure",
  },
  {
    id: 6,
    title: "Kedarnath Temple Trek",
    image: "images/kedarnath.jpg",
    duration: "4 Days",
    location: "Kedarnath",
    price: "₹16,999",
    rating: 4.8,
    category: "Pilgrimage",
  },
];

function Packages () {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState("All");
  const [duration, setDuration] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  // Function to clear filters
  const clearFilters = () => {
    setSelectedCategory("All");
    setPriceRange("All");
    setDuration("All");
    setSelectedLocation("All");
  };

  // Category filter
  const filteredPackages = packages.filter((pkg) => {
    let categoryMatch = true;
    if (selectedCategory !== "All") {
      categoryMatch = pkg.category === selectedCategory;
    }

    // Price filter
    let priceMatch = true;
    if (priceRange !== "All") {
      const price = parseInt(pkg.price.replace(/[^0-9]/g, ""));
      if (priceRange === "Under ₹15,000") {
        priceMatch = price < 15000;
      } else if (priceRange === "₹15,000 - ₹30,000") {
        priceMatch = price >= 15000 && price <= 30000;
      } else if (priceRange === "Above ₹30,000") {
        priceMatch = price > 30000;
      }
    }

    // Duration filter
    let durationMatch = true;
    if (duration !== "All") {
      const days = parseInt(pkg.duration);
      if (duration === "1-3 Days") {
        durationMatch = days <= 3;
      } else if (duration === "4-7 Days") {
        durationMatch = days >= 4 && days <= 7;
      } else if (duration === "8+ Days") {
        durationMatch = days > 7;
      }
    }

    // Location filter
    let locationMatch = true;
    if (selectedLocation !== "All") {
      locationMatch = pkg.location.includes(selectedLocation);
    }

    return categoryMatch && priceMatch && durationMatch && locationMatch;
  });

  return (
    
      <div className="pt-20 bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Tour Packages</h1>
            <p className="text-gray-600">
              Discover our carefully curated tour packages for your perfect
              vacation
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-4 md:space-y-0 flex-wrap">
              <div className="flex items-center">
                <Filter className="w-5 h-5 mr-2 text-indigo-600" />
                <span className="font-semibold">Filters:</span>
              </div>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="All">All Categories</option>
                <option value="Pilgrimage">Pilgrimage</option>
                <option value="Adventure">Adventure</option>
                <option value="Sightseeing">Sightseeing</option>
              </select>

              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="All">All Prices</option>
                <option value="Under ₹15,000">Under ₹15,000</option>
                <option value="₹15,000 - ₹30,000">₹15,000 - ₹30,000</option>
                <option value="Above ₹30,000">Above ₹30,000</option>
              </select>

              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="All">All Durations</option>
                <option value="1-3 Days">1-3 Days</option>
                <option value="4-7 Days">4-7 Days</option>
                <option value="8+ Days">8+ Days</option>
              </select>

              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="All">All Locations</option>
                <option value="Yamunotri">Yamunotri</option>
                <option value="Gangotri">Gangotri</option>
                <option value="Kedarnath">Kedarnath</option>
                <option value="Badrinath">Badrinath</option>
                <option value="Mussoorie">Mussoorie</option>
                <option value="Dehradun">Dehradun</option>
                <option value="Dhanaulti">Dhanaulti</option>
                <option value="Nainital">Nainital</option>
                <option value="Bhimtal">Bhimtal</option>
                <option value="Sattal">Sattal</option>
                <option value="Rishikesh">Rishikesh</option>
              </select>

              <button
                onClick={clearFilters}
                className="mt-4 md:mt-0 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
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
                  <div className="absolute top-4 left-4 bg-indigo-600 px-3 py-1 rounded-full text-sm font-semibold text-white">
                    {pkg.category}
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
        </div>
      </div>
   
  );
};

export default Packages;
