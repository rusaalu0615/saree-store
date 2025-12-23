import React from "react";
import LinenSarees from "./sareeCard";

export default function LinenArrivals() {
  const linenArrivalsData = [
    {
      price: 120,
      images: ["/linentype.PNG", "/linentype1.PNG"],
      title: "Elegant Linen Saree",
      originalPrice: 150,
      discountedPercentage: 20,
      type: ["Linen"],
      rating: 4.5
    },
     {
      price: 120,
      images: ["/linentype.PNG", "/linentype1.PNG"],
      title: "Elegant Linen Saree",
       originalPrice: 150,
      discountedPercentage: 20,
      type: ["Linen"],
      rating: 4.5
    },
     {
      price: 120,
      images: ["/linentype.PNG", "/linentype1.PNG"],
      title: "Elegant Linen Saree",
       originalPrice: 150,
      discountedPercentage: 20,
      type: ["Linen"],
      rating: 4.5
    },
     {
      price: 120,
      images: ["/linentype.PNG", "/linentype1.PNG"],
      title: "Elegant Linen Saree",
       originalPrice: 150,
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
        <h1>Linen Arrivals</h1>
        <p>Explore All</p>
      </div>

      {/* Cards */}
      <div className="flex grid grid-cols-4" style={{marginLeft:40, marginRight:0}}>
        {linenArrivalsData.map((item, index) => (
          <LinenSarees
            key={index}
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
