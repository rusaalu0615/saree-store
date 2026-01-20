"use client";
import React from "react";
import { ArrowLeft, Plus, Minus, Trash2 } from "lucide-react";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import Navbar from "../components/navbar";

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Your Cart</h1>
            <div className="bg-white rounded-lg shadow-lg p-12">
              <div className="text-gray-500 mb-8">
                <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">Your cart is empty</h2>
                <p className="text-gray-500">Add some beautiful sarees to get started!</p>
              </div>
              <Link href="/">
                <button className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Link href="/" className="flex items-center text-gray-600 hover:text-gray-800 mr-6">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Continue Shopping
              </Link>
              <h1 className="text-4xl font-bold text-gray-800">Your Cart ({items.length} items)</h1>
            </div>
            <button
              onClick={clearCart}
              className="text-red-600 hover:text-red-800 transition-colors flex items-center gap-2"
            >
              <Trash2 size={18} />
              Clear Cart
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {items.map((item) => (
                  <div key={item.id} className="p-6 border-b border-gray-200 last:border-b-0">
                    <div className="flex items-center space-x-4">
                      {/* Product Image */}
                      <div className="w-24 h-24 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.images?.[0] || "/placeholder.jpg"}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                        <p className="text-sm text-gray-500 mb-2">
                          {Array.isArray(item.type) ? item.type.join(', ') : item.type}
                        </p>
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-green-600">₹{item.price}</span>
                          {item.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">₹{item.originalPrice}</span>
                          )}
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      {/* Item Total */}
                      <div className="text-right">
                        <p className="text-lg font-bold text-gray-800">₹{item.price * item.quantity}</p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-600 hover:text-red-800 transition-colors mt-2"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-32">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">₹{getCartTotal()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-semibold">₹{Math.round(getCartTotal() * 0.18)}</span>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="flex justify-between text-lg">
                    <span className="font-bold">Total</span>
                    <span className="font-bold">₹{Math.round(getCartTotal() * 1.18)}</span>
                  </div>
                </div>

                <Link href="/checkout">
                  <button className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors font-semibold">
                    Proceed to Checkout
                  </button>
                </Link>

                <div className="mt-4 text-center">
                  <Link href="/" className="text-gray-600 hover:text-gray-800 transition-colors">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}