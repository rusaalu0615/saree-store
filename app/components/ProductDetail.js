"use client";
import React, { useState } from "react";
import { ArrowLeft, Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from "lucide-react";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import Navbar from "./navbar";
import Footer from "./Footer";

export default function ProductDetail({ product, onClose }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!product) return null;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    alert(`Added ${quantity} item(s) to cart!`);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    window.location.href = '/cart';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center mb-8 text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-800">Home</Link>
            <span className="mx-2">/</span>
            <Link href={`/${product.type?.[0]?.toLowerCase()}-saree`} className="hover:text-gray-800">
              {product.type?.[0]} Sarees
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">{product.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src={product.images?.[selectedImage] || "/placeholder.jpg"}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnail Images */}
              {product.images && product.images.length > 1 && (
                <div className="flex space-x-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                        selectedImage === index ? 'border-gray-800' : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.title}</h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="ml-1 text-gray-600">{product.rating || 4.5}</span>
                    <span className="ml-2 text-gray-500">(128 reviews)</span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-bold text-green-600">₹{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">₹{product.originalPrice}</span>
                  )}
                  {product.originalPrice && (
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  )}
                </div>
                <p className="text-gray-600">Inclusive of all taxes</p>
              </div>

              {/* Product Details */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Product Details</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Material: {product.type?.join(', ') || 'Premium Quality'}</li>
                    <li>• Length: 5.5 meters with 0.8 meter blouse piece</li>
                    <li>• Care: Dry clean recommended</li>
                    <li>• Origin: Handcrafted in India</li>
                  </ul>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-white border-2 border-gray-800 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors font-semibold flex items-center justify-center"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </button>
                  <button
                    onClick={handleBuyNow}
                    className="flex-1 bg-gray-800 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors font-semibold"
                  >
                    Buy Now
                  </button>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <Truck className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                  <p className="text-sm font-medium text-gray-800">Free Shipping</p>
                  <p className="text-xs text-gray-600">On orders above ₹2000</p>
                </div>
                <div className="text-center">
                  <RotateCcw className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                  <p className="text-sm font-medium text-gray-800">Easy Returns</p>
                  <p className="text-xs text-gray-600">7 days return policy</p>
                </div>
                <div className="text-center">
                  <Shield className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                  <p className="text-sm font-medium text-gray-800">Secure Payment</p>
                  <p className="text-xs text-gray-600">100% secure checkout</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Description */}
          <div className="mt-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Description</h2>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">
                  Experience the epitome of elegance with our {product.title}. This exquisite piece 
                  represents the perfect blend of traditional craftsmanship and contemporary design.
                </p>
                <p className="mb-4">
                  Crafted from the finest {product.type?.[0]?.toLowerCase()} materials, this saree 
                  features intricate detailing that showcases the skill of our master artisans. 
                  The rich texture and lustrous finish make it perfect for special occasions and celebrations.
                </p>
                <p>
                  Each saree comes with a matching blouse piece and is carefully packaged to ensure 
                  it reaches you in perfect condition. Style it with traditional jewelry for a 
                  classic look or pair it with contemporary accessories for a modern twist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}