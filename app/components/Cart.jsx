"use client"
import React from 'react';
import { Trash, Heart } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux';
import { removeItem } from '@/store/cartSlice';
import { calculateTotalAmount } from '@/utils/helper';
import Image from 'next/image';

export function Cart() {
  const products = useSelector((store) => store.cart.items);
  const router = useRouter()
  console.log(products)
  const dispatch = useDispatch();

  const handleRemoveItem =(itemID) => {
    dispatch(removeItem(itemID))
  }

  const totalAmount = calculateTotalAmount(products);

  return (
    <div className="mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
      <h2 className="text-3xl font-bold">Your cart</h2>
      {products.length === 0 ? (
        <div className="text-center mt-8">
          <p className="text-gray-500">Your cart is empty.</p>
          <button
            type="button"
            className="mt-4 rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={() => router.push('/')}
          >
            Go Shopping
          </button>
        </div>
      ) : (
        <div>
          <ul className="flex flex-col divide-y divide-gray-200">

            {products.map((product) => (
              <li key={product.id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
                <div className="flex w-full space-x-2 sm:space-x-4">
                  <Image
                    className="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
                    src={product.images[0]}
                    alt={product.title}
                  />
                  <div className="flex w-full flex-col justify-between pb-4">
                    <div className="flex w-full justify-between space-x-2 pb-2">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold leading-snug sm:pr-8">{product.title}</h3>
                        <p className="text-sm">{product.color}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold">₹{product.price}</p>
                      </div>
                    </div>
                    <div className="flex divide-x text-sm">
                      <button
                       type="button"
                       className="flex items-center space-x-2 px-2 py-1 pl-0"
                       onClick={()=> handleRemoveItem(product.id)}
                      >
                        <Trash size={16} />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}

          </ul>

          <div className="space-y-1 text-right mb-5">
            <p>
              Total amount:
              <span className="font-semibold">₹{totalAmount.toFixed(2)}</span>
            </p>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={() => router.push('/')}
            >
              Back to shop
            </button>
            <button
              type="button"
              className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={() => router.push('/cart/checkout')}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
