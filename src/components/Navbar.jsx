import React, { useState } from "react";
import { Menu, X, MapPin, Phone, Mail } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      {/* Main Navbar */}
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-indigo-600">
            Yashpal Tours
          </div>
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/home" className="text-gray-700 hover:text-indigo-600">
              Home
            </a>
            <a href="/packages" className="text-gray-700 hover:text-indigo-600">
              Tour Packages
            </a>
            <a
              href="/destinations"
              className="text-gray-700 hover:text-indigo-600"
            >
              Destinations
            </a>
            <a href="/about" className="text-gray-700 hover:text-indigo-600">
              About
            </a>
            <a href="/blog" className="text-gray-700 hover:text-indigo-600">
              blog
            </a>
            <a href="/contact" className="text-gray-700 hover:text-indigo-600">
              Contact
            </a>
            <a
              href="/login"
              className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition duration-300"
            >
              Login
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="flex flex-col space-y-4 py-4">
              <a href="/home" className="text-gray-700 hover:text-indigo-600">
                Home
              </a>
              <a
                href="/packages"
                className="text-gray-700 hover:text-indigo-600"
              >
                Tour Packages
              </a>
              <a
                href="/destinations"
                className="text-gray-700 hover:text-indigo-600"
              >
                Destinations
              </a>
              <a href="/about" className="text-gray-700 hover:text-indigo-600">
                About
              </a>
              <a href="/blog" className="text-gray-700 hover:text-indigo-600">
                blog
              </a>
              <a
                href="/contact"
                className="text-gray-700 hover:text-indigo-600"
              >
                Contact
              </a>
              <a
                href="/login"
                className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition duration-300 text-center"
              >
                Login
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
