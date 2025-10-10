import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-96">
      <Image
        src="/images/somos-banner.jpg"
        alt="SOMOS Program Banner"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-6xl font-bold text-white text-center">
          Programa SOMOS
        </h1>
      </div>
    </div>
  );
}