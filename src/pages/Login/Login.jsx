import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook } from 'react-icons/fa';
import './Login.css';
import shopper_logo from '../../components/assets/logo.png';

const Login = ({ onClose, openSignUpModal }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logged in!');
  };

  const handleSignUpClick = () => {
    onClose(); // Close the login modal
    openSignUpModal(); // Open the sign-up modal
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-logo">
          <img src={shopper_logo} alt="Shopper Logo" />
        </div>
        
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="login-fields">
            <input type="email" placeholder="Email Address" required />
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
              />
              <span onClick={togglePasswordVisibility} className="password-toggle-icon">
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <button type="submit">Login</button>
        </form>

        <div className="social-login">
          <button className="social-btn google" onClick={() => console.log('Login with Google')}>
            <FaGoogle /> Continue with Google
          </button>
          <button className="social-btn facebook" onClick={() => console.log('Login with Facebook')}>
            <FaFacebook className='facebook-icon' /> Continue with Facebook
          </button>
        </div>

        <p className="login-signup">
          Don't have an account?{' '}
          <span onClick={handleSignUpClick} className="signup-link">
            Sign up here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
