import React, { useState } from 'react';
import './Footer.css';
import footer_logo from '../assets/logo.png';
import instagram_icon from '../assets/instagram-1.png';
import tiktok_icon from '../assets/icons8-tiktok-100.png';
import facebook_icon from '../assets/facebook-1.png';
import visa_icon from '../assets/visa-card.jpg';
import mastercard_icon from '../assets/master-card.jpg';
import paypal_icon from '../assets/paypal.jpg'; 

const Footer = () => {
    const [email, setEmail] = useState("");

  const handleSubscription = (event) => { 
    event.preventDefault();
    
    if (!email.trim()) {
      alert("Please enter a valid email address.");
      return;
    }

    console.log("Subscribed with:", email);
    alert("Thank you for subscribing!");
    
    setEmail(""); // Clear input field after submission
  };

  return (
    <footer className="footer">
      <div className="footer-container">
            {/* Logo & Description */}
            <div className="footer-section">
            <div className="footer-logo">
                <img src={footer_logo} alt="Shopper Logo" />
                <p>SHOPPER</p>
            </div>
            <p>Your one-stop shop for the latest fashion and trends.</p>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
                <li><a href="/about">About Us</a></li>
                <li><a href="/shop">Shop</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/faq">FAQ</a></li>
            </ul>
            </div>

            {/* Customer Service */}
            <div className="footer-section">
            <h4>Customer Service</h4>
            <ul className="footer-links">
                <li><a href="/shipping">Shipping & Returns</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms & Conditions</a></li>
                <li><a href="/support">Support</a></li>
            </ul>
            </div>

            {/* Newsletter Signup */}
            <div className="footer-section">
                <h4>Subscribe to Our Newsletter</h4>
                <p>Get updates on the latest deals and products.</p>
                <form className="newsletters-form" onSubmit={handleSubscription}>
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

            {/* Social Media */}
            <div className="footer-section">
                <h4>Follow Us</h4>
                <div className="footer-social-icons">
                    <a href="#"><img src={instagram_icon} alt="Instagram" /></a>
                    <a href="#"><img src={tiktok_icon} alt="Tiktok" /></a>
                    <a href="#"><img src={facebook_icon} alt="Facebook" /></a>
                </div>
            </div>
      </div>

      {/* Payment Methods & Copyright */}
      <div className="footer-bottom">
            <div className="footer-payment-icons">
                <img src={visa_icon} alt="Visa" />
                <img src={mastercard_icon} alt="MasterCard" />
                <img src={paypal_icon} alt="PayPal" />
            </div>
            <p>Developed by Jedy++ | Copyright © 2025 - All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
