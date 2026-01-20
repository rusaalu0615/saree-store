"use client";
import React, { useState } from "react";
import { ArrowLeft, Filter, Grid, List } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/navbar";
import SareeCard from "../components/sareeCard";
import Footer from "../components/Footer";

export default function GeorgetteSareePage() {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');

  const georgetteSarees = [
    { 
      id: 701, 
      title: "Pure Georgette Saree", 
      price: 7500, 
      originalPrice: 8500,
      images: ["/image8.jpg", "/image7.jpg"],
      type: ["Georgette", "Pure"],
      rating: 4.6
    },
    { 
      id: 702, 
      title: "Embellished Georgette Saree", 
      price: 8200, 
      originalPrice: 9200,
      images: ["/image7.jpg", "/image8.jpg"],
      type: ["Georgette", "Embellished"],
      rating: 4.7
    },
    { 
      id: 703, 
      title: "Designer Georgette Saree", 
      price: 9800, 
      originalPrice: 11000,
      images: ["/image8.jpg", "/image7.jpg"],
      type: ["Georgette", "Designer"],
      rating: 4.8
    },
    { 
      id: 704, 
      title: "Heavy Work Georgette Saree", 
      price: 11500, 
      originalPrice: 13000,
      images: ["/image7.jpg", "/image8.jpg"],
      type: ["Georgette", "Heavy Work"],
      rating: 4.9
    },
  ];

  const filteredSarees = georgetteSarees.filter(saree => {
    if (priceRange === 'under8000') return saree.price < 8000;
    if (priceRange === '8000-10000') return saree.price >= 8000 && saree.price <= 10000;
    if (priceRange === 'above10000') return saree.price > 10000;
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
          <div className="flex items-center mb-8">
            <Link href="/" className="flex items-center text-gray-600 hover:text-gray-800">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-4 font-modeline">
              GEORGETTE SAREE COLLECTION
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Sophisticated georgette sarees with beautiful drape and elegant designs for modern women.
            </p>
          </div>

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
                <option value="under8000">Under ₹8,000</option>
                <option value="8000-10000">₹8,000 - ₹10,000</option>
                <option value="above10000">Above ₹10,000</option>
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
            </div>
          </div>

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
        </div>
      </div>
      <Footer />
    </div>
  );
}