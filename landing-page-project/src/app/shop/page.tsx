import React from 'react';

const ShopPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold text-text-dark mb-4">Shop Page</h1>
      <p className="text-lg text-gray-700">
        Products will be listed here. This is a placeholder page.
      </p>
      <div className="mt-8">
        <a href="/" className="text-primary-blue hover:underline">Go back to Home</a>
      </div>
    </div>
  );
};

export default ShopPage;
