"use client";
import React from "react";
import SareeCard from "./sareeCard";

export default function LinenArrivals() {
  const linenArrivalsData = [
    {
      id: 1,
      price: 1200,
      images: ["/linentype.PNG", "/linentype1.PNG"],
      title: "Elegant Linen Saree",
      originalPrice: 1500,
      discountedPercentage: 20,
      type: ["Linen"],
      rating: 4.5
    },
    {
      id: 2,
      price: 1200,
      images: ["/linentype.PNG", "/linentype1.PNG"],
      title: "Premium Linen Saree",
      originalPrice: 1500,
      discountedPercentage: 20,
      type: ["Linen"],
      rating: 4.5
    },
    {
      id: 3,
      price: 1200,
      images: ["/linentype.PNG", "/linentype1.PNG"],
      title: "Designer Linen Saree",
      originalPrice: 1500,
      discountedPercentage: 20,
      type: ["Linen"],
      rating: 4.5
    },
    {
      id: 4,
      price: 1200,
      images: ["/linentype.PNG", "/linentype1.PNG"],
      title: "Handwoven Linen Saree",
      originalPrice: 1500,
      discountedPercentage: 20,
      type: ["Linen"],
      rating: 4.5
    },
  ];

  return (
    <div className="h-screen" style={{ marginTop: 100 }}>
      {/* Header */}
      <div
        className="flex justify-between items-center"
        style={{ marginLeft: 40, marginRight: 40 }}
      >
        <h1 className="text-3xl font-bold text-gray-800">Linen Arrivals</h1>
        <p className="text-gray-600 cursor-pointer hover:text-gray-800 transition-colors">Explore All</p>
      </div>

      {/* Cards */}
      <div className="flex grid grid-cols-4" style={{marginLeft:40, marginRight:0}}>
        {linenArrivalsData.map((item) => (
          <SareeCard
            key={item.id}
            id={item.id}
            price={item.price}
            images={item.images}
            title={item.title}
            originalPrice={item.originalPrice}
            discountedPercentage={item.discountedPercentage}
            type={item.type}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
}
