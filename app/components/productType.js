"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { hover, motion } from "framer-motion";

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

  const imageVariants = {
    initial: { opacity:1, y: 0},
    hover: { opacity:1, y: -40, transition: { duration: 0.3 } },
  }

    const descriptionVariant = {
    initial: { opacity: 0, y: 0 },
      hover: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    }

  return (
    <div className="w-full" style={{marginTop:110,}}>
      <h2 className="text-3xl font-bold text-white text-center h-10">
        Explore Our Saree Collections
      </h2>

      {/* ✅ Grid Container */}
      <div className="max-w- 95vw grid grid-cols-4 gap-[20px]" style={{marginTop:30, marginLeft:40, marginRight:40}}>
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="relative group bg-white overflow-hidden cursor-pointer"
            initial="initial"
            whileHover="hover"
          >
            <motion.img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-[440px] object-cover"
              variants={imageVariants}
            />

            <motion.div
              className="absolute bottom-12 left-5 right-5 p-4 opacity-0"
              variants={descriptionVariant}
            >
              <p className="text-lg text-white text-center">{product.description}</p>
              <p className="text-xs text-white text-center px-2">
  lorem ipsum dolor lorem lroem lorem lorem lorem lorem lorem lorem lorem lorem sit amet lorem lorem lorem lorem
</p>



            </motion.div>

            <span className="absolute flex justify-center items-center bottom-0 left-0 right-0 font-sm text-white group-hover:text-black text-center" style={{padding:8}}>
                {product.title}
                <ArrowUpRight className="inline-block" style={{width: '18px', height: '18px'}}/>
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
