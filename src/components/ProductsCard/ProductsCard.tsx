import './ProductsCard.css';
import { IProduct } from '@/interfaces/IProducts';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Button } from '../ui/button';
import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';
import Image from 'next/image';

interface IProductsCardProps {
  product: IProduct;
}

const ProductsCard = ({ product }: IProductsCardProps) => {
  return (
    <Card className="card">
      <Image
        alt={product.title}
        src={product.thumbnail}
        width={0}
        height={0}
        sizes="100vw"
        className="card-thumbnail"
      />
      <CardHeader>
        <CardTitle>{product.title}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{product.brand}</p>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={`/products/${product.id}`}>
            <IoIosArrowForward />
            show more
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductsCard;
