import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({id,image,name,price}) => {
    const {currency} = useContext(ShopContext);

    const handleClick = () => {
        window.scrollTo(0, 0);
    }

  return (
    <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer' onClick={handleClick}>
        <div className="overflow-hidden">
            <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
        </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">{currency}{price}</p>
    </Link>
  )
}

export default ProductItem
