import React from 'react';
import ProductCard from '../products/ProductCard'; // Adjusted path

const placeholderProducts = [
  { id: '1', name: 'Trendy Summer Dress', price: '$49.99', imageUrl: 'https://via.placeholder.com/300x400/EED2CC/800000?text=Dress', productUrl: '/product/1' },
  { id: '2', name: 'Classic Men\'s Tee - Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit', price: '$24.99', imageUrl: 'https://via.placeholder.com/300x400/DDEFEF/000080?text=Tee', productUrl: '/product/2' }, // Added a long name for truncation testing
  { id: '3', name: 'Stylish Sneakers', price: '$89.99', imageUrl: 'https://via.placeholder.com/300x400/E5E5E5/008000?text=Sneakers', productUrl: '/product/3' },
  { id: '4', name: 'Boho Chic Blouse', price: '$39.99', imageUrl: 'https://via.placeholder.com/300x400/FFF0E5/FF8C00?text=Blouse', productUrl: '/product/4' },
  // Added more products for better grid visualization if possible
  { id: '5', name: 'Urban Backpack', price: '$65.00', imageUrl: 'https://via.placeholder.com/300x400/CCCCCC/444444?text=Backpack', productUrl: '/product/5' },
  { id: '6', name: 'Vintage Sunglasses', price: '$30.50', imageUrl: 'https://via.placeholder.com/300x400/FEFCD7/A52A2A?text=Sunglasses', productUrl: '/product/6' },
  { id: '7', name: 'Leather Wallet', price: '$42.00', imageUrl: 'https://via.placeholder.com/300x400/D2B48C/5C3317?text=Wallet', productUrl: '/product/7' },
  { id: '8', name: 'Minimalist Watch', price: '$120.00', imageUrl: 'https://via.placeholder.com/300x400/F0F0F0/363636?text=Watch', productUrl: '/product/8' },
];

const NewArrivalsSection = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50"> {/* Using bg-gray-50 from example */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-text-dark mb-8 md:mb-12">
          New Arrivals
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"> {/* Adjusted md:grid-cols-3 for better responsiveness */}
          {placeholderProducts.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
              productUrl={product.productUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivalsSection;
