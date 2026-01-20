"use client";

import React from "react";
import Link from "next/link";
import { ChevronUp, ArrowUpRight, User, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { getCartItemsCount } = useCart();
  const cartItemsCount = getCartItemsCount();

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
        <Link href="/">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-[40px] w-auto object-contain cursor-pointer"
          />
        </Link>
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
              className="flex items-center gap-1 cursor-pointer hover:text-gray-600 transition-colors"
            >
              Linen Sarees <ChevronUp size={18} />
            </Link>
          </li>

          <li>
            <Link
              href="/bhagalpuri-saree"
              className="flex items-center gap-1 cursor-pointer hover:text-gray-600 transition-colors"
            >
              Bhagalpuri Sarees <ChevronUp size={18} />
            </Link>
          </li>

          <li>
            <Link
              href="/silk-saree"
              className="flex items-center gap-1 cursor-pointer hover:text-gray-600 transition-colors"
            >
              Silk Sarees <ChevronUp size={18} />
            </Link>
          </li>

          <li>
            <Link
              href="/unstitched-suit-set"
              className="flex items-center gap-1 cursor-pointer hover:text-gray-600 transition-colors"
            >
              Unstitched Suit Set <ArrowUpRight size={18} />
            </Link>
          </li>
        </ul>
      </nav>

      {/* 🔹 USER & CART */}
      <div className="flex items-center gap-3">
        {/* Cart Icon */}
        <Link href="/cart">
          <div
            className="
              h-[60px] w-[60px]
              bg-white
              border border-[#dfdfdf]
              rounded-full
              flex items-center justify-center
              cursor-pointer
              hover:bg-gray-50
              transition-colors
              relative
            "
          >
            <ShoppingBag size={22} />
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </div>
        </Link>

        {/* User Icon */}
        <div
          className="
            h-[60px] w-[60px]
            bg-white
            border border-[#dfdfdf]
            rounded-full
            flex items-center justify-center
            cursor-pointer
            hover:bg-gray-50
            transition-colors
          "
        >
          <User size={22} />
        </div>
      </div>
    </div>
  );
}
