"use client";
import React, { useState } from "react";
import { ArrowLeft, Filter, Grid, List } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/navbar";
import SareeCard from "../components/sareeCard";
import Footer from "../components/Footer";

export default function PrintedSareePage() {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');

  const printedSarees = [
    { 
      id: 801, 
      title: "Floral Print Saree", 
      price: 4500, 
      originalPrice: 5200,
      images: ["/image5.png", "/image6.jpg"],
      type: ["Printed", "Floral"],
      rating: 4.4
    },
    { 
      id: 802, 
      title: "Digital Print Saree", 
      price: 3800, 
      originalPrice: 4500,
      images: ["/image6.jpg", "/image5.png"],
      type: ["Printed", "Digital"],
      rating: 4.3
    },
    { 
      id: 803, 
      title: "Abstract Print Saree", 
      price: 5200, 
      originalPrice: 6000,
      images: ["/image5.png", "/image6.jpg"],
      type: ["Printed", "Abstract"],
      rating: 4.5
    },
    { 
      id: 804, 
      title: "Geometric Print Saree", 
      price: 4800, 
      originalPrice: 5500,
      images: ["/image6.jpg", "/image5.png"],
      type: ["Printed", "Geometric"],
      rating: 4.4
    },
  ];

  const filteredSarees = printedSarees.filter(saree => {
    if (priceRange === 'under4000') return saree.price < 4000;
    if (priceRange === '4000-5000') return saree.price >= 4000 && saree.price <= 5000;
    if (priceRange === 'above5000') return saree.price > 5000;
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
              PRINTED SAREE COLLECTION
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Vibrant and colorful printed sarees featuring modern designs and traditional motifs.
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
                <option value="under4000">Under ₹4,000</option>
                <option value="4000-5000">₹4,000 - ₹5,000</option>
                <option value="above5000">Above ₹5,000</option>
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