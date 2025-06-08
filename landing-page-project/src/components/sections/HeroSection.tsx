import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="bg-primary-blue text-brand-white py-20 md:py-32">
      <div className="container mx-auto px-4 text-center flex flex-col items-center"> {/* Added flex for centering button if needed */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"> {/* Added lg breakpoint */}
          CONSIGUE LA ROPA DE TEMPORADA AL MEJOR PRECIO
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Descubre las últimas tendencias y ofertas exclusivas. {/* Used provided placeholder */}
        </p>
        <Link
          href="/shop"
          className="bg-accent-pink hover:bg-pink-700 text-brand-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 inline-block" // Added inline-block for proper spacing if text-center on parent
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
