'use client';

import React, { useState } from "react";
import { assets } from "../assets/assets";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { setShowSearch, getCartCount } = useShopContext();

  const handleSearchClick = () => {
    router.push('/collection');
    setShowSearch(true);
  };

  const isActive = (path) => pathname === path;

  return (
    <div className="flex justify-between items-center py-5 font-medium">
      <Link href="/">
        <img src={assets.logo} alt="logo" className="w-36" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-grey-700">
        <Link href="/" className={`flex flex-col items-center gap-1 ${isActive('/') ? 'active' : ''}`}>
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </Link>
        <Link href="/collection" className={`flex flex-col items-center gap-1 ${isActive('/collection') ? 'active' : ''}`}>
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </Link>
        <Link href="/about" className={`flex flex-col items-center gap-1 ${isActive('/about') ? 'active' : ''}`}>
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </Link>
        <Link href="/contact" className={`flex flex-col items-center gap-1 ${isActive('/contact') ? 'active' : ''}`}>
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </Link>
      </ul>

      <div className="flex items-center gap-6">
        <img
          onClick={handleSearchClick}
          src={assets.search_icon}
          alt="search"
          className="w-5 cursor-pointer"
        />
        <div className="group relative">
          <Link href='/login'>
            <img
              src={assets.profile_icon}
              alt="profile"
              className="w-5 cursor-pointer"
            />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 padding-top">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-700 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link href="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <img onClick={() => setVisible(true)} src={assets.menu_icon} alt="" className="w-5 cursor-pointer sm:hidden" />
      </div>

      {/* Sidebar Menu for small screen*/}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-300 ${visible ? 'w-full' : 'w-0'}`} style={{ zIndex: 100 }}>
        <div className="flex flex-col text-gray-600 h-full">
          <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
            <p className="">Back</p>
          </div>
          <Link onClick={() => setVisible(false)} className={`py-2 pl-6 border ${isActive('/') ? 'active' : ''}`} href='/'>HOME</Link>
          <Link onClick={() => setVisible(false)} className={`py-2 pl-6 border ${isActive('/collection') ? 'active' : ''}`} href='/collection'>COLLECTION</Link>
          <Link onClick={() => setVisible(false)} className={`py-2 pl-6 border ${isActive('/about') ? 'active' : ''}`} href='/about'>ABOUT</Link>
          <Link onClick={() => setVisible(false)} className={`py-2 pl-6 border ${isActive('/contact') ? 'active' : ''}`} href='/contact'>CONTACT</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;