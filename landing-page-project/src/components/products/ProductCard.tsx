import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type ProductCardProps = {
  id: string | number;
  imageUrl: string;
  name: string;
  price: string;
  productUrl: string; // e.g., /product/[id]
};

const ProductCard: React.FC<ProductCardProps> = ({ id, imageUrl, name, price, productUrl }) => {
  return (
    <Link href={productUrl} legacyBehavior>
      <a className="block border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out bg-brand-white group hover:scale-105">
        <article> {/* Added article tag */}
          <div className="relative w-full h-64 md:h-72">
            <Image
              src={imageUrl}
              alt={name || 'Product image'} // Ensure alt text is descriptive or has a fallback
              fill={true}
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-300 ease-in-out group-hover:scale-110" // Matched group-hover scale from previous step
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-text-dark mb-1 truncate" title={name}>{name}</h3>
            <p className="text-accent-pink font-bold text-md">{price}</p>
          </div>
        </article>
      </a>
    </Link>
  );
};

export default ProductCard;
