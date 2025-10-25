'use client';

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import { assets } from '../assets/assets';
import { useShopContext } from '../context/ShopContext';

const SearchBar = () => {
    const {search, setSearch, showSearch, setShowSearch} = useShopContext();
    const pathname = usePathname();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (pathname.includes('/collection')){
            setVisible(true);
        } else {
            setVisible(false);
            setSearch('');
        }
    }, [pathname, setSearch]);

    return showSearch && visible ? (
        <div className='border-t border-b bg-gray-50 text-center'>
            <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
                <input 
                    value={search || ''} 
                    onChange={(e) => setSearch(e.target.value)} 
                    className='flex-1 outline-none bg-inherit text-sm' 
                    type="text" 
                    placeholder='Search'
                />
                <img className="w-4" src={assets.search_icon} alt="" />
            </div>
            <img 
                onClick={() => setShowSearch(false)} 
                className='inline w-3 cursor-pointer' 
                src={assets.cross_icon} 
                alt="" 
            />
        </div>
    ) : null;
}

export default SearchBar