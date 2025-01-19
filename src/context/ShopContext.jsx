import React, { createContext, useState, useEffect } from 'react'
import all_product from '../components/assets/all_product';

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
    // State to hold all products
    const [products, setProducts] = useState([]);

  // Load products 
    useEffect(() => {
        setProducts(all_product); // Set the initial product data
    }, []);

    const contextValue = {products}

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider
