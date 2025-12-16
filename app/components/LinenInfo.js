"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const DATA = {
  linen: {
    image: "/linen-info.jpg",
    title: "Linen Designer Sarees",
    description:
      "Discover the timeless elegance of our exquisite linen saree collection. Crafted with premium quality linen fabric, each saree is a perfect blend of comfort and style.",
    shopNow: " Shop Now  "
  },
  cotton: {
    image: "/cotton.jpg",
    title: "Cotton Designer Sarees",
    description:
      "Explore breathable and graceful cotton sarees designed for everyday elegance. Soft textures and classic designs for effortless comfort.",
    shopNow: " Shop Now  "
  },
};

const ORDER = ["linen", "cotton"];

export default function LinenInfo() {
  const [active, setActive] = useState("linen");
  const [showText, setShowText] = useState(true);

  const handleToggle = (type) => {
    if (type === active) return;

    setShowText(false);

    setTimeout(() => {
      setActive(type);
    }, 100);

    setTimeout(() => {
      setShowText(true);
    }, 1200);
  };

  // ✅ AUTO TOGGLE
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => {
        const next =
          prev === "linen" ? "cotton" : "linen";

        // hide text first
        setShowText(false);

        // show text after image slide
        setTimeout(() => setShowText(true), 1200);

        return next;
      });
    }, 5000); // ⏱ change every 7 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen relative overflow-hidden" style={{ marginTop: 120 }}>

      {/* IMAGE */}
      <AnimatePresence initial={false}>
        <motion.img
          key={active}
          src={DATA[active].image}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ x: "100%" }}
          animate={{
            x: "0%",
            scale: [1, 1.15, 1],
          }}
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
        <div className="relative bg-black/10 backdrop-blur-md rounded-full flex shadow-lg w-[180px] h-[48px] cursor-pointer">

          {/* SLIDING PILL */}
          <motion.div
            layout
            layoutId="toggle-pill"
            className="absolute inset-0 w-1/2 bg-white rounded-full shadow cursor-pointer"
            animate={{
              x: active === "linen" ? "0%" : "100%",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          />

          {/* BUTTONS */}
          {ORDER.map((item) => (
            <button
              key={item}
              onClick={() => handleToggle(item)}
              className={`relative z-10 w-1/2 h-full cursor-pointer rounded-full text-sm font-medium flex items-center justify-center transition-colors duration-300 ${active === item ? "text-black" : "text-gray-300"
                }`}
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>
      </div>


      {/* TEXT */}
      {showText && (
        <div
          className="absolute z-40 max-w-[600px]"
          style={{ top: "120px", left: "40px", padding: "20px" }}
        >
          <motion.div className="flex flex-col gap-4">

            {/* ① 60% OFF */}
            <motion.div
              className="bg-white px-4 py-2 w-fit overflow-hidden"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                className="flex gap-10 whitespace-nowrap text-black text-lg"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <span>Up To 60% OFF</span>
                <span>Up To 60% OFF</span>
                <span>Up To 60% OFF</span>
              </motion.div>
            </motion.div>

            {/* ② TITLE */}
            <motion.h2
              className="text-3xl text-white font-semibold"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {DATA[active].title}
            </motion.h2>

            {/* ③ DESCRIPTION */}
            <motion.p
              className="text-lg text-gray-200"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              {DATA[active].description}
            </motion.p>
            <motion.div
              className="inline-flex items-center gap-2 text-lg text-white font-medium cursor-pointer w-fit"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1 }}
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
