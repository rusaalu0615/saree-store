"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductType() {
    const products = [
        { id: 1, title: "Silk Saree", description: "Premium silk COllection", imageUrl: "/image1.jpg" },
        { id: 2, title: "Cotton Blend Saree", description: "Cotton COllection", imageUrl: "/image2.jpg" },
        { id: 3, title: "Linen Saree", description: "Linen Collection", imageUrl: "/image3.jpg" },
        { id: 4, title: "Banarasi Saree", description: "Banarasi COllection", imageUrl: "/image4.jpg" },
        { id: 5, title: "Printed Saree", description: "Printed Collection", imageUrl: "/image5.png" },
        { id: 6, title: "Chiffon Saree", description: "Chiffon Collection", imageUrl: "/image6.jpg" },
        { id: 7, title: "Tissue Saree", description: "Tissue Collection", imageUrl: "/image7.jpg" },
        { id: 8, title: "Georgette Saree", description: "Georgette Collection", imageUrl: "/image8.jpg" },
    ];

    // Animation variants



    const textVariants = {
        rest: { opacity: 0, y: 15 },
        hover: { opacity: 1, y: -120 },
    };

    const loremVariants = {
        rest: { opacity: 0, y: 15 },
        hover: { opacity: 1, y: -60 }, // long lorem block moves higher so it's visible
    };


    return (
        <div className="w-full" style={{ backgroundColor: "#202020" }}>
            <h2 className="text-2xl font-bold text-center my-8 text-white">
                Explore Our Saree Collection
            </h2>

            {/* FIRST ROW */}
            <div className="grid grid-cols-4 gap-0 w-full">
                {products.slice(0, 4).map((product) => (
                    <motion.div
                        key={product.id}
                        className="p-4 relative"
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                    >
                        <div className="relative bg-white overflow-hidden">

                            {/* IMAGE MOVES UP ON HOVER */}
                            <motion.img
                                src={product.imageUrl}
                                alt={product.title}
                                className="w-full h-96 object-cover"
                                variants={{
                                    rest: { y: 0 },
                                    hover: { y: -45 },
                                }}
                                transition={{ duration: 0.4 }}
                            />

                            {/* TITLE STAYS VISIBLE + ABOVE IMAGE */}
                            <motion.h3
                                variants={{
                                    rest: { color: "#ffffff" },
                                    hover: { color: "#000000" }, // turn black on hover
                                }}
                                transition={{ duration: 0.3 }}
                                className="absolute z-20 inline-block left-1/2 bottom-2 transform -translate-x-1/2"
                            >
                                <span className="text-lg flex items-center justify-center px-2 py-1">
                                    {product.title}
                                    <ArrowUpRight className="w-[18px] h-[18px] " />
                                </span>
                            </motion.h3>

                        </div>



                        {/* HOVER REVEAL DESCRIPTION */}
                        <motion.p
                            variants={textVariants}
                            transition={{ duration: 0.3 }}
                            className="text-white text-sm text-center absolute left-1/2 transform -translate-x-1/2  px-2 py-1 rounded"
                        >
                            {product.description}
                        </motion.p>

                        <motion.p
                            variants={loremVariants}
                            transition={{ duration: 0.3 }}
                            className="text-white text-xs leading-none text-center absolute bottom-2 left-2"
                        >
                            liqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </motion.p>
                    </motion.div>
                ))}
            </div>

            {/* SECOND ROW */}
            <div className="grid grid-cols-4 gap-0 w-full">
                {products.slice(4, 8).map((product) => (
                    <motion.div
                        key={product.id}
                        className="p-4 relative"
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                    >
                        <div className="relative bg-white overflow-hidden">

                            {/* IMAGE MOVES UP ON HOVER */}
                            <motion.img
                                src={product.imageUrl}
                                alt={product.title}
                                className="w-full h-96 object-cover"
                                variants={{
                                    rest: { y: 0 },
                                    hover: { y: -45 },
                                }}
                                transition={{ duration: 0.4 }}
                            />

                            {/* TITLE STAYS VISIBLE + ABOVE IMAGE */}
                            <motion.h3
                                variants={{
                                    rest: { color: "#ffffff" },
                                    hover: { color: "#000000" }, // turn black on hover
                                }}
                                transition={{ duration: 0.3 }}
                                className="absolute z-20 inline-block left-1/2 bottom-2 transform -translate-x-1/2"
                            >
                                <span className="text-lg flex items-center justify-center py-1">
                                    {product.title}
                                    <ArrowUpRight className="h-[18px] w-[18px]"/>
                                </span>
                            </motion.h3>

                        </div>

                        {/* HOVER REVEAL DESCRIPTION */}
                        <motion.p
                            variants={textVariants}
                            transition={{ duration: 0.3 }}
                            className="text-white text-sm text-center absolute left-1/2 transform -translate-x-1/2  px-2 py-1 rounded"
                        >
                            {product.description}
                        </motion.p>

                        <motion.p
                            variants={loremVariants}
                            transition={{ duration: 0.3 }}
                            className="text-white text-xs leading-none text-center absolute bottom-2 left-2"
                        >
                            liqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </motion.p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

