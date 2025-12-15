import React from 'react';

export default function ProductCard({ product }) {
  return (
    <div className="group relative border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
      </div>
      <div className="mt-4 flex justify-between p-4">
        <div>
          <h3 className="text-sm text-gray-700"><a href="#"><span aria-hidden="true" className="absolute inset-0"></span>{product.name}</a></h3>
          <p className="mt-1 text-sm text-gray-500">{product.description}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{product.price}</p>
      </div>
    </div>
  );
}