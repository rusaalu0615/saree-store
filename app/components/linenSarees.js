"use client";
import { ArrowRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

export default function LinenSarees() {
    return (
        <div className="relative w-full h-screen overflow-hidden " style={{marginTop:20}}>

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
                    <h2 className="text-6xl font-semibold font-modeline">Linen Sarees</h2>

                    <p className="text-2xl opacity-90 font-modeline">
                        Design For Modern Living. <br></br>Linen Sarees Redefined
                    </p>

                    <motion.div
                        className="relative inline-flex items-center gap-4 px-8 py-3 text-lg font-medium cursor-pointer overflow-hidden"
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                    >
                        {/* SLIDING BACKGROUND */}
                        <motion.div
                            className="absolute inset-0 bg-white"
                            variants={{
                                rest: { y: "100%" },
                                hover: { y: "0%" },
                            }}
                            transition={{
                                duration: 0.4,
                                ease: "easeInOut",
                            }}
                        />

                        {/* TEXT + ICON */}
                        <motion.span
                            className="relative z-10 flex items-center gap-2  text-white"
                            variants={{
                                rest: { color: "#ffffff" },
                                hover: { color: "#000000" },
                            }}
                            transition={{ duration: 0.3 }}
                            style={{paddingLeft:8, paddingRight:8, paddingTop:8,paddingBottom:8}}
                        >
                            <span>Shop Now</span>
                            <ArrowRight size={20} />
                        </motion.span>
                    </motion.div>

                </div>
            </div>

        </div>
    );
}
