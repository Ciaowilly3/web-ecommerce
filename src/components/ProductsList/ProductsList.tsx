'use server';
import { IProductsData } from '@/interfaces/IProducts';
import React from 'react';

const ProductsList = async () => {
  const response = await fetch('https://dummyjson.com/products');
  const { products }: IProductsData = await response.json();

  if (products) {
    console.log('asd', products);
    return (
      <>
        <h1>asd</h1>
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-center rounded border-rose-200 bg-darker-primary basis-1/3 "
          >
            {product.brand}
          </div>
        ))}
      </>
    );
  } else return <p>empty</p>;
};

export default ProductsList;
