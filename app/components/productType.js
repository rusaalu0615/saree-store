"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductType() {
  const products = [
    { id: 1, title: "Silk Saree", description: "Premium silk Collection", imageUrl: "/image1.jpg" },
    { id: 2, title: "Cotton Saree", description: "Cotton Collection", imageUrl: "/image2.jpg" },
    { id: 3, title: "Linen Saree", description: "Linen Collection", imageUrl: "/image3.jpg" },
    { id: 4, title: "Banarasi Saree", description: "Banarasi Collection", imageUrl: "/image4.jpg" },
    { id: 5, title: "Printed Saree", description: "Printed Collection", imageUrl: "/image5.png" },
    { id: 6, title: "Chiffon Saree", description: "Chiffon Collection", imageUrl: "/image6.jpg" },
    { id: 7, title: "Tissue Saree", description: "Tissue Collection", imageUrl: "/image7.jpg" },
    { id: 8, title: "Georgette Saree", description: "Georgette Collection", imageUrl: "/image8.jpg" },
  ];

  const textVariants = {
    rest: { opacity: 0, y: 20 },
    hover: { opacity: 1, y: -110 },
  };

  const loremVariants = {
    rest: { opacity: 0, y: 20 },
    hover: { opacity: 1, y: -60 },
  };

  return (
    <div className="w-full bg-[#202020]" style={{ marginTop: 120 }}>
      {/* TITLE */}
      <h2
        className="text-2xl font-bold text-center text-white"
        style={{ marginBottom: 20 }}
      >
        CRAFTED WITH LOVE FOR THE PEOPLE OF DIFFERENT LIKES
      </h2>

      {/* OUTER WRAPPER — THIS FORCES 40px GAP */}
      <div
        style={{
          paddingLeft: "40px",
          paddingRight: "40px",
        }}
      >
        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: "20px",
          }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial="rest"
              whileHover="hover"
              animate="rest"
              style={{
                maxWidth: "445px",
                margin: "0 auto",
                position: "relative",
                cursor: "pointer",
              }}
            >
              {/* CARD */}
              <div
                style={{
                  background: "white",
                  overflow: "hidden",
                  aspectRatio: "3 / 4",
                  maxHeight: "480px",
                  position: "relative",
                }}
              >
                {/* IMAGE */}
                <motion.img
                  src={product.imageUrl}
                  alt={product.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  variants={{
                    rest: { y: 0 },
                    hover: { y: -60 },
                  }}
                  transition={{ duration: 0.4 }}
                />

                {/* TITLE */}
                <motion.h3
                  variants={{
                    rest: { color: "#ffffff" },
                    hover: { color: "#000000" },
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: "absolute",
                    zIndex: 20,
                    left: "50%",
                    bottom: "12px",
                    transform: "translateX(-50%)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "16px",
                      padding: "4px 12px",
                    }}
                  >
                    {product.title}
                    <ArrowUpRight size={16} />
                  </span>
                </motion.h3>

                {/* DESCRIPTION */}
                <motion.p
                  variants={textVariants}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    color: "white",
                    fontSize: "14px",
                    textAlign: "center",
                    padding: "0 16px",
                  }}
                >
                  {product.description}
                </motion.p>

                {/* LOREM TEXT */}
                <motion.p
                  variants={loremVariants}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: "absolute",
                    bottom: "8px",
                    left: "8px",
                    right: "8px",
                    color: "white",
                    fontSize: "12px",
                    lineHeight: "1.4",
                  }}
                >
                  Liqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
