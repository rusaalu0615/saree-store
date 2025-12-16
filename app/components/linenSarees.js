"use client";
import { ArrowRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

export default function LinenSarees() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      {/* IMAGE */}
 <motion.img
  src="/linen-sarees.jpg"
  alt="Linen Sarees"
  className="w-full h-full object-cover"
  initial={{ x: "-4%", scale: 1.1 }}
  animate={{ x: "4%", scale: 1.1 }}
  transition={{
    x: {
      duration: 5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
    scale: {
      duration: 5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  }}
/>


      {/* OVERLAY CONTENT */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center text-center text-white gap-6">
          <h2 className="text-6xl font-semibold">Linen Sarees</h2>

          <p className="text-2xl opacity-90">
            Design For Modern Living. <br></br>Linen Sarees Redefined
          </p>

          <div className="inline-flex items-center gap-2 text-lg font-medium cursor-pointer">
            <span>Shop Now</span>
            <ArrowRight size={20} />
          </div>
        </div>
      </div>

    </div>
  );
}
