"use client";

import React from "react";
import Link from "next/link";
import { ChevronUp, ArrowUpRight, User } from "lucide-react";

export default function Navbar() {
  return (
    <div
      className="
        fixed top-5 left-1/2 -translate-x-1/2
        z-50
        w-full
        flex items-center justify-between
      "
    >
      {/* 🔹 LOGO */}
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-[40px] w-auto object-contain cursor-pointer"
        />
      </div>

      {/* 🔹 NAVBAR PILL */}
      <nav
        className="
          bg-white
          rounded-full
          h-[60px]
          border-[0.5px] border-[#dfdfdf]
          flex items-center
        "
        style={{ paddingLeft: 20, paddingRight: 20 }}
      >
        <ul className="flex items-center gap-8 text-black text-[16px] whitespace-nowrap">
          <li>
            <Link
              href="/linen-saree"
              className="flex items-center gap-1 cursor-pointer"
            >
              Linen Sarees <ChevronUp size={18} />
            </Link>
          </li>

          <li>
            <Link
              href="/bhagalpuri-saree"
              className="flex items-center gap-1 cursor-pointer"
            >
              Bhagalpuri Sarees <ChevronUp size={18} />
            </Link>
          </li>

          <li>
            <Link
              href="/silk-saree"
              className="flex items-center gap-1 cursor-pointer"
            >
              Silk Sarees <ChevronUp size={18} />
            </Link>
          </li>

          <li>
            <Link
              href="/unstitched-suit-set"
              className="flex items-center gap-1 cursor-pointer"
            >
              Unstitched Suit Set <ArrowUpRight size={18} />
            </Link>
          </li>
        </ul>
      </nav>

      {/* 🔹 USER */}
      <div
        className="
          h-[60px] w-[60px]
          bg-white
          border border-[#dfdfdf]
          rounded-full
          flex items-center justify-center
          cursor-pointer
        "
      >
        <User size={22} />
      </div>
    </div>
  );
}
