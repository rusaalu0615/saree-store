"use client";
import React from "react";
import { useParams } from "next/navigation";
import ProductDetail from "../../components/ProductDetail";

// Sample product data - in a real app, this would come from an API or database
const sampleProducts = {
  // Linen Sarees
  101: {
    id: 101,
    title: "Pure Linen Saree",
    price: 5500,
    originalPrice: 6500,
    images: ["/linentype.PNG", "/linentype1.PNG"],
    type: ["Linen", "Handwoven"],
    rating: 4.8
  },
  102: {
    id: 102,
    title: "Handwoven Linen Saree",
    price: 6200,
    originalPrice: 7200,
    images: ["/linentype1.PNG", "/linentype.PNG"],
    type: ["Linen", "Premium"],
    rating: 4.7
  },
  // Silk Sarees
  201: {
    id: 201,
    title: "Pure Silk Saree",
    price: 8500,
    originalPrice: 9500,
    images: ["/image1.jpg", "/image2.jpg"],
    type: ["Silk", "Handwoven"],
    rating: 4.9
  },
  202: {
    id: 202,
    title: "Kanjivaram Silk Saree",
    price: 12000,
    originalPrice: 14000,
    images: ["/image2.jpg", "/image1.jpg"],
    type: ["Silk", "Kanjivaram"],
    rating: 4.8
  },
  // Cotton Sarees
  301: {
    id: 301,
    title: "Pure Cotton Saree",
    price: 2500,
    originalPrice: 3000,
    images: ["/cotton.jpg", "/image2.jpg"],
    type: ["Cotton", "Handwoven"],
    rating: 4.6
  },
  302: {
    id: 302,
    title: "Handloom Cotton Saree",
    price: 3200,
    originalPrice: 3800,
    images: ["/image2.jpg", "/cotton.jpg"],
    type: ["Cotton", "Handloom"],
    rating: 4.7
  },
  // Banarasi Sarees
  401: {
    id: 401,
    title: "Traditional Banarasi Saree",
    price: 25000,
    originalPrice: 28000,
    images: ["/image4.jpg", "/image1.jpg"],
    type: ["Banarasi", "Silk"],
    rating: 4.9
  },
  402: {
    id: 402,
    title: "Silk Banarasi Saree",
    price: 30000,
    originalPrice: 35000,
    images: ["/image1.jpg", "/image4.jpg"],
    type: ["Banarasi", "Pure Silk"],
    rating: 4.8
  },
  // Suit Sets
  1001: {
    id: 1001,
    title: "Cotton Unstitched Suit Set",
    price: 2500,
    originalPrice: 3000,
    images: ["/image5.png", "/image6.jpg"],
    type: ["Cotton", "Suit Set"],
    rating: 4.5
  },
  1002: {
    id: 1002,
    title: "Silk Unstitched Suit Set",
    price: 4200,
    originalPrice: 4800,
    images: ["/image6.jpg", "/image5.png"],
    type: ["Silk", "Suit Set"],
    rating: 4.7
  }
};

export default function ProductPage() {
  const params = useParams();
  const productId = params.id;
  const product = sampleProducts[productId];

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <a href="/" className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return <ProductDetail product={product} />;
}