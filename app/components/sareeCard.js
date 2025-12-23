import Image from "next/image";

import { ShoppingBag } from "lucide-react";

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
        <div className="flex justify-between px-[10px] mt-[10px]" style={{ marginLeft: 20, marginTop: 10, marginRight: 20 }}>
          <p>{type}</p>
          <p>{rating}</p>
        </div>
        <div className="" style={{ marginLeft: 20, marginTop: 10 }}>
          <h2 className="text-lg font-semibold mt-[10px]" >{title}</h2>
        </div>

        <div className="mt-10" style={{ marginLeft: 20, marginTop: 20 }}>
          <span>Price</span>
          <p className="text-[12px] line-through">{originalPrice}</p>

        </div>
        <div
  className="flex justify-between items-center pb-[10px]"
  style={{ marginLeft: 20, marginRight: 20 }}
>
  <span className="text-xl font-bold">₹{price}</span>

  <div className="flex gap-2 items-center" style={{marginBottom:10}}>
    <ShoppingBag />

    <button
      type="button"
      className="
        bg-black text-white
        text-[16px] font-medium
        px-[20px] py-[10px]
        w-[70px] h-[38px]
        rounded-[16px]
        flex items-center justify-center
      "
      
    >
      Buy
    </button>
  </div>
</div>

      </div>
    </div>
  );
}
