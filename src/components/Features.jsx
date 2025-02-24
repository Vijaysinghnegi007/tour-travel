import React from "react";
import { Map, Users, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Map,
    title: "Expert Local Guides",
    description: "Our experienced guides know every corner of Uttarakhand",
  },
  {
    icon: Users,
    title: "Small Groups",
    description: "Intimate tours with personalized attention",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance throughout your journey",
  },
  {
    icon: Shield,
    title: "Safe Travel",
    description: "Your safety is our top priority with verified accommodations",
  },
];

function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose Yashpal Tours?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
