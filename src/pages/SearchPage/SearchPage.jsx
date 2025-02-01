import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import './SearchPage.css';

const SearchPage = () => {
  const { searchResults} = useContext(ShopContext);
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    // addToCart(product); // Add the product to the cart
    navigate(`/product/${productId}`); 
  };

  return (
    <div className="search-page">
      <h1>Search Results</h1>
      {searchResults.length > 0 ? (
        <ul className="search-results">
          {searchResults.map((product) => (
            <li key={product.id} className="product-item">
              <img
                    src={product.image} // Assuming the product object has an `image` property
                    alt={product.name}
                    className="product-image"
                    onClick={() => handleProductClick(product.id)}
                    style={{ cursor: 'pointer' }}
              />
              <div className="product-details">
                    <p className="product-name">{product.name}</p>
                    <p className="product-price">${product.new_price}</p>
                    <button
                        className="add-to-cart-button"
                        onClick={() => handleProductClick(product.id)}>
                        View Product
                    </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-results">Product not found</p>
      )}
    </div>
  );
};

export default SearchPage;