"use client"
import React, {useState} from 'react';
import {SearchIcon, ShoppingCartIcon, User, ChevronUp, ArrowUpRight, ChevronDown, Menu, X} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (


        <nav className=" fixed top-5 left-0 right-0 md:left-5 md:right-5 h-14 md:h-14 lg:h-16 md:rounded-full flex bg-black-300 justify-between items-center backdrop-blur-md bg-black/10 z-50" style={{paddingLeft: 'max(16px, 4vw)', paddingRight: 'max(16px, 4vw)', zIndex: 9999}}>
            
            <div className="flex items-center cursor-pointer">
                <img src="/logo.png" alt="Logo" className="h-15 w-24" style={{width: 'clamp(60px, 15vw, 100px)', height: 'clamp(36px, 9vw, 60px)', objectFit: 'contain'}}/>
            </div>

            <div className="hidden md:flex flex-1 justify-center">
                <ul className="flex gap-8 text-white cursor-pointer" style={{fontSize: '16px'}}>
                    <li className="nav-item">Linen Sarees <ChevronUp className="nav-arrow inline-block" style={{width: '18px', height: '18px'}}/></li>
                    <li className="nav-item">Bhagalpuri Sarees <ChevronUp className="nav-arrow inline-block" style={{width: '18px', height: '18px'}}/></li>
                    <li className="nav-item">Silk Sarees <ChevronUp className="nav-arrow inline-block" style={{width: '18px', height: '18px'}}/></li>
                    <li className="nav-item">Unstitched Suit Set <ArrowUpRight className="nav-arrow inline-block" style={{width: '18px', height: '18px'}}/></li>
                </ul>
            </div>

            <ul className="hidden md:flex gap-8 items-center text-white cursor-pointer" style={{fontSize: '16px'}}>
                <li><SearchIcon className="h-6 w-6"/></li>
                <li><ShoppingCartIcon className="h-6 w-6"/></li>
                <li><User className="h-6 w-6"/></li>
            </ul>

            <div>
                {open ? (
                    <button aria-label="Close menu" onClick={() => setOpen(false)} className="md:hidden">
                        <X className="h-6 w-6 text-white" />
                    </button>
                ) : (
                    <button aria-label="Open menu" onClick={() => setOpen(true)} className="md:hidden">
                        <Menu className="h-6 w-6 text-white flex items-center" />
                    </button>
                )}
            </div>

                        {/* Mobile menu (animated with Framer Motion) */}
                        <AnimatePresence>
                            {open && (
                                <>
                                    {/* backdrop */}
                                    <motion.div
                                        className="fixed inset-0 bg-black/30 z-40 md:hidden"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onClick={() => setOpen(false)}
                                    />

                                    {/* slide-in panel from right, positioned under navbar */}
                                    <motion.aside
                                        className="absolute top-full  right-0 z-50 md:hidden"
                                        initial={{ x: '100%' }}
                                        animate={{ x: 0 }}
                                        exit={{ x: '100%' }}
                                        transition={{ type: 'spring', stiffness: 320, damping: 30 }}
                                        style={{ width: '100%'}}
                                    >
                                        <div className="backdrop-blur-md bg-black/10 py-4 px-4 w-full">
                    
                                            <nav>
                                                <ul className="flex flex-col gap-2 text-white">
                                                    <li onClick={() => setOpen(false)} className="py-2 px-3 rounded hover:bg-white/10">Linen Sarees</li>
                                                    <li onClick={() => setOpen(false)} className="py-2 px-3 rounded hover:bg-white/10">Bhagalpuri Sarees</li>
                                                    <li onClick={() => setOpen(false)} className="py-2 px-3 rounded hover:bg-white/10">Silk Sarees</li>
                                                    <li onClick={() => setOpen(false)} className="py-2 px-3 rounded hover:bg-white/10">Unstitched Suit Set</li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </motion.aside>
                                </>
                            )}
                        </AnimatePresence>

        </nav>
    );
}
