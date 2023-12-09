'use client'

import ProductCard from './components/ProductCard';
import Wrapper from './components/Wrapper';
import useProducts from '@/utils/useProducts';

export default function Home() {
  const products = useProducts();

  return (
      <Wrapper className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard data={product} key={product.id} />
          ))
        ) : (
          // Shimmer effect when loading
          Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="shimmer h-64 w-full rounded bg-gray-200 animate-pulse"
            ></div>
          ))
        )}
      </Wrapper>
  );
}
