import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

// Backend se aane wale data ka sample
const products = [
  {
    id: 1,
    name: 'Classic T-Shirt',
    description: 'A comfortable and stylish t-shirt.',
    price: '₹499',
    imageUrl: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
  },
  {
    id: 2,
    name: 'Running Shoes',
    description: 'Lightweight shoes for your daily run.',
    price: '₹1999',
    imageUrl: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
  },
  {
    id: 3,
    name: 'Leather Wallet',
    description: 'A sleek wallet to carry your essentials.',
    price: '₹799',
    imageUrl: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
  },
  {
    id: 4,
    name: 'Stylish Backpack',
    description: 'Carry your world with you in style.',
    price: '₹1499',
    imageUrl: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
  },
];

export default function Welcome() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Hero />
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Products</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
