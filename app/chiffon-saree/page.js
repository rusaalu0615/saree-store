"use client";
import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ChiffonSareePage() {
  const chiffonSarees = [
    { id: 1, name: "Elegant Chiffon Saree", price: "₹6,500", image: "/image6.jpg" },
    { id: 2, name: "Party Wear Chiffon Saree", price: "₹7,200", image: "/image6.jpg" },
    { id: 3, name: "Designer Chiffon Saree", price: "₹8,800", image: "/image6.jpg" },
    { id: 4, name: "Embroidered Chiffon Saree", price: "₹9,500", image: "/image6.jpg" },
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
            CHIFFON SAREE COLLECTION
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Graceful and flowing chiffon sarees perfect for parties and special occasions
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {chiffonSarees.map((saree) => (
            <div key={saree.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={saree.image} 
                alt={saree.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{saree.name}</h3>
                <p className="text-2xl font-bold text-gray-900">{saree.price}</p>
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