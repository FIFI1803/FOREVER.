'use client';

import { createContext, useContext, useEffect, useState } from "react";
import { products } from '../assets/assets';
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export const ShopContext = createContext();

export const useShopContext = () => {
    const context = useContext(ShopContext);
    if (!context) {
        throw new Error('useShopContext must be used within a ShopContextProvider');
    }
    return context;
};

const ShopContextProvider = ({ children }) => {
    const currency = '€';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const router = useRouter();

    const addToCart = (itemId, size) => {
        if (!size) {
            toast.error('Please select a size before adding to cart');
            return;
        }
        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
        toast.success('Product added to cart');
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const size in cartItems[items]) {
                try {
                    if (cartItems[items][size]) {
                        totalCount += cartItems[items][size];
                    }
                } catch (error) {
                    // Handle error silently
                }
            }
        }
        return totalCount;
    }

    const updateQuantity = (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find(product => product._id === items);
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                } catch (error) {
                    // Handle error silently
                }
            }
        }
        return totalAmount;
    }

    const navigate = (path) => {
        router.push(path);
    }

    const value = {
        products, 
        currency, 
        delivery_fee, 
        search, 
        setSearch, 
        showSearch, 
        setShowSearch, 
        cartItems, 
        addToCart, 
        getCartCount, 
        updateQuantity, 
        getCartAmount, 
        navigate
    }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;