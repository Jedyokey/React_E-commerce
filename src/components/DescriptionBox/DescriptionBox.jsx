import React, { useState } from 'react'
import { productData } from '../assets/productData';
import "./DescriptionBox.css"

const DescriptionBox = () => {
    const [activeTab, setActiveTab] = useState('description'); // "description" or "reviews"
  
    return (
      <div className="description-box">
        <div className="description-box-navigator">
          <div
            className={`description-box-nav-box ${activeTab === 'description' ? 'active' : ''}`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </div>
          <div
            className={`description-box-nav-box ${activeTab === 'reviews' ? 'active' : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews ({productData.reviews.length})
          </div>
        </div>
  
        <div className="description-box-content">
          {activeTab === 'description' ? (
            <div
                className="description-text"
                dangerouslySetInnerHTML={{ __html: productData.description }}
            />
          ) : (
            <div className="description-box-reviews">
              {productData.reviews.map((review) => (
                <div key={review.id} className="review">
                  <p><strong>{review.name}</strong>: {review.comment}</p>
                  <p>Rating: {'⭐'.repeat(review.rating)}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default DescriptionBox;
