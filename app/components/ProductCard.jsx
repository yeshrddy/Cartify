"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux';
import { addItem } from '@/store/cartSlice';
import Image from 'next/image';

export default function ProductCard(props) {
  console.log(props)
  const router = useRouter();
  const dispatch = useDispatch();

  const handleAddItem =(item) => {
      dispatch(addItem({...item, isCartItem:true}))
  }
  
  return (
      <div className="rounded-md border cursor-pointer" onClick={() => router.push(`/product/${props.data.id}`)}>
        <Image
          src={props?.data?.images[0]}
          alt="Laptop"
          className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
        />
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">{props.data.title}</h1>
          <p className="mt-3 text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
          </p>
        </div>
    </div>
  )
}
