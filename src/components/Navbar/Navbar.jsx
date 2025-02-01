// import React, { useState, useContext, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { HiOutlineShoppingCart } from "react-icons/hi2";
// import './Navbar.css';
// import logo from "../assets/logo.png";
// import { ShopContext } from '../../context/ShopContext';

// const Navbar = () => {
//   const [menu, setMenu] = useState("");
//   const { cartCount } = useContext(ShopContext);
//   const location = useLocation();

//   // Check if the cart link is active
//   const isCartActive = location.pathname === '/cart';

//   useEffect(() => {
//     const path = location.pathname;
//     if (path === '/men') {
//       setMenu('men');
//     } else if (path === '/women') {
//       setMenu('women');
//     } else if (path === '/kids') {
//       setMenu('kids');
//     } else if (path === '/') {
//       setMenu('shop');
//     } else {
//       setMenu('');
//     }
//   }, [location]);

//   return (
//     <div className="navbar">
//       {/* Top Section */}
//       <div className="navbar-top">
//         <div className="nav-logo">
//           <Link to="/">
//             <img src={logo} alt="Logo" />
//             <p>SHOPPER</p>
//           </Link>
//         </div>
//         <div className="nav-search">
//           <form onSubmit={(e) => e.preventDefault()}>
//             <input
//               type="text"
//               placeholder="Search products, brands, and categories"
//             />
//             <button type="submit">Search</button>
//           </form>
//         </div>
//         <div className="nav-login-cart">
//           <Link to="/login_signup">
//             <button>Login</button>
//           </Link>
//           <Link to="/cart" className={`cart-link ${isCartActive ? 'active' : ''}`} >
//             <HiOutlineShoppingCart className="cart-icon" />
//             <div className="nav-cart-count">{cartCount}</div>
//             <span className="cart-text">Cart</span>
//           </Link>
//         </div>
//       </div> 

//       {/* Bottom Section */}
//       <div className="navbar-bottom">
//         <ul className="nav-menu">
//           <li onClick={() => setMenu('shop')}>
//             <Link to="/">Shop</Link>
//             {menu === 'shop' && <hr />}
//           </li>
//           <li onClick={() => setMenu('men')}>
//             <Link to="/men">Men</Link>
//             {menu === 'men' && <hr />}
//           </li>
//           <li onClick={() => setMenu('women')}>
//             <Link to="/women">Women</Link>
//             {menu === 'women' && <hr />}
//           </li>
//           <li onClick={() => setMenu('kids')}>
//             <Link to="/kids">Kids</Link>
//             {menu === 'kids' && <hr />}
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



import React, { useState, useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiOutlineShoppingCart } from "react-icons/hi2";
import './Navbar.css';
import logo from "../assets/logo.png";
import { ShopContext } from '../../context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const { cartCount, searchProducts } = useContext(ShopContext);
  const location = useLocation();
  const navigate = useNavigate();

  // Check if the cart link is active
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
      setSearchQuery(""); // Clear the search input field
      navigate('/search');
    }
  };

  return (
    <div className="navbar">
      {/* Top Section */}
      <div className="navbar-top">
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
            <p>SHOPPER</p>
          </Link>
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
          <Link to="/login_signup">
            <button>Login</button>
          </Link>
          <Link to="/cart" className={`cart-link ${isCartActive ? 'active' : ''}`} >
            <HiOutlineShoppingCart className="cart-icon" />
            <div className="nav-cart-count">{cartCount}</div>
            <span className="cart-text">Cart</span>
          </Link>
        </div>
      </div> 

      {/* Bottom Section */}
      <div className="navbar-bottom">
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
    </div>
  );
};

export default Navbar;