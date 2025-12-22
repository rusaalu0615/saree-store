import Image from "next/image";

export default function LinenSarees({ images = [], title }) {
  return (
    <div className="w-[325px] h-[580px] border-[0.5px] border-#dfdfdf group relative overflow-hidden rounded-[46px] " style={{
        marginTop:20
    }}>
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
  );
}
