import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login form submission
    console.log('Logged in!');
  };

  const handleSignUpClick = () => {
    navigate('/login_signup'); // Redirect to the sign-up page
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="login-fields">
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit">Login</button>
        </form>

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
