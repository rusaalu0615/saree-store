"use client";
import React, { useState } from "react";
import { ArrowLeft, Filter, Grid, List } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/navbar";
import SareeCard from "../components/sareeCard";
import Footer from "../components/Footer";

export default function TissueSareePage() {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');

  const tissueSarees = [
    { 
      id: 901, 
      title: "Gold Tissue Saree", 
      price: 12500, 
      originalPrice: 14000,
      images: ["/image7.jpg", "/image8.jpg"],
      type: ["Tissue", "Gold"],
      rating: 4.8
    },
    { 
      id: 902, 
      title: "Silver Tissue Saree", 
      price: 11200, 
      originalPrice: 12500,
      images: ["/image8.jpg", "/image7.jpg"],
      type: ["Tissue", "Silver"],
      rating: 4.7
    },
    { 
      id: 903, 
      title: "Metallic Tissue Saree", 
      price: 13800, 
      originalPrice: 15500,
      images: ["/image7.jpg", "/image8.jpg"],
      type: ["Tissue", "Metallic"],
      rating: 4.9
    },
    { 
      id: 904, 
      title: "Shimmer Tissue Saree", 
      price: 14500, 
      originalPrice: 16000,
      images: ["/image8.jpg", "/image7.jpg"],
      type: ["Tissue", "Shimmer"],
      rating: 4.8
    },
  ];

  const filteredSarees = tissueSarees.filter(saree => {
    if (priceRange === 'under12000') return saree.price < 12000;
    if (priceRange === '12000-14000') return saree.price >= 12000 && saree.price <= 14000;
    if (priceRange === 'above14000') return saree.price > 14000;
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
              TISSUE SAREE COLLECTION
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Luxurious tissue sarees with metallic threads that shimmer and shine for grand occasions.
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
                <option value="under12000">Under ₹12,000</option>
                <option value="12000-14000">₹12,000 - ₹14,000</option>
                <option value="above14000">Above ₹14,000</option>
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