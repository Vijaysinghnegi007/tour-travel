import React, { useState } from "react";
import destination from "./destination";
import { MapPin, Calendar, Sun, Cloud } from "lucide-react";
const destination = [
  {
    id: 1,
    name: "Kedarnath",
    image: "images/kedarnath.jpg",
    description: "One of the holiest Hindu temples dedicated to Lord Shiva",
    bestTime: "May to June, September to October",
    weather: "Cold",
    altitude: "3,583 m",
    category: "Pilgrimage",
  },
  {
    id: 2,
    name: "Rishikesh",
    image: "images/rishikesh.avif",
    description: "World Capital of Yoga and Adventure Sports Hub",
    bestTime: "September to April",
    weather: "Moderate",
    altitude: "372 m",
    category: "Adventure",
  },
  {
    id: 3,
    name: "Mussoorie",
    image: "images/mussoorie.png",
    description: "Queen of Hills with panoramic Himalayan views",
    bestTime: "March to June, September to November",
    weather: "Pleasant",
    altitude: "2,005 m",
    category: "Hill Station",
  },
  {
    id: 4,
    name: "Nainital",
    image: "images/nainital.png",
    description: "Famous lake city surrounded by mountains",
    bestTime: "March to June, September to November",
    weather: "Pleasant",
    altitude: "2,084 m",
    category: "Hill Station",
  },
  {
    id: 5,
    name: "Badrinath",
    image: "images/badrinath.jpg",
    description: "Sacred temple town and part of Char Dham",
    bestTime: "May to June, September to October",
    weather: "Cold",
    altitude: "3,300 m",
    category: "Pilgrimage",
  },
  {
    id: 6,
    name: "Valley of Flowers",
    image: "images/valley_of_flower.avif",
    description:
      "UNESCO World Heritage Site known for its meadows of endemic alpine flowers",
    bestTime: "July to September",
    weather: "Cool",
    altitude: "3,658 m",
    category: "Nature",
  },
  {
    id: 7,
    name: "Auli",
    image: "images/auli.jpg",
    description: "Popular skiing destination with beautiful slopes",
    bestTime: "November to March",
    weather: "Cold",
    altitude: "2,800 m",
    category: "Adventure",
  },
  {
    id: 8,
    name: "Jim Corbett",
    image: "images/national_park.jpg",
    description: "Famous national park known for tigers and wildlife",
    bestTime: "November to June",
    weather: "Moderate",
    altitude: "1,220 m",
    category: "Wildlife",
  },
];


function Destinations() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // filter destinations based on selected category
  
  const filteredDestinations =
    selectedCategory === "All"
      ? destinations
      : destinations.filter(
          (destination) => destination.category === selectedCategory
        );

  return (
    <section className="min-h-screen">
      <div className="pt-20 bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Popular Destinations</h1>
            <p className="text-gray-600">
              Explore the most beautiful places in Uttarakhand
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {[
              "All",
              "Pilgrimage",
              "Adventure",
              "Hill Station",
              "Nature",
              "Wildlife",
            ].map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full font-medium ${
                  selectedCategory === category
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-indigo-500 hover:text-white transition`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Destination Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredDestinations.map((destination) => (
              <div
                key={destination.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="relative">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-indigo-600">
                    {destination.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {destination.description}
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">
                        Altitude: {destination.altitude}
                      </span>
                    </div>

                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">
                        Best Time: {destination.bestTime}
                      </span>
                    </div>

                    <div className="flex items-center text-gray-600">
                      {destination.weather === "Cold" ? (
                        <Cloud className="w-4 h-4 mr-2" />
                      ) : (
                        <Sun className="w-4 h-4 mr-2" />
                      )}
                      <span className="text-sm">
                        Weather: {destination.weather}
                      </span>
                    </div>
                  </div>

                  <a
                    href={`/destinations/${destination.id}`}
                    className="mt-6 inline-flex items-center justify-center w-full px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300"
                  >
                    Explore More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Destinations;
