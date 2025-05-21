import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      {/* Main Navbar */}
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-indigo-600">
            <Link to="/">Yashpal Tours</Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600">
              Home
            </Link>
            <Link to="/packages" className="text-gray-700 hover:text-indigo-600">
              Tour Packages
            </Link>
            <Link to="/destinations" className="text-gray-700 hover:text-indigo-600">
              Destinations
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600">
              About
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-indigo-600">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600">
              Contact
            </Link>
            <Link
              to="/login"
              className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition duration-300"
            >
              Login
            </Link>
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
              <Link to="/tour-travel/" className="text-gray-700 hover:text-indigo-600">
                Home
              </Link>
              <Link to="/packages" className="text-gray-700 hover:text-indigo-600">
                Tour Packages
              </Link>
              <Link to="/destinations" className="text-gray-700 hover:text-indigo-600">
                Destinations
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-indigo-600">
                About
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-indigo-600">
                Blog
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-indigo-600">
                Contact
              </Link>
              <Link
                to="/login"
                className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition duration-300 text-center"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
