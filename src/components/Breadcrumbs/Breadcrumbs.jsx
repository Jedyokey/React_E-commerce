import React from 'react'
import "./Breadcrumbs.css"
import arrow_icon from "../assets/breadcrum_arrow.png"

const Breadcrumbs = ({ product }) => {
    // const {product} = props;
    if (!product) return null; // Avoid rendering if product is undefined
    
  return (
    <div className='breadcrumbs'>
        HOME <img src={arrow_icon} alt="" /> 
        SHOP <img src={arrow_icon} alt="" />
        {product.category.toUpperCase()} <img src={arrow_icon} alt="" />
        {product.name}
    </div>
  )
}

export default Breadcrumbs
