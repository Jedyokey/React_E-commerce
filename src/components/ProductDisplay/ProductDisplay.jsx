import React, { useState, useContext } from 'react';
import "./ProductDisplay.css";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { ShopContext } from '../../context/ShopContext';

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext); // Consume the context
  const [selectedSize, setSelectedSize] = useState(null); // State for the selected size

  const handleSizeSelect = (size) => {
    setSelectedSize(size); // Set the clicked size as selected
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart!");
      return;
    }
    addToCart({ ...product, size: selectedSize }); // Include the selected size in the cart item
  };

  return (
    <div className='product-display'>
      <div className="product-display-left">
        <div className="product-display-img-list">
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} /> 
        </div>
        <div className="product-display-img">
          <img src={product.image} alt={product.name} className='product-display-main-img' />
        </div>
      </div>
      
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-display-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p> 
        </div>

        <div className="product-display-right-prices">
          <div className="product-display-right-old-price">
            ${product.old_price}
          </div>
          <div className="product-display-right-new-price">
            ${product.new_price} 
          </div>
        </div>
        <div className="product-display-right-description">
          {product.description}
        </div>
        <div className="product-display-right-size">
          <p>Select Size</p>
          <div className="product-display-right-size-options">
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <div
                key={size}
                className={`size-option ${selectedSize === size ? "selected" : ""}`}
                onClick={() => handleSizeSelect(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <button onClick={handleAddToCart}>ADD TO CART</button> 
        <p className="product-display-right-category">
          Category: 
          <span> {product.categories.join(", ")}</span>
        </p>
        <p className="product-display-right-category">
          Tags:
          <span> {product.tags.join(", ")}</span>
        </p>
      </div>
    </div>
  );
}

export default ProductDisplay;
