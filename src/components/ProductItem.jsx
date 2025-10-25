'use client';

import React from 'react'
import { useShopContext } from '../context/ShopContext'
import Link from 'next/link';

const ProductItem = ({id, image, name, price}) => {
    const {currency} = useShopContext();

    const handleClick = () => {
        window.scrollTo(0, 0);
    }

  return (
    <Link href={`/product/${id}`} className='text-gray-700 cursor-pointer' onClick={handleClick}>
        <div className="overflow-hidden">
            <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
        </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">{currency}{price}</p>
    </Link>
  )
}

export default ProductItem