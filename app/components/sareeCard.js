import Image from "next/image";

export default function LinenSarees({ images = [], title }) {
  return (
    <div className="w-[325px] h-[580px] border-[0.5px] border-[#dfdfdf] group relative overflow-hidden rounded-[46px] " style={{
        marginTop:20
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
      <div className="hover:shadow-[0_-20px_24px_rgba(0,0,0,0.1)] absolute z-[9999] bg-white h-[176px] border-[0.5px] border-[#dfdfdf] bottom-5 left-5 right-5 pb-5 px-5 rounded-[36px]">

      </div>
    </div>
  );
}
