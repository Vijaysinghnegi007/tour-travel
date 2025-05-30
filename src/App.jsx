import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Packages from "./pages/Packages";
import PackageDetails from "./pages/PackageDetails";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails";
import Blog from "./pages/Blog";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/packages/:id" element={<PackageDetails />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/:id" element={<DestinationDetails />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
