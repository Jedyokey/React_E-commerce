import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { HiX } from "react-icons/hi";
import './LoginSignUp.css';
import shopper_logo from '../../components/assets/logo.png';

const LoginSignUp = ({ onClose, openLoginModal }) => { 
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginClick = () => {
    onClose(); // Close the sign-up modal
    openLoginModal(); // Open the login modal
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isChecked) {
      alert('You must agree to the terms of use and privacy policy before continuing.');
      return;
    }

    console.log('Form submitted:', formData);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="modal-overlay" onClick={onClose} /> 
      <div className="loginsignup-modal"> {/* Modal container */}

      <div className="loginsignup">
        <div className="loginsignup-container">
            <div className="login-logo">
              <img src={shopper_logo} alt="Shopper Logo" />
            </div>
            <button className="close-modal" onClick={onClose}><HiX size={24} /></button> 
            
            <h1>Sign Up</h1>
            <form className="loginsignup-form" onSubmit={handleSubmit}>
              <div className="loginsignup-fields">
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <div className="password-container">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <span onClick={togglePasswordVisibility} className="password-toggle-icon">
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
              <div className="loginsignup-agree">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  checked={isChecked}
                  onChange={handleCheckbox}
                />
                <label htmlFor="terms">
                  By continuing, I agree to the terms of use and privacy policy.
                </label>
              </div>
              <button className="continue-btn" type="submit" disabled={!isChecked}>
                Continue
              </button>
            </form>
            <p className="loginsignup-login">
              Already have an account?{' '}
              <span onClick={handleLoginClick} className="login-link">
                Login here
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignUp;