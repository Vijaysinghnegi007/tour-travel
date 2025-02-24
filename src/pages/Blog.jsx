import React from "react";
import { Calendar, User, Clock } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "Ultimate Guide to Char Dham Yatra",
    image: "images/chardham.jpg",
    excerpt:
      "Everything you need to know about planning your Char Dham pilgrimage in Uttarakhand.",
    author: "Rahul Sharma",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Travel Guide",
  },
  {
    id: 2,
    title: "Best Time to Visit Valley of Flowers",
    image: "images/valley_of_flower.avif",
    excerpt:
      "A comprehensive guide to visiting the Valley of Flowers National Park in its full bloom.",
    author: "Priya Patel",
    date: "March 12, 2024",
    readTime: "6 min read",
    category: "Nature",
  },
  {
    id: 3,
    title: "Adventure Sports in Rishikesh",
    image: "images/rishikesh.avif",
    excerpt:
      "Discover the thrilling world of adventure sports in the adventure capital of India.",
    author: "Amit Singh",
    date: "March 10, 2024",
    readTime: "7 min read",
    category: "Adventure",
  },
  {
    id: 4,
    title: "Hidden Gems of Mussoorie",
    image: "images/mussoorie.png",
    excerpt: "Explore the lesser-known attractions of the Queen of Hills.",
    author: "Neha Gupta",
    date: "March 8, 2024",
    readTime: "5 min read",
    category: "Travel Guide",
  },
  {
    id: 5,
    title: "Spiritual Journey to Kedarnath",
    image: "images/kedarnath.jpg",
    excerpt:
      "A personal account of the spiritual experience at Kedarnath Temple.",
    author: "Arun Kumar",
    date: "March 5, 2024",
    readTime: "10 min read",
    category: "Spirituality",
  },
  {
    id: 6,
    title: "Wildlife Photography in Jim Corbett",
    image: "images/national_park.jpg",
    excerpt:
      "Tips and tricks for capturing the perfect wildlife shots in Jim Corbett National Park.",
    author: "Vikram Mehta",
    date: "March 3, 2024",
    readTime: "9 min read",
    category: "Photography",
  },
];

function Blog() {
  return (
    <section className="min-h-screen">
      <div className="pt-20 bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Travel Blog</h1>
            <p className="text-gray-600">
              Stories, guides, and insights from Uttarakhand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-indigo-600">
                    {blog.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {blog.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {blog.readTime}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {blog.date}
                    </div>

                    <a
                      href={`/blog/${blog.id}`}
                      className="inline-flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
     
    </section>
  );
};

export default Blog;
