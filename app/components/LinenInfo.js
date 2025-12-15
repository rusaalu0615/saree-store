"use client"
import React from 'react';
import { motion } from 'framer-motion';

export default function LinenInfo() {



  return (
    <div className="w-full h-screen relative">

      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.img
          src="/linen-info.jpg"
          alt="Linen Saree"
          className="w-full h-full object-cover"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      <button className='z-9999'>Hemlo</button>

      {/* TEXT BLOCK FIXED LEFT + TOP */}
      <div
        className="absolute flex flex-col max-w-[600px]"
        style={{
          top: "120px",
          left: "40px",
          gap: "8px"
        }}
      >
        <p className="text-xl w-fit font-bold text-[#9b9999] bg-white">Up To 60% OFF</p>

        <h2 className="text-3xl text-[#9b9999]">Linen Designer Sarees</h2>

        <p className="text-lg text-[#9b9999]">
          Discover the timeless elegance of our exquisite linen saree collection.
          Crafted with premium quality linen fabric, each saree is a perfect blend
          of comfort and style. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

    </div>
  );
}
