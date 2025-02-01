import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
import SearchPage from './pages/SearchPage/SearchPage';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory/ShopCategory';
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';
import LoginSignUp from './pages/LoginSignUp/LoginSignUp';
import Login from './pages/Login/Login';
import Footer from './components/Footer/Footer';
import men_banner from "./components/assets/banner_mens.png"
import women_banner from "./components/assets/banner_women.png"
import kids_banner from "./components/assets/banner_kids.png"

// Import Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Navbar />
        <ToastContainer 
          position="top-right" 
          autoClose={5000} 
          pauseOnHover
          theme="colored" 
        />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/men" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/women" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid" />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login_signup' element={<LoginSignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
