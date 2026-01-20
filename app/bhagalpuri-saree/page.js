"use client";
import React, { useState } from "react";
import { ArrowLeft, Filter, Grid, List } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/navbar";
import SareeCard from "../components/sareeCard";
import Footer from "../components/Footer";

export default function BhagalpuriSareePage() {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');

  const bhagalpuriSarees = [
    { 
      id: 501, 
      title: "Traditional Bhagalpuri Saree", 
      price: 8500, 
      originalPrice: 9500,
      images: ["/image1.jpg", "/image2.jpg"],
      type: ["Bhagalpuri", "Traditional"],
      rating: 4.6
    },
    { 
      id: 502, 
      title: "Handloom Bhagalpuri Saree", 
      price: 9200, 
      originalPrice: 10500,
      images: ["/image2.jpg", "/image1.jpg"],
      type: ["Bhagalpuri", "Handloom"],
      rating: 4.7
    },
    { 
      id: 503, 
      title: "Silk Bhagalpuri Saree", 
      price: 12800, 
      originalPrice: 14000,
      images: ["/image3.jpg", "/image1.jpg"],
      type: ["Bhagalpuri", "Silk"],
      rating: 4.8
    },
    { 
      id: 504, 
      title: "Designer Bhagalpuri Saree", 
      price: 15500, 
      originalPrice: 17000,
      images: ["/image4.jpg", "/image2.jpg"],
      type: ["Bhagalpuri", "Designer"],
      rating: 4.5
    },
    { 
      id: 505, 
      title: "Printed Bhagalpuri Saree", 
      price: 7800, 
      originalPrice: 8800,
      images: ["/image1.jpg", "/image3.jpg"],
      type: ["Bhagalpuri", "Printed"],
      rating: 4.4
    },
    { 
      id: 506, 
      title: "Embroidered Bhagalpuri Saree", 
      price: 11200, 
      originalPrice: 12500,
      images: ["/image2.jpg", "/image4.jpg"],
      type: ["Bhagalpuri", "Embroidered"],
      rating: 4.6
    },
  ];

  const filteredSarees = bhagalpuriSarees.filter(saree => {
    if (priceRange === 'under10000') return saree.price < 10000;
    if (priceRange === '10000-15000') return saree.price >= 10000 && saree.price <= 15000;
    if (priceRange === 'above15000') return saree.price > 15000;
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
              BHAGALPURI SAREE COLLECTION
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Authentic Bhagalpuri sarees known for their unique texture and traditional weaving techniques from Bihar. 
              Experience the rich heritage of Indian craftsmanship.
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
                <option value="under10000">Under ₹10,000</option>
                <option value="10000-15000">₹10,000 - ₹15,000</option>
                <option value="above15000">Above ₹15,000</option>
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
              Showing {sortedSarees.length} of {bhagalpuriSarees.length} products
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