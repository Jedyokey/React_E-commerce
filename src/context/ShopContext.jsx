import React, { createContext, useState, useEffect } from 'react';
import all_product from '../components/assets/all_product';
import { toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        setProducts(all_product);
    }, []);

    // Add a product to the cart with a toast notification
    const addToCart = (product) => {
        setCart((prevCart) => {
            // Check if the same product with the same size exists
            const existingProduct = prevCart.find(
                (item) => item.id === product.id && item.size === product.size // Check size too!
            );

            if (existingProduct) {
                // If product exists, just increase quantity
                return prevCart.map(item =>
                    item.id === product.id && item.size === product.size
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // If product is new, add to cart and show toast ONCE
                if (!toast.isActive(product.id)) { // Check if toast is already active
                    toast.success(`${product.name} (Size: ${product.size}) added to cart!`, {
                        toastId: product.id, // Unique ID for the toast
                        position: "top-right",
                        autoClose: 3000,
                        transition: Slide, // Slower slide animation
                        style: {
                            width: "500px",
                            backgroundColor: "#20B2AA", 
                            color: "#fff", 
                            border: "1px solid #c6f6d5",
                            borderRadius: "8px", 
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        },
                    });
                }

                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    // Remove a product from the cart
    const removeFromCart = (productId, size) => {
        // console.log("Removing product:", productId, size); // Debug log
        const removedProduct = cart.find(
            (item) => item.id === productId && item.size === size
        );

        setCart((prevCart) =>
            prevCart.filter((item) => !(item.id === productId && item.size === size))
        );

        if (removedProduct) {
            toast.info(`${removedProduct.name} (Size: ${removedProduct.size}) removed!`, {
                position: "top-right",
                autoClose: 3000,
                closeButton: true,
                draggable: true,
                transition: Slide, // Slower animation
                style: {
                    width: "500px", 
                    color: "#fff",
                    borderRadius: "8px", 
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", 
                }
            });
        }
    };

    // Decrease quantity
    const decreaseQuantity = (productId, size) => {
        // console.log("Decreasing quantity for product:", productId, size); // Debug log
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    item.id === productId && item.size === size
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    // Search products
    const searchProducts = (query) => {
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(filteredProducts);
    };

    // Total calculations
    const totalPrice = cart.reduce((total, item) => total + item.new_price * item.quantity, 0);
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

    const contextValue = {
        products,
        cart,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        totalPrice,
        cartCount,
        searchProducts,
        searchResults,
    };

    return <ShopContext.Provider value={contextValue}>
        {children}
    </ShopContext.Provider>;
};

export default ShopContextProvider;