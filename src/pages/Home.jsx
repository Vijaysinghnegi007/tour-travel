// import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import PopularPackages from "../components/PopularPackages";

function Home() {
  return (
    <section className="min-h-screen">
        <Hero />
        <PopularPackages />
        <Features />
    </section>
  );
};

export default Home;
