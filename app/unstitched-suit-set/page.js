"use client";
import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function UnstitchedSuitSetPage() {
  const suitSets = [
    { id: 1, name: "Cotton Unstitched Suit Set", price: "₹2,500", image: "/image5.png" },
    { id: 2, name: "Silk Unstitched Suit Set", price: "₹4,200", image: "/image6.jpg" },
    { id: 3, name: "Chanderi Unstitched Suit Set", price: "₹3,800", image: "/image7.jpg" },
    { id: 4, name: "Designer Unstitched Suit Set", price: "₹5,500", image: "/image8.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
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
            Premium unstitched suit sets with matching dupatta - customize your perfect fit and style
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {suitSets.map((suit) => (
            <div key={suit.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={suit.image} 
                alt={suit.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{suit.name}</h3>
                <p className="text-2xl font-bold text-gray-900">{suit.price}</p>
                <div className="mt-2 text-sm text-gray-600">
                  <p>• Top: 2.5 meters</p>
                  <p>• Bottom: 2.5 meters</p>
                  <p>• Dupatta: 2.25 meters</p>
                </div>
                <button className="mt-4 w-full bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}