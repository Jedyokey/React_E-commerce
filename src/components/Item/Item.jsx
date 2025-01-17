import React from 'react'
import "./Item.css"

const Item = ({ name, image, newPrice, oldPrice }) => {
  return (
    <div className='item'>
        <img src={image} alt="" />
        <p>{name}</p>

        <div className="item-prices">
            <div className="item-price-new">
                ${newPrice}
            </div>
            <div className="item-price-old">
                ${oldPrice}
            </div>
        </div>
      
    </div>
  )
}

export default Item
