"use client";
import React, { useState } from "react";
import { ArrowLeft, Filter, Grid, List } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/navbar";
import SareeCard from "../components/sareeCard";
import Footer from "../components/Footer";

export default function LinenSareePage() {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');

  const linenSarees = [
    { 
      id: 101, 
      title: "Pure Linen Saree", 
      price: 5500, 
      originalPrice: 6500,
      images: ["/linentype.PNG", "/linentype1.PNG"],
      type: ["Linen", "Handwoven"],
      rating: 4.8
    },
    { 
      id: 102, 
      title: "Handwoven Linen Saree", 
      price: 6200, 
      originalPrice: 7200,
      images: ["/linentype1.PNG", "/linentype.PNG"],
      type: ["Linen", "Premium"],
      rating: 4.7
    },
    { 
      id: 103, 
      title: "Linen Blend Saree", 
      price: 4800, 
      originalPrice: 5800,
      images: ["/linentype.PNG", "/linentype1.PNG"],
      type: ["Linen", "Blend"],
      rating: 4.5
    },
    { 
      id: 104, 
      title: "Designer Linen Saree", 
      price: 7500, 
      originalPrice: 8500,
      images: ["/linentype1.PNG", "/linentype.PNG"],
      type: ["Linen", "Designer"],
      rating: 4.9
    },
    { 
      id: 105, 
      title: "Organic Linen Saree", 
      price: 5800, 
      originalPrice: 6800,
      images: ["/linentype.PNG", "/linentype1.PNG"],
      type: ["Linen", "Organic"],
      rating: 4.6
    },
    { 
      id: 106, 
      title: "Printed Linen Saree", 
      price: 4200, 
      originalPrice: 5200,
      images: ["/linentype1.PNG", "/linentype.PNG"],
      type: ["Linen", "Printed"],
      rating: 4.4
    },
    { 
      id: 107, 
      title: "Embroidered Linen Saree", 
      price: 8200, 
      originalPrice: 9200,
      images: ["/linentype.PNG", "/linentype1.PNG"],
      type: ["Linen", "Embroidered"],
      rating: 4.8
    },
    { 
      id: 108, 
      title: "Contemporary Linen Saree", 
      price: 6800, 
      originalPrice: 7800,
      images: ["/linentype1.PNG", "/linentype.PNG"],
      type: ["Linen", "Contemporary"],
      rating: 4.7
    },
  ];

  const filteredSarees = linenSarees.filter(saree => {
    if (priceRange === 'under5000') return saree.price < 5000;
    if (priceRange === '5000-7000') return saree.price >= 5000 && saree.price <= 7000;
    if (priceRange === 'above7000') return saree.price > 7000;
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
              LINEN SAREE COLLECTION
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Elegant and lightweight linen sarees that offer comfort and style for any season. 
              Discover our handpicked collection of premium linen sarees.
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
                <option value="under5000">Under ₹5,000</option>
                <option value="5000-7000">₹5,000 - ₹7,000</option>
                <option value="above7000">Above ₹7,000</option>
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
              Showing {sortedSarees.length} of {linenSarees.length} products
            </p>
          </div>

          {/* Products Grid */}
          {viewMode === 'grid' ? (
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
          ) : (
            <div className="space-y-6">
              {sortedSarees.map((saree) => (
                <div key={saree.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="flex">
                    <div className="w-48 h-48">
                      <img 
                        src={saree.images[0]} 
                        alt={saree.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">{saree.title}</h3>
                          <p className="text-gray-600 mb-2">{saree.type.join(', ')}</p>
                          <div className="flex items-center space-x-2 mb-4">
                            <span className="text-2xl font-bold text-green-600">₹{saree.price}</span>
                            <span className="text-lg text-gray-500 line-through">₹{saree.originalPrice}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-yellow-500">★</span>
                            <span className="ml-1 text-gray-600">{saree.rating}</span>
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <button className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition-colors">
                            Add to Cart
                          </button>
                          <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-50 transition-colors">
                            Quick View
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

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