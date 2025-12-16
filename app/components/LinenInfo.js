"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const DATA = {
  linen: {
    image: "/linen-info.jpg",
    title: "Linen Designer Sarees",
    description:
      "Discover the timeless elegance of our exquisite linen saree collection. Crafted with premium quality linen fabric, each saree is a perfect blend of comfort and style.",
    shopNow: "Shop Now",
  },
  cotton: {
    image: "/cotton.jpg",
    title: "Cotton Designer Sarees",
    description:
      "Explore breathable and graceful cotton sarees designed for everyday elegance. Soft textures and classic designs for effortless comfort.",
    shopNow: "Shop Now",
  },
};

const ORDER = ["linen", "cotton"];

export default function LinenInfo() {
  const [active, setActive] = useState("linen"); // ✅ FIX
  const [showText, setShowText] = useState(true);

  const handleToggle = (type) => {
    if (type === active) return;

    setShowText(false);

    setTimeout(() => setActive(type), 100);
    setTimeout(() => setShowText(true), 1200);
  };

  return (
    <div className="w-full h-screen relative overflow-hidden mt-[120px]" style={{marginTop:120}}>
      {/* IMAGE */}
      <AnimatePresence initial={false}>
        <motion.img
          key={active}
          src={DATA[active].image}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ x: "100%" }}
          animate={{ x: "0%", scale: [1, 1.15, 1] }}
          exit={{ x: "-100%" }}
          transition={{
            x: { duration: 1, ease: "easeInOut" },
            scale: { duration: 30, repeat: Infinity, ease: "linear" },
          }}
        />
      </AnimatePresence>

      {/* overlay */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* TOGGLE */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-50">
        <div className="relative bg-black/10 backdrop-blur-md rounded-full flex shadow-lg w-[180px] h-[48px]">
          <motion.div
            className="absolute inset-0 w-1/2 bg-white rounded-full shadow"
            animate={{ x: active === "linen" ? "0%" : "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />

          {ORDER.map((item) => (
            <button
              key={item}
              onClick={() => handleToggle(item)}
              className={`relative z-10 w-1/2 h-full flex items-center justify-center text-sm font-medium cursor-pointer ${
                active === item ? "text-black" : "text-gray-300"
              }`}
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* TEXT */}
      {showText && (
        <div className="absolute z-40 max-w-[600px] top-[120px] left-[40px] p-5">
          <motion.div className="flex flex-col gap-4">
            {/* 60% OFF */}
            <motion.div
              className="bg-white px-4 py-2 w-fit overflow-hidden"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <motion.div
                className="flex gap-10 whitespace-nowrap text-black text-lg"
                animate={{ x: ["100%", "-50%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <span>Up To 60% OFF</span>
                
              </motion.div>
            </motion.div>

            {/* TITLE */}
            <motion.h2
              className="text-3xl text-white font-semibold"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {DATA[active].title}
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              className="text-lg text-gray-200"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {DATA[active].description}
            </motion.p>

            {/* SHOP NOW */}
            <motion.div
              className="inline-flex items-center gap-2 text-lg text-white font-medium cursor-pointer w-fit"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              whileHover={{ x: 6 }}
            >
              <span>{DATA[active].shopNow}</span>
              <ArrowRight size={18} />
            </motion.div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
