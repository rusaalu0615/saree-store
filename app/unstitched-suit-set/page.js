"use client";
import React, { useState } from "react";
import { ArrowLeft, Filter, Grid, List } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/navbar";
import SareeCard from "../components/sareeCard";
import Footer from "../components/Footer";

export default function UnstitchedSuitSetPage() {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');

  const suitSets = [
    { 
      id: 1001, 
      title: "Cotton Unstitched Suit Set", 
      price: 2500, 
      originalPrice: 3000,
      images: ["/image5.png", "/image6.jpg"],
      type: ["Cotton", "Suit Set"],
      rating: 4.5
    },
    { 
      id: 1002, 
      title: "Silk Unstitched Suit Set", 
      price: 4200, 
      originalPrice: 4800,
      images: ["/image6.jpg", "/image5.png"],
      type: ["Silk", "Suit Set"],
      rating: 4.7
    },
    { 
      id: 1003, 
      title: "Chanderi Unstitched Suit Set", 
      price: 3800, 
      originalPrice: 4300,
      images: ["/image7.jpg", "/image8.jpg"],
      type: ["Chanderi", "Suit Set"],
      rating: 4.6
    },
    { 
      id: 1004, 
      title: "Designer Unstitched Suit Set", 
      price: 5500, 
      originalPrice: 6200,
      images: ["/image8.jpg", "/image7.jpg"],
      type: ["Designer", "Suit Set"],
      rating: 4.8
    },
    { 
      id: 1005, 
      title: "Printed Unstitched Suit Set", 
      price: 3200, 
      originalPrice: 3800,
      images: ["/image5.png", "/image6.jpg"],
      type: ["Printed", "Suit Set"],
      rating: 4.4
    },
    { 
      id: 1006, 
      title: "Embroidered Unstitched Suit Set", 
      price: 4800, 
      originalPrice: 5500,
      images: ["/image6.jpg", "/image7.jpg"],
      type: ["Embroidered", "Suit Set"],
      rating: 4.7
    },
  ];

  const filteredSuits = suitSets.filter(suit => {
    if (priceRange === 'under3500') return suit.price < 3500;
    if (priceRange === '3500-4500') return suit.price >= 3500 && suit.price <= 4500;
    if (priceRange === 'above4500') return suit.price > 4500;
    return true;
  });

  const sortedSuits = [...filteredSuits].sort((a, b) => {
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
              UNSTITCHED SUIT SET COLLECTION
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Premium unstitched suit sets with matching dupatta - customize your perfect fit and style. 
              Each set includes top, bottom, and dupatta fabric.
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
                <option value="under3500">Under ₹3,500</option>
                <option value="3500-4500">₹3,500 - ₹4,500</option>
                <option value="above4500">Above ₹4,500</option>
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
              Showing {sortedSuits.length} of {suitSets.length} products
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
            {sortedSuits.map((suit) => (
              <SareeCard
                key={suit.id}
                id={suit.id}
                title={suit.title}
                price={suit.price}
                originalPrice={suit.originalPrice}
                images={suit.images}
                type={suit.type}
                rating={suit.rating}
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