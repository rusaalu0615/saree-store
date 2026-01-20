"use client";
import React, { useState } from "react";
import { ArrowLeft, Filter, Grid, List, Search } from "lucide-react";
import Link from "next/link";
import Navbar from "./navbar";
import SareeCard from "./sareeCard";
import Footer from "./Footer";
import LoadingSpinner from "./LoadingSpinner";

export default function ProductListingPage({ 
  categorySlug, 
  categoryName, 
  categoryDescription, 
  products = [] 
}) {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  // Filter products based on search and price range
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.type.some(type => type.toLowerCase().includes(searchQuery.toLowerCase()));
    
    let matchesPrice = true;
    if (priceRange === 'under3000') matchesPrice = product.price < 3000;
    else if (priceRange === '3000-6000') matchesPrice = product.price >= 3000 && product.price <= 6000;
    else if (priceRange === '6000-10000') matchesPrice = product.price >= 6000 && product.price <= 10000;
    else if (priceRange === 'above10000') matchesPrice = product.price > 10000;
    
    return matchesSearch && matchesPrice;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if 