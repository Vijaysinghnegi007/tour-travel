import React from "react";
import { Award, Users, ThumbsUp, Shield } from "lucide-react";

const stats = [
  { icon: Users, label: "Happy Customers", value: "10,000+" },
  { icon: Award, label: "Years of Experience", value: "15+" },
  { icon: ThumbsUp, label: "Tour Packages", value: "100+" },
  { icon: Shield, label: "Safety Rating", value: "4.9/5" },
];

const team = [
  {
    name: "Yashpal Singh",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    bio: "20 years of experience in Uttarakhand tourism",
  },
  {
    name: "Priya Sharma",
    role: "Tour Manager",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "Expert in crafting unique travel experiences",
  },
  {
    name: "Rajesh Kumar",
    role: "Head Guide",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    bio: "Certified mountaineer and local expert",
  },
  {
    name: "Meera Patel",
    role: "Customer Relations",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    bio: "Dedicated to ensuring customer satisfaction",
  },
];

function About() {
  return (
    <section className="min-h-screen">
      <div className="pt-20 bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-96">
          <img
            src="https://images.unsplash.com/photo-1626714485831-c6dde7055612"
            alt="Uttarakhand Landscape"
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
              <p className="text-xl">
                Your Trusted Travel Partner in Uttarakhand
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Our Story */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2009, Yashpal Tours has been at the forefront of
              providing exceptional travel experiences in Uttarakhand. Our
              journey began with a simple mission: to help travelers discover
              the true essence of Devbhoomi Uttarakhand while ensuring
              responsible and sustainable tourism.
            </p>
            <p className="text-gray-600">
              Over the years, we have grown to become one of the most trusted
              travel companies in the region, serving thousands of satisfied
              customers from across the globe. Our deep understanding of local
              culture, traditions, and terrain sets us apart and enables us to
              provide unique and authentic experiences.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-indigo-600" />
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {member.name}
                    </h3>
                    <p className="text-indigo-600 mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <i className="fas fa-check-circle text-indigo-600 text-xl mt-1 mr-4"></i>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Local Expertise
                  </h3>
                  <p className="text-gray-600">
                    Deep knowledge of Uttarakhand's culture, geography, and
                    hidden gems
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-shield-alt text-indigo-600 text-xl mt-1 mr-4"></i>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Safety First</h3>
                  <p className="text-gray-600">
                    Highest safety standards and emergency support throughout
                    your journey
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-heart text-indigo-600 text-xl mt-1 mr-4"></i>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Personalized Service
                  </h3>
                  <p className="text-gray-600">
                    Customized tour packages to match your preferences and
                    requirements
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-leaf text-indigo-600 text-xl mt-1 mr-4"></i>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Responsible Tourism
                  </h3>
                  <p className="text-gray-600">
                    Commitment to sustainable and eco-friendly travel practices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
