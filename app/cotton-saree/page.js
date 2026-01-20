"use client";
import React, { useState } from "react";
import { ArrowLeft, Filter, Grid, List } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/navbar";
import SareeCard from "../components/sareeCard";
import Footer from "../components/Footer";

export default function CottonSareePage() {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');

  const cottonSarees = [
    { 
      id: 301, 
      title: "Pure Cotton Saree", 
      price: 2500, 
      originalPrice: 3000,
      images: ["/cotton.jpg", "/image2.jpg"],
      type: ["Cotton", "Handwoven"],
      rating: 4.6
    },
    { 
      id: 302, 
      title: "Handloom Cotton Saree", 
      price: 3200, 
      originalPrice: 3800,
      images: ["/image2.jpg", "/cotton.jpg"],
      type: ["Cotton", "Handloom"],
      rating: 4.7
    },
    { 
      id: 303, 
      title: "Printed Cotton Saree", 
      price: 1800, 
      originalPrice: 2200,
      images: ["/cotton.jpg", "/image2.jpg"],
      type: ["Cotton", "Printed"],
      rating: 4.4
    },
    { 
      id: 304, 
      title: "Designer Cotton Saree", 
      price: 4500, 
      originalPrice: 5200,
      images: ["/image2.jpg", "/cotton.jpg"],
      type: ["Cotton", "Designer"],
      rating: 4.8
    },
    { 
      id: 305, 
      title: "Organic Cotton Saree", 
      price: 2800, 
      originalPrice: 3300,
      images: ["/cotton.jpg", "/image2.jpg"],
      type: ["Cotton", "Organic"],
      rating: 4.5
    },
    { 
      id: 306, 
      title: "Embroidered Cotton Saree", 
      price: 3800, 
      originalPrice: 4300,
      images: ["/image2.jpg", "/cotton.jpg"],
      type: ["Cotton", "Embroidered"],
      rating: 4.6
    },
  ];

  const filteredSarees = cottonSarees.filter(saree => {
    if (priceRange === 'under2500') return saree.price < 2500;
    if (priceRange === '2500-3500') return saree.price >= 2500 && saree.price <= 3500;
    if (priceRange === 'above3500') return saree.price > 3500;
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
              COTTON SAREE COLLECTION
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comfortable and breathable cotton sarees perfect for daily wear. 
              Experience the softness and elegance of pure cotton.
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
                <option value="under2500">Under ₹2,500</option>
                <option value="2500-3500">₹2,500 - ₹3,500</option>
                <option value="above3500">Above ₹3,500</option>
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
              Showing {sortedSarees.length} of {cottonSarees.length} products
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