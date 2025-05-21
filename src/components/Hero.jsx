import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";



const slides = [
  {
    image: "images/kedarnath.jpg",
    title: "Kedarnath Temple",
    description: "Experience the divine at one of the holiest shrines in India",
  },
  {
    image: "images/rishikesh.avif",
    title: "Rishikesh",
    description: "Adventure and spirituality meet at the yoga capital of the world",
  },
  {
    image: "images/nainital.png",
    title: "Nainital Lake",
    description: "Discover the serene beauty of the lake city",
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen">
      {/* Slider */}
      <div className="relative h-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
            aria-hidden={index !== currentSlide}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slides.length}`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
              <div className="text-center text-white max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl md:text-2xl mb-8">{slide.description}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/packages"
                    className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition duration-300"
                  >
                    Explore Packages
                  </Link>
                  <Link
                    to="/contact"
                    className="bg-white text-indigo-600 px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white transition p-2 rounded-full backdrop-blur-sm shadow-md"
      >
        <ChevronLeft className="w-6 h-6 text-indigo-600" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white transition p-2 rounded-full backdrop-blur-sm shadow-md"
      >
        <ChevronRight className="w-6 h-6 text-indigo-600" />
      </button>
    </div>
  );
}

export default Hero;
