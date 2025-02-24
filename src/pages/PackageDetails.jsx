import React from "react";
import { useParams } from "react-router-dom";


import {
  Calendar,
  MapPin,
  Star,
  Clock,
  Users,
  Utensils,
  Hotel,
  Bus,
} from "lucide-react";

export const packages = [
  {
    id: 1,
    title: "Char Dham Yatra",
    image: "/images/chardham.jpg",
    duration: "12 Days",
    location: "Yamunotri, Gangotri, Kedarnath, Badrinath",
    price: "₹45,999",
    rating: 4.8,
    category: "Pilgrimage",
  },
  {
    id: 2,
    title: "Valley of Flowers Trek",
    image: "/images/valley_of_flower.avif",
    duration: "6 Days",
    location: "Valley of Flowers, Hemkund Sahib",
    price: "₹24,999",
    rating: 4.9,
    category: "Adventure",
  },
  {
    id: 3,
    title: "Mussoorie Dehradun Tour",
    image: "/images/mussoorie.png",
    duration: "4 Days",
    location: "Mussoorie, Dehradun, Dhanaulti",
    price: "₹15,999",
    rating: 4.7,
    category: "Sightseeing",
  },
  {
    id: 4,
    title: "Nainital Lake Tour",
    image: "/images/nainital.png",
    duration: "3 Days",
    location: "Nainital, Bhimtal, Sattal",
    price: "₹12,999",
    rating: 4.6,
    category: "Sightseeing",
  },
  {
    id: 5,
    title: "Rishikesh Adventure Package",
    image: "/images/rishikesh.avif",
    duration: "5 Days",
    location: "Rishikesh",
    price: "₹19,999",
    rating: 4.9,
    category: "Adventure",
  },
  {
    id: 6,
    title: "Kedarnath Temple Trek",
    image: "/images/kedarnath.jpg",
    duration: "4 Days",
    location: "Kedarnath",
    price: "₹16,999",
    rating: 4.8,
    category: "Pilgrimage",
  },
];

const PackageDetails = () => {
  const { id } = useParams();
  const tourPackage = packages.find((p) => p.id === parseInt(id || "0"));

  if (!tourPackage) {
    return (
      <div className="min-h-screen">
       
        <div className="pt-20 bg-gray-50">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-2xl font-bold">Package not found</h1>
          </div>
        </div>
       
      </div>
    );
  }

  return (
    <div className="min-h-screen">
    
      <div className="pt-20 bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-96">
          <img
            src={tourPackage.image}
            alt={tourPackage.title}
            className="w-full h-full object-cover absolute bg"
          />
          <div className="absolute inset-0 bg-opacity-40">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="text-white">
                <span className="inline-block bg-indigo-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {tourPackage.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {tourPackage.title}
                </h1>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    {tourPackage.duration}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    {tourPackage.location}
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 mr-2 text-yellow-400" />
                    {tourPackage.rating}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Package Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Package Overview</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="flex items-center">
                    <Clock className="w-6 h-6 text-indigo-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-600">Duration</p>
                      <p className="font-semibold">{tourPackage.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-6 h-6 text-indigo-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-600">Group Size</p>
                      <p className="font-semibold">Max 15</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Utensils className="w-6 h-6 text-indigo-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-600">Meals</p>
                      <p className="font-semibold">Included</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Hotel className="w-6 h-6 text-indigo-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-600">Accommodation</p>
                      <p className="font-semibold">3-Star Hotels</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Itinerary */}
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Itinerary</h2>
                <div className="space-y-6">
                  <div className="border-l-2 border-indigo-600 pl-4">
                    <h3 className="font-semibold mb-2">
                      Day 1: Arrival and Welcome
                    </h3>
                    <p className="text-gray-600">
                      Airport pickup and transfer to hotel. Welcome dinner and
                      briefing.
                    </p>
                  </div>
                  <div className="border-l-2 border-indigo-600 pl-4">
                    <h3 className="font-semibold mb-2">Day 2: Sightseeing</h3>
                    <p className="text-gray-600">
                      Visit local attractions and landmarks.
                    </p>
                  </div>
                  {/* Add more days based on package duration */}
                </div>
              </div>

              {/* Inclusions */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Inclusions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Bus className="w-5 h-5 text-indigo-600 mr-3" />
                    <span>Transportation</span>
                  </div>
                  <div className="flex items-center">
                    <Hotel className="w-5 h-5 text-indigo-600 mr-3" />
                    <span>Accommodation</span>
                  </div>
                  <div className="flex items-center">
                    <Utensils className="w-5 h-5 text-indigo-600 mr-3" />
                    <span>Meals</span>
                  </div>
                  {/* Add more inclusions */}
                </div>
              </div>
            </div>

            {/* Booking Section */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-8 sticky top-24">
                <div className="text-center mb-6">
                  <p className="text-3xl font-bold text-indigo-600 mb-2">
                    {tourPackage.price}
                  </p>
                  <p className="text-gray-600">per person</p>
                </div>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Select Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Travelers
                    </label>
                    <input
                      type="number"
                      min="1"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
                  >
                    Book Now
                  </button>
                </form>
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">Need help booking?</p>
                  <a
                    href="/contact"
                    className="text-indigo-600 hover:text-indigo-700"
                  >
                    Contact our team
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default PackageDetails;
