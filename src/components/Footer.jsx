import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Yashpal Tours
            </h3>
            <p className="mb-4">
              Your trusted partner for exploring the divine beauty of
              Uttarakhand. We provide exceptional travel experiences with
              personalized service.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-blue-500 hover:underline transition duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-blue-500 hover:underline transition duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-blue-500 hover:underline transition duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-blue-500 hover:underline transition duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-500 hover:underline transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-500 hover:underline transition duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/packages"
                  className="hover:text-blue-500 hover:underline transition duration-300"
                >
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations"
                  className="hover:text-blue-500 hover:underline transition duration-300"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-blue-500 hover:underline transition duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-500 hover:underline transition duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Popular Destinations
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/destinations"
                  className="hover:text-blue-500 hover:underline transition duration-300"
                >
                  Kedarnath
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations"
                  className="hover:text-blue-500 hover:underline transition duration-300"
                >
                  Badrinath
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations"
                  className="hover:text-blue-500 hover:underline transition duration-300"
                >
                  Rishikesh
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations"
                  className="hover:text-blue-500 hover:underline transition duration-300"
                >
                  Mussoorie
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations"
                  className="hover:text-blue-500 hover:underline transition duration-300"
                >
                  Nainital
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1" />
                <span>
                  123 Mall Road, Mussoorie,
                  <br />
                  Uttarakhand, India
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3" />
                <a
                  href="tel:+919027897137"
                  className="hover:text-blue-500 hover:underline transition duration-300"
                >
                  +919027897137
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3" />
                <a
                  href="mailto:info@yashpaltours.com"
                  className="hover:text-blue-500 hover:underline transition duration-300"
                >
                  info@yashpaltours.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t w-full border-gray-800 flex justify-center items-center py-6">
          <p>
            &copy; {new Date().getFullYear()} Yashpal Tours. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
