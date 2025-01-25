import React, { useContext } from 'react'
import "./ShopCategory.css"
import { ShopContext } from '../../context/ShopContext'
import dropdown_icon from "../../components/assets/dropdown_icon.png"
import Item from '../../components/Item/Item'

const ShopCategory = ({ banner, category }) => {
  const {products} = useContext(ShopContext);

  return (
    <div className='shop-category'> 
        <img src={banner} className='shopcategory-banner' alt="" />

        <div className="shopcategory-indexsort">
          <p>
            <span>Showing 1 - 12</span> out of 36 products
          </p>

          <div className="shopcategory-sort">
            Sort by <img src={dropdown_icon} alt="" />
          </div>
        </div>

        <div className="shopcategory-products">
        {products
          .filter(item => item.category === category) // Filter products by category
          .map(item => (
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

        <div className="shopcategory-loadmore">
          Explore More
        </div>
    </div>
  )
}

export default ShopCategory
