'use server';
import { IProductsData } from '@/interfaces/IProducts';
import React from 'react';
import ProductsCard from '../ProductsCard';

const ProductsList = async () => {
  const response = await fetch('https://dummyjson.com/products');
  const { products }: IProductsData = await response.json();

  if (products) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 content-end">
        {products.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    );
  } else return <p>empty</p>;
};

export default ProductsList;
