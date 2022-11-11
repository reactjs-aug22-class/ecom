import './cartSummary.stylesheet.css'

import React, { useContext } from 'react'

import UserCartContext from '../Context/UserCartContext'

export default function CartSummary() {
  const { userCart } = useContext(UserCartContext)
  const subTotal = userCart.reduce((total, item) => {
    console.log(item, total)
    return (total += parseFloat(item.price))
  }, 0)
  return (
    <div className="cart-summary">
      <div className="cart-summary-price">
        <p className="all-caps">Subtotal</p>
        <p>$ {subTotal}</p>
      </div>
      <button className="btn cart-summary-btn all-caps">Checkout</button>
    </div>
  )
}
