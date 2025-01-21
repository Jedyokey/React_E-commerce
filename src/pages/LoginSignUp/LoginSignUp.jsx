import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignUp.css';

const LoginSignUp = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); // Redirect to the login page
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

    // Handle form submission logic (e.g., send data to server or display success message)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
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
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
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
          <button className='continue-btn' type="submit" disabled={!isChecked}>
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
  );
};

export default LoginSignUp;







// import React from 'react'
// import "./LoginSignUp.css"

// const LoginSignUp = () => {
//   return (
//     <div className='loginsignup'>
//       <div className="loginsignup-container">
//         <h1>Sign Up</h1>
//         <div className="loginsignup-fields">
//           <input type="text" placeholder="Your Name" />
//           <input type="email" placeholder="Email Address" />
//           <input type="password" placeholder="Password" />
//         </div>
//         <button>Continue</button> 
        
//         <p className="loginsignup-login">
//           Already have an account? <span>Login here</span>
//         </p>
//         <div className="loginsignup-agree">
//           <input type="checkbox" id='' name='' />
//           <p>By continuing, I agree to the terms of use and privacy policy</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default LoginSignUp
