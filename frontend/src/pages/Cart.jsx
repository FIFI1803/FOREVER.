import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, cartItems, currency, updateQuantity, navigate } = useContext(ShopContext);
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const size in cartItems[items]) {
        if (cartItems[items][size] > 0) {
          tempData.push({
            _id: items,
            size: size,
            quantity: cartItems[items][size],
          });
        }
      }
    }
    setCardData(tempData);
  }, [cartItems, products]);

  return (
    <div className='border-t pt-14'>
      <div className="text-2xl mb-3">
        <Title text1={'YOUR'} text2={'CART'} />
      </div>
      <div>
        {cardData.map((item, index) => {
          const productData = products.find(product => product._id === item._id);
          // Return null if product data is not found to prevent errors
          if (!productData) return null; 

          return (
            // ✅ FIX APPLIED ON THIS LINE
            <div key={index} className='grid grid-cols-1 sm:grid-cols-[4fr_1fr_auto] gap-x-4 gap-y-6 py-4 border-b items-center'>
              <div className="flex items-start gap-6">
                <img src={productData.image[0]} className='w-16 sm:w-20' alt='' />
                <div>
                  <p className='text-sm sm:text-lg font-medium'>{productData.name}</p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>{currency}{productData.price}</p>
                    <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                  </div>
                </div>
              </div>

              {/* Note: `defaultValue` won't update on re-render. For controlled components, use `value` instead. */}
              <input 
                onChange={(e) => updateQuantity(item._id, item.size, Number(e.target.value) || 0)} 
                type="number" 
                min="1" 
                defaultValue={item.quantity} 
                className='border max-w-24 justify-self-start sm:justify-self-center px-1 sm:px-2 py-1'
              />

              <img 
                onClick={() => updateQuantity(item._id, item.size, 0)} 
                className="w-4 sm:w-5 cursor-pointer justify-self-end sm:justify-self-center" 
                src={assets.bin_icon} 
                alt="Delete item" 
              />
            </div>
          )
        })}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button onClick={() => navigate('/place-order')} className='bg-black text-white text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
