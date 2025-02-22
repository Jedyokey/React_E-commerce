import React from 'react'
import "./ContinueShoppingButton.css"
import back_arrow from "../assets/back-icon.png"

const ContinueShoppingButton = ({ onClick }) => {
  return (
    <div>
        <button className="continue-shopping-button" onClick={onClick}> 
            <img src={back_arrow} alt="Continue Shopping" /> Continue Shopping
        </button>
    </div>
  )
}

export default ContinueShoppingButton
