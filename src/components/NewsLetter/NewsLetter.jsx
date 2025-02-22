import React, { useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  const [email, setEmail] = useState(""); // State to store email input

  const handleSubscription = (e) => { 
    e.preventDefault();
    
    if (!email.trim()) {
      alert("Please enter a valid email address.");
      return;
    }

    console.log("Subscribed with:", email);
    alert("Thank you for subscribing!");

    setEmail(""); // Clear input field after submission
  };

  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers in Your Inbox</h1>
      <p>Subscribe to our newsletter and never miss an update!</p>
      <form className="newsletter-form" onSubmit={handleSubscription}>
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}  
          required 
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default NewsLetter;
