'use server';
import { IProductsData } from '@/interfaces/IProducts';
import React from 'react';
import ProductsCard from '../ProductsCard';

const ProductsList = async () => {
  const response = await fetch('https://dummyjson.com/products');
  const { products }: IProductsData = await response.json();

  if (products) {
    console.log('asd', products);
    return (
      <>
        {products.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </>
    );
  } else return <p>empty</p>;
};

export default ProductsList;
