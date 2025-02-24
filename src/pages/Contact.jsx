import React from "react";

function Contact() {
  return (
    <section className="min-h-screen">
      <div className="pt-20 bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
              <p className="text-gray-600">
                Get in touch with us for any queries about our tours and
                services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <i className="fas fa-map-marker-alt text-indigo-600 text-xl mt-1 w-8"></i>
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-gray-600">
                        123 Mall Road, Mussoorie,
                        <br />
                        Uttarakhand, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-phone text-indigo-600 text-xl mt-1 w-8"></i>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-gray-600">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-envelope text-indigo-600 text-xl mt-1 w-8"></i>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-gray-600">info@yashpaltours.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                      <i className="fab fa-facebook text-2xl"></i>
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                      <i className="fab fa-twitter text-2xl"></i>
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                      <i className="fab fa-instagram text-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-6">
                  Send us a Message
                </h3>
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </section>
  );
};

export default Contact;
