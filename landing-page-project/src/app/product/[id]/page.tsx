// No 'use client' needed if not using client-side hooks directly for params,
// Next.js App Router handles params server-side by default for page components.
import React from 'react';

type ProductDetailPageProps = {
  params: { id: string };
  // searchParams could also be a prop here if needed: { [key: string]: string | string[] | undefined }
};

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ params }) => {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold text-text-dark mb-4">Product Detail Page</h1>
      <p className="text-lg text-gray-700">
        Details for product ID: <span className="font-semibold text-accent-pink">{params.id}</span> will be shown here.
      </p>
      <p className="text-md text-gray-600 mt-2">
        This is a placeholder page.
      </p>
      <div className="mt-8">
        <a href="/" className="text-primary-blue hover:underline">Go back to Home</a>
      </div>
    </div>
  );
};

export default ProductDetailPage;
