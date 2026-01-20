"use client";
import React, { useState } from "react";
import { ArrowLeft, Filter, Grid, List } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/navbar";
import SareeCard from "../components/sareeCard";
import Footer from "../components/Footer";

export default function ChiffonSareePage() {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');

  const chiffonSarees = [
    { 
      id: 601, 
      title: "Elegant Chiffon Saree", 
      price: 6500, 
      originalPrice: 7500,
      images: ["/image6.jpg", "/image7.jpg"],
      type: ["Chiffon", "Party Wear"],
      rating: 4.5
    },
    { 
      id: 602, 
      title: "Party Wear Chiffon Saree", 
      price: 7200, 
      originalPrice: 8200,
      images: ["/image7.jpg", "/image6.jpg"],
      type: ["Chiffon", "Designer"],
      rating: 4.6
    },
    { 
      id: 603, 
      title: "Designer Chiffon Saree", 
      price: 8800, 
      originalPrice: 9800,
      images: ["/image6.jpg", "/image7.jpg"],
      type: ["Chiffon", "Premium"],
      rating: 4.7
    },
    { 
      id: 604, 
      title: "Embroidered Chiffon Saree", 
      price: 9500, 
      originalPrice: 10500,
      images: ["/image7.jpg", "/image6.jpg"],
      type: ["Chiffon", "Embroidered"],
      rating: 4.8
    },
    { 
      id: 605, 
      title: "Printed Chiffon Saree", 
      price: 5800, 
      originalPrice: 6800,
      images: ["/image6.jpg", "/image7.jpg"],
      type: ["Chiffon", "Printed"],
      rating: 4.4
    },
    { 
      id: 606, 
      title: "Sequined Chiffon Saree", 
      price: 11200, 
      originalPrice: 12500,
      images: ["/image7.jpg", "/image6.jpg"],
      type: ["Chiffon", "Sequined"],
      rating: 4.9
    },
  ];

  const filteredSarees = chiffonSarees.filter(saree => {
    if (priceRange === 'under7000') return saree.price < 7000;
    if (priceRange === '7000-9000') return saree.price >= 7000 && saree.price <= 9000;
    if (priceRange === 'above9000') return saree.price > 9000;
    return true;
  });

  const sortedSarees = [...filteredSarees].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="flex items-center mb-8">
            <Link href="/" className="flex items-center text-gray-600 hover:text-gray-800">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-4 font-modeline">
              CHIFFON SAREE COLLECTION
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Graceful and flowing chiffon sarees perfect for parties and special occasions. 
              Light, airy, and effortlessly elegant for every celebration.
            </p>
          </div>

          {/* Filters and Sort */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700 font-medium">Filter:</span>
              </div>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              >
                <option value="all">All Prices</option>
                <option value="under7000">Under ₹7,000</option>
                <option value="7000-9000">₹7,000 - ₹9,000</option>
                <option value="above9000">Above ₹9,000</option>
              </select>
            </div>

            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-600'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-600'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {sortedSarees.length} of {chiffonSarees.length} products
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
            {sortedSarees.map((saree) => (
              <SareeCard
                key={saree.id}
                id={saree.id}
                title={saree.title}
                price={saree.price}
                originalPrice={saree.originalPrice}
                images={saree.images}
                type={saree.type}
                rating={saree.rating}
              />
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors">
              Load More Products
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}