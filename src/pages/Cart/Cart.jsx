import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import ContinueShoppingButton from "../../components/ContinueShoppingButton/ContinueShoppingButton";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, addToCart, removeFromCart, decreaseQuantity, totalPrice } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate("/");
  };

  // Function to handle clicking on a product
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`); // Navigate to the product details page
  };

  return (
    <div className="cart-page">
      <h1 className="cart-title">Your Shopping Cart</h1>

      {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty. Add some products to the cart!</p>
      ) : (
          <div className="cart-container">
            <div className="cart-items-container">
              <ContinueShoppingButton onClick={handleContinueShopping} />
              <ul className="cart-items">
                {cart.map((item) => (
                  <li 
                    key={`${item.id}-${item.size}`} 
                    className="cart-item" 
                    onClick={() => handleProductClick(item.id)}
                    >
                    <div className="item-image">
                      <img src={item.image} alt={item.name} width={100} height={100} />
                    </div>
                    <div className="item-details">
                      <h3 className="item-name">{item.name}</h3>
                      <p className="item-price">Price: ${item.new_price}</p>
                      {item.size && <p className="item-size">Size: {item.size}</p>}
                      <div className="quantity-controls">
                        <button
                          className="quantity-button"
                          onClick={(e) => {
                            e.stopPropagation();
                            decreaseQuantity(item.id, item.size);
                          }}
                        >
                          -
                        </button>
                        <span 
                          className="quantity-text"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {item.quantity}
                        </span>
                        <button
                          className="quantity-button"
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(item);
                          }}
                        >
                            +
                        </button>
                        <button
                          className="remove-button"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFromCart(item.id, item.size);
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="cart-summary">
              <div className="order-summary">
                <h2>Order Summary</h2>
                <p>
                  Items: <span>{cart.reduce((total, item) => total + item.quantity, 0)}</span>
                </p>
                <p>
                  Delivery Charges:{" "}
                  <span>Add your delivery address at checkout to see delivery charges</span>
                </p>
                <p>
                  Subtotal: <span>${totalPrice.toFixed(2)}</span>
                </p>
                <p>
                  Total: <span><strong>${totalPrice.toFixed(2)}</strong></span>
                </p>
                <p className="summary-exclusion">Excluding delivery charges</p>
                <button className="checkout-button">PROCEED TO CHECKOUT</button>
              </div>
            </div>
          </div>
      )}
    </div>
  );
};

export default Cart;