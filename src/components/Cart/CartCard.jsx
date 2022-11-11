import './cartCard.stylesheet.css'

import React from 'react'

export default function CartCard({ product }) {
  return (
    <div className="cart-card box-shadow">
      <div className="cart-card-remove">
        <span class="material-symbols-outlined">close</span>
      </div>
      <div className="cart-card-content">
        <img src={product.image} alt="" />
        <div>
          <p>{product.title}</p>
          <p>{product.category}</p>
          <p>Quantity: {product.qty}</p>
        </div>
        <div className="cart-card-price">
          <p>{product.price}</p>
          <button className="btn cart-card-btn">
            <span class="material-symbols-outlined">add</span>
          </button>
          <button className="btn cart-card-btn">
            <span class="material-symbols-outlined">remove</span>
          </button>
        </div>
      </div>
    </div>
  )
}
