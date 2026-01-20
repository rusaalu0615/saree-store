"use client";
import React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Discover our exquisite collection of handcrafted sarees, where tradition meets contemporary elegance. Each piece tells a story of artistry and heritage.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/silk-saree" className="text-gray-300 hover:text-white transition-colors">
                  Silk Sarees
                </Link>
              </li>
              <li>
                <Link href="/cotton-saree" className="text-gray-300 hover:text-white transition-colors">
                  Cotton Sarees
                </Link>
              </li>
              <li>
                <Link href="/linen-saree" className="text-gray-300 hover:text-white transition-colors">
                  Linen Sarees
                </Link>
              </li>
              <li>
                <Link href="/banarasi-saree" className="text-gray-300 hover:text-white transition-colors">
                  Banarasi Sarees
                </Link>
              </li>
              <li>
                <Link href="/unstitched-suit-set" className="text-gray-300 hover:text-white transition-colors">
                  Suit Sets
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Customer Service</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Care Instructions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <Phone size={16} className="mr-3 text-gray-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-3 text-gray-400" />
                <span className="text-gray-300">info@elegantSarees.com</span>
              </div>
              <div className="flex items-start">
                <MapPin size={16} className="mr-3 text-gray-400 mt-1" />
                <span className="text-gray-300">
                  123 Fashion Street,<br />
                  Mumbai, Maharashtra 400001
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-3">Newsletter</h4>
              <p className="text-gray-300 text-sm mb-3">
                Subscribe to get updates on new arrivals and exclusive offers.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-gray-500 text-white"
                />
                <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 transition-colors rounded-r-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Elegant Sarees. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}