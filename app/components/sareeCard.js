"use client";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function SareeCard({ 
  id,
  images = [], 
  title, 
  price, 
  originalPrice, 
  discountedPercentage, 
  type = [], 
  rating,
  onAddToCart 
}) {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const product = {
      id,
      title,
      price,
      originalPrice,
      images,
      type,
      rating
    };
    addToCart(product);
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  const handleBuyNow = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleAddToCart(e);
    // Navigate to cart or checkout
    window.location.href = '/cart';
  };

  return (
    <Link href={`/product/${id}`}>
      <div className="bg-[#eeeeee] w-[325px] h-[580px] border-[0.5px] border-[#dfdfdf] group relative overflow-hidden rounded-[46px] cursor-pointer hover:shadow-xl transition-shadow" style={{
        marginTop: 20
      }}>
        <div className="relative w-full h-full">
          {images[0] && (
            <Image
              src={images[0]}
              alt={title}
              fill
              className="object-cover transition-opacity group-hover:opacity-0 duration-300"
              priority
            />
          )}

          {images[1] && (
            <Image
              src={images[1]}
              alt={`${title}-hover`}
              fill
              className="object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          )}
        </div>
        
        <div className="hover:shadow-[0_-20px_24px_rgba(0,0,0,0.1)] absolute bg-white h-[176px] border-[0.5px] border-[#dfdfdf] bottom-[10px] left-[10px] right-[10px] pb-[10px] px-[10px] rounded-[36px]">
          <div className="absolute" style={{ top: 20, left: 20, right: 20, bottom: 20 }}>
            <div className="flex justify-between px-[10px] mt-[10px]">
              <p className="text-[12px] text-[#6e6e6e]">{Array.isArray(type) ? type.join(', ') : type}</p>
              <p className="flex items-center gap-[4px] text-[12px]">
                <Star size={12} className="shrink-0" fill="#30c000" stroke="#30c000" />
                <span className="text-[12px] text-[#9e9e9e]">{rating}</span>
              </p>
            </div>
            
            <div style={{ marginTop: 2 }}>
              <h3 className="text-[18px] font-semibold text-black">{title}</h3>
            </div>

            <div className="flex justify-between" style={{ marginTop: 20 }}>
              <div className="flex flex-col gap-[0px]">
                <p className="text-[12px] text-[#6e6e6e]">Price</p>
                {originalPrice && (
                  <span className="text-[12px] text-[#9e9e9e] line-through ml-2">₹{originalPrice}</span>
                )}
                <span className="text-[16px] text-[#30c000] font-semibold">₹{price}</span>
              </div>
              
              <div className="flex gap-[10px]" style={{marginTop: 25}}>
                <button 
                  type="button" 
                  className="w-[38px] h-[38px] rounded-[16px] border border-[#dfdfdf] bg-transparent flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart size={18} color="#000" />
                </button>

                <button
                  type="button"
                  className="bg-[#30c000] text-white text-[16px] font-medium px-[20px] py-[10px] w-[70px] h-[38px] rounded-[16px] flex items-center justify-center hover:bg-[#28a000] transition-colors z-10"
                  onClick={handleBuyNow}
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

