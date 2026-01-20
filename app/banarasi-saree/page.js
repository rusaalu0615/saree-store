"use client";
import React, { useState } from "react";
import { ArrowLeft, Filter, Grid, List } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/navbar";
import SareeCard from "../components/sareeCard";
import Footer from "../components/Footer";

export default function BanarasiSareePage() {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');

  const banarasiSarees = [
    { 
      id: 401, 
      title: "Traditional Banarasi Saree", 
      price: 25000, 
      originalPrice: 28000,
      images: ["/image4.jpg", "/image1.jpg"],
      type: ["Banarasi", "Silk"],
      rating: 4.9
    },
    { 
      id: 402, 
      title: "Silk Banarasi Saree", 
      price: 30000, 
      originalPrice: 35000,
      images: ["/image1.jpg", "/image4.jpg"],
      type: ["Banarasi", "Pure Silk"],
      rating: 4.8
    },
    { 
      id: 403, 
      title: "Zari Work Banarasi Saree", 
      price: 35000, 
      originalPrice: 40000,
      images: ["/image4.jpg", "/image1.jpg"],
      type: ["Banarasi", "Zari Work"],
      rating: 4.9
    },
    { 
      id: 404, 
      title: "Bridal Banarasi Saree", 
      price: 45000, 
      originalPrice: 50000,
      images: ["/image1.jpg", "/image4.jpg"],
      type: ["Banarasi", "Bridal"],
      rating: 5.0
    },
    { 
      id: 405, 
      title: "Handwoven Banarasi Saree", 
      price: 28000, 
      originalPrice: 32000,
      images: ["/image4.jpg", "/image1.jpg"],
      type: ["Banarasi", "Handwoven"],
      rating: 4.7
    },
    { 
      id: 406, 
      title: "Designer Banarasi Saree", 
      price: 38000, 
      originalPrice: 42000,
      images: ["/image1.jpg", "/image4.jpg"],
      type: ["Banarasi", "Designer"],
      rating: 4.8
    },
  ];

  const filteredSarees = banarasiSarees.filter(saree => {
    if (priceRange === 'under30000') return saree.price < 30000;
    if (priceRange === '30000-40000') return saree.price >= 30000 && saree.price <= 40000;
    if (priceRange === 'above40000') return saree.price > 40000;
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
              BANARASI SAREE COLLECTION
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Exquisite Banarasi sarees with intricate zari work and traditional craftsmanship from Varanasi. 
              Each piece is a masterpiece of Indian textile heritage.
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
                <option value="under30000">Under ₹30,000</option>
                <option value="30000-40000">₹30,000 - ₹40,000</option>
                <option value="above40000">Above ₹40,000</option>
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
              Showing {sortedSarees.length} of {banarasiSarees.length} products
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