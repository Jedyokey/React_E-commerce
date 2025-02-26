import React from 'react'
import "./Popular.css"
import data_product from '../assets/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1> 
        <hr />
        <div className="popular-item">
            {data_product.map(item => {
                return (
                    <Item 
                        key={item.id} 
                        id={item.id} 
                        name={item.name}
                        image={item.image}
                        newPrice={item.new_price}
                        oldPrice={item.old_price} 
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Popular
