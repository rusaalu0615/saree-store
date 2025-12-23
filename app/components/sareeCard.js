import Image from "next/image";

import { ShoppingCart } from "lucide-react";

export default function LinenSarees({ images = [], title, price, originalPrice, discountedPercentage, type = [], rating }) {
    return (
        <div className="w-[325px] h-[580px] border-[0.5px] border-[#dfdfdf] group relative overflow-hidden rounded-[46px] " style={{
            marginTop: 20
        }}>
            <div>
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
            <div className="hover:shadow-[0_-20px_24px_rgba(0,0,0,0.1)] absolute z-[9999] bg-white h-[176px] border-[0.5px] border-[#dfdfdf] bottom-[10px] left-[10px] right-[10px] pb-[10px] px-[10px] rounded-[36px]">
                <div className="absolute" style={{ top: 20, left: 20, right: 20, bottom: 10 }}>
                    <div className="flex justify-between px-[10px] mt-[10px]">
                    <p className="text-[12px] text-color-[#9c9c9c]">{type}</p>
                    <p className="text-[12px]">{rating}</p>
                </div>
                <div className="">
                    <h2 className="text-[18px] text-black font-semibold mt-[10px]" >{title}</h2>
                </div>

                <div className="mb-0" style={{marginTop:10}}>
                    <span>Price</span>
                    <p className="text-[12px] line-through">{originalPrice}</p>

                </div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-[10px]">
                    <span className="text-[16px] font-semibold text-[#30c000]">₹{price}</span>

                    <div className="flex gap-2 items-center">
                        <button type="button" className="w-[38px] h-[38px] rounded-[16px] border border-[#dfdfdf] bg-transparent flex items-center justify-center">
                            <ShoppingCart size={18} color="#000" />
                        </button>

                        <button
                            type="button"
                            className="bg-[#30c000] text-white text-[16px] font-medium px-[20px] py-[10px] w-[70px] h-[38px] rounded-[16px] flex items-center justify-center"
                        >
                            Buy
                        </button>
                    </div>
                </div>

                </div>
            </div>
        </div>
    );
}