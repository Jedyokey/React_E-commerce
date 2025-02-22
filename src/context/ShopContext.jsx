import React, { createContext, useState, useEffect } from 'react';
import all_product from '../components/assets/all_product';
import { toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    
    const [cart, setCart] = useState(() => {
        // Load cart from localStorage on initial render
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        setProducts(all_product);
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // Add a product to the cart with a toast notification
    const addToCart = (product) => {
        setCart((prevCart) => {
            // Check if the same product with the same size exists in the cart
            const existingProduct = prevCart.find(
                (item) => item.id === product.id && item.size === product.size
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
                const isMobile = window.innerWidth <= 768; // Check if screen width is mobile size
                const message = isMobile
                    ? "Item added to cart!"
                    : `${product.name} (Size: ${product.size}) added to cart!`;

                if (!toast.isActive(product.id)) { // Check if toast is already active
                    toast.success(message, {
                        toastId: product.id, // Unique ID for the toast
                        position: "top-right",
                        autoClose: 3000,
                        transition: Slide,
                        style: {
                            maxWidth: isMobile ? "300px" : "600px",
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

    // Remove a product from the cart with a toast notification
    const removeFromCart = (productId, size) => {
        const removedProduct = cart.find(
            (item) => item.id === productId && item.size === size
        );

        setCart((prevCart) =>
            prevCart.filter((item) => !(item.id === productId && item.size === size))
        );

        if (removedProduct) {
            const isMobile = window.innerWidth <= 768; // Check if screen width is mobile size
            const message = isMobile
                ? "Item removed from cart!"
                : `${removedProduct.name} (Size: ${removedProduct.size}) removed!`;

            toast.info(message, {
                position: "top-right",
                autoClose: 3000,
                closeButton: true,
                draggable: true,
                transition: Slide, // Slower animation
                style: {
                    maxWidth: isMobile ? "300px" : "600px",
                    color: "#fff",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                },
            });
        }
    };

    // Decrease quantity of a product in the cart
    const decreaseQuantity = (productId, size) => {
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

    // Search products based on query
    const searchProducts = (query) => {
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(filteredProducts);
    };

    // Total calculations for cart
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