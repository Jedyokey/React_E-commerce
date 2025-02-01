// import React, { useContext } from 'react'
// import "./ShopCategory.css"
// import { ShopContext } from '../../context/ShopContext'
// import dropdown_icon from "../../components/assets/dropdown_icon.png"
// import Item from '../../components/Item/Item'

// const ShopCategory = ({ banner, category }) => {
//   const {products} = useContext(ShopContext);

//   return (
//     <div className='shop-category'> 
//         <img src={banner} className='shopcategory-banner' alt="" />

//         <div className="shopcategory-indexsort">
//           <p>
//             <span>Showing 1 - 12</span> out of 36 products
//           </p>

//           <div className="shopcategory-sort">
//             Sort by <img src={dropdown_icon} alt="" />
//           </div>
//         </div>

//         <div className="shopcategory-products">
//         {products
//           .filter(item => item.category === category) // Filter products by category
//           .map(item => (
//             <Item 
//               key={item.id} 
//               id={item.id} 
//               name={item.name} 
//               image={item.image} 
//               newPrice={item.new_price} 
//               oldPrice={item.old_price} 
//             />
//           ))}
//         </div>

//         <div className="shopcategory-loadmore">
//           Explore More
//         </div>
//     </div>
//   )
// }

// export default ShopCategory


import React, { useContext, useState } from "react";
import "./ShopCategory.css";
import { ShopContext } from "../../context/ShopContext";
import Item from "../../components/Item/Item";

const ShopCategory = ({ banner, category }) => {
  const { products } = useContext(ShopContext);
  const [sortOption, setSortOption] = useState("default");

  const sortedProducts = [...products]
    .filter((item) => item.category === category)
    .sort((a, b) => {
      if (sortOption === "price-low-high") return a.new_price - b.new_price;
      if (sortOption === "price-high-low") return b.new_price - a.new_price;
      return 0;
    });

  return (
    <div className="shop-category">
      <img src={banner} className="shopcategory-banner" alt="Category Banner" />

      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1 - {Math.min(12, sortedProducts.length)}</span> out of{" "}
          {sortedProducts.length} products
        </p>

        <div className="shopcategory-sort">
          <label htmlFor="sort">Sort by:</label>
          <select id="sort" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
            <option value="default">Default</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="shopcategory-products">
        {sortedProducts.slice(0, 12).map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            newPrice={item.new_price}
            oldPrice={item.old_price}
          />
        ))}
      </div>

      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;

