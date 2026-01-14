"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProductType() {
  const products = [
    { id: 1, title: "Silk Saree", description: "Premium silk Collection", imageUrl: "/image1.jpg", link: "/silk-saree" },
    { id: 2, title: "Cotton Saree", description: "Cotton Collection", imageUrl: "/image2.jpg", link: "/cotton-saree" },
    { id: 3, title: "Linen Saree", description: "Linen Collection", imageUrl: "/image3.jpg", link: "/linen-saree" },
    { id: 4, title: "Banarasi Saree", description: "Banarasi Collection", imageUrl: "/image4.jpg", link: "/banarasi-saree" },
    { id: 5, title: "Printed Saree", description: "Printed Collection", imageUrl: "/image5.png", link: "/printed-saree" },
    { id: 6, title: "Chiffon Saree", description: "Chiffon Collection", imageUrl: "/image6.jpg", link: "/chiffon-saree" },
    { id: 7, title: "Tissue Saree", description: "Tissue Collection", imageUrl: "/image7.jpg", link: "/tissue-saree" },
    { id: 8, title: "Georgette Saree", description: "Georgette Collection", imageUrl: "/image8.jpg", link: "/georgette-saree" },
    { id: 9, title: "Bhagalpuri Saree", description: "Traditional Bhagalpuri Collection", imageUrl: "/image1.jpg", link: "/bhagalpuri-saree" },
    { id: 10, title: "Unstitched Suit Set", description: "Premium Suit Set Collection", imageUrl: "/image5.png", link: "/unstitched-suit-set" },
  ];

  const imageVariants = {
      initial: { opacity: 1, y: 0, scale: 1 },
      hover: { opacity: 1, y: -50, scale: 1.04 },
  }

    const descriptionContainer = {
      initial: { opacity: 0 },
      hover: {
        opacity: 1,
        transition: { staggerChildren: 0.06, delayChildren: 0 },
      },
    };

    const descriptionChild = {
      initial: { opacity: 0, y: 38 },
      hover: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 120, damping: 18 },
      },
    };

  return (
    <div className="w-full bg-[ #f5f5f5]" style={{marginTop:110,}}>
      <h2 className="text-4xl tracking-wide font-bold text-black text-center h-10 font-modeline">
        CRAFTED WITH LOVE FOR THE PEOPLE OF DIFFERENT LIKES
      </h2>

      {/* ✅ Grid Container */}
      <div className=" grid grid-cols-5 gap-[20px]" style={{marginTop:30, marginLeft:40, marginRight:40}}>
        {products.map((product) => (
          <Link key={product.id} href={product.link}>
            <motion.div
              className="hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] relative group bg-white overflow-hidden cursor-pointer border border-gray-200 rounded-[20px] h-[440px]"
              initial="initial"
              whileHover="hover"
            >
            <motion.img
              src={product.imageUrl}
              alt={product.title}
              className="absolute inset-0 w-full h-full object-cover"
              variants={imageVariants}
              transition={{ type: 'spring', stiffness: 160, damping: 22 }}
              style={{ willChange: 'transform' }}
            />

            <motion.div
              className="absolute bottom-12 left-5 right-5 p-4"
              variants={descriptionContainer}
            >
              <motion.p className="text-lg text-white text-center" variants={descriptionChild}>
                {product.description}
              </motion.p>
              <motion.p className="text-xs text-white text-center px-2" variants={descriptionChild}>
                lorem ipsum dolor lorem lroem lorem lorem lorem lorem lorem lorem lorem lorem sit amet lorem lorem lorem
              </motion.p>
            </motion.div>

            <span className="absolute flex justify-center items-center bottom-0 left-0 right-0 font-sm text-white group-hover:text-black text-center" style={{padding:8}}>
                {product.title}
                <ArrowUpRight className="inline-block" style={{width: '18px', height: '18px'}}/>
            </span>
          </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
