import React, { useState, useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import { FaSearch, FaRegUser } from "react-icons/fa"; 
import './Navbar.css';
import logo from "../assets/logo.png";
import { ShopContext } from '../../context/ShopContext';
import Login from '../../pages/Login/Login'; 
import LoginSignUp from '../../pages/LoginSignUp/LoginSignUp'; 
import Modal from '../../components/Modal/Modal'; 

const Navbar = () => {
  const [menu, setMenu] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const { cartCount, searchProducts } = useContext(ShopContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // State for login modal
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false); // State for sign-up modal

  const location = useLocation();
  const navigate = useNavigate();

  const isCartActive = location.pathname === '/cart';

  useEffect(() => {
    const path = location.pathname;
    if (path === '/men') {
      setMenu('men');
    } else if (path === '/women') {
      setMenu('women');
    } else if (path === '/kids') {
      setMenu('kids');
    } else if (path === '/') {
      setMenu('shop');
    } else { 
      setMenu('');
    }
  }, [location]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      searchProducts(searchQuery);
      setSearchQuery("");
      navigate('/search');
    }
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const openSignUpModal = () => {
    setIsSignUpModalOpen(true);
  };

  const closeSignUpModal = () => {
    setIsSignUpModalOpen(false);
  };

  useEffect(() => {
    if (isLoginModalOpen || isSignUpModalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isLoginModalOpen, isSignUpModalOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeLoginModal();
        closeSignUpModal();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className="navbar">
      {/* Top Section */}
      <div className="navbar-top">
        <div className="test">
          <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </div>
          <div className="nav-logo">
            <Link to="/">
              <img src={logo} alt="Logo" />
              <p>SHOPPER</p>
            </Link>
          </div>
        </div>

        <div className="nav-search">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search products, brands, and categories"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>
        
        <div className="nav-login-cart"> 
          <button onClick={openLoginModal} aria-label="Open Login Modal"> {/* Open login modal on click */}
            <FaRegUser className='user-icon' />
            <span className="user">Login</span>   
          </button>                                             
          <Link to="/cart" className={`cart-link ${isCartActive ? 'active' : ''}`} >
            <MdOutlineShoppingCart className="cart-icon" size={24} />
            <div className="nav-cart-count">{cartCount}</div>
            <span className="cart-text">Cart</span>
          </Link>
        </div>
      </div> 

      {/* Bottom Section - Mobile Menu Links */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : "navbar-bottom"}`}>
        <ul className="nav-menu">
          <li onClick={() => setMenu('shop')}>
            <Link to="/">Shop</Link>
            {menu === 'shop' && <hr />}
          </li>
          <li onClick={() => setMenu('men')}>
            <Link to="/men">Men</Link>
            {menu === 'men' && <hr />}
          </li>
          <li onClick={() => setMenu('women')}>
            <Link to="/women">Women</Link>
            {menu === 'women' && <hr />}
          </li>
          <li onClick={() => setMenu('kids')}>
            <Link to="/kids">Kids</Link>
            {menu === 'kids' && <hr />}
          </li>
        </ul>
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && ( 
        <div className="mobile-menu-overlay open" onClick={toggleMobileMenu} />
      )} 

      {/* Mobile Search Bar */}
      <div className="mobile-search-bar">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search products, brands, and categories"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">
            <FaSearch className="search-icon" />
          </button>
        </form>
      </div>

      {/* Login Modal */}
      <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
        <Login onClose={closeLoginModal} openSignUpModal={openSignUpModal} />
      </Modal>

      {/* Sign Up Modal */}
      <Modal isOpen={isSignUpModalOpen} onClose={closeSignUpModal}>
        <LoginSignUp onClose={closeSignUpModal} openLoginModal={openLoginModal} />
      </Modal>
    </div>
  );
};

export default Navbar;