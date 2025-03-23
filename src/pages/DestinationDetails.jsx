import React from "react";
import { useParams } from "react-router-dom";
import destinations from "./destination";
import {
  MapPin,
  Calendar,
  Sun,
  Cloud,
  Camera,
  Mountain,
  Compass,
} from "lucide-react";

const DestinationDetails = () => {
  const { id } = useParams();
  const selectedDestination = destinations.find(
    (dest) => dest.id === parseInt(id)
  );

  if (!selectedDestination) {
    return (
      <div className="min-h-screen">
        <div className="pt-20 bg-gray-50">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-2xl font-bold">Destination not found</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="pt-20 bg-gray-50">
        {/* Hero Image Section */}
        <div className="relative h-96 w-full">
          <img
            src={selectedDestination.image}
            alt={selectedDestination.name}
            className="w-full h-full object-cover absolute"
          />
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)] flex items-center">
            <div className="container mx-auto px-4 text-white bg-gradient-to-r from-[rgba(0,0,0,0.6)] from-[10%]  to-transparent to-[50%]  p-8 rounded-lg">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                {selectedDestination.name}
              </h1>
              <p className="text-xl drop-shadow-lg">
                {selectedDestination.description}
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Key Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-indigo-600 mr-3" />
                <h3 className="text-lg font-semibold">Altitude</h3>
              </div>
              <p className="text-gray-600">{selectedDestination.altitude}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Calendar className="w-6 h-6 text-indigo-600 mr-3" />
                <h3 className="text-lg font-semibold">Best Time to Visit</h3>
              </div>
              <p className="text-gray-600">{selectedDestination.bestTime}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {selectedDestination.weather === "Cold" ? (
                  <Cloud className="w-6 h-6 text-indigo-600 mr-3" />
                ) : (
                  <Sun className="w-6 h-6 text-indigo-600 mr-3" />
                )}
                <h3 className="text-lg font-semibold">Weather</h3>
              </div>
              <p className="text-gray-600">{selectedDestination.weather}</p>
            </div>
          </div>

          {/* Activities and Attractions */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">
              Activities & Attractions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start">
                <Camera className="w-6 h-6 text-indigo-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Photography</h3>
                  <p className="text-gray-600">
                    Capture stunning views and memorable moments
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Mountain className="w-6 h-6 text-indigo-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Trekking</h3>
                  <p className="text-gray-600">
                    Explore scenic trails and mountain paths
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Compass className="w-6 h-6 text-indigo-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Sightseeing</h3>
                  <p className="text-gray-600">
                    Visit popular landmarks and viewpoints
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Packages */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Tour Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Add related packages here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
