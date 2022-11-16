import './cartSummary.stylesheet.css'

import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import UserCartContext from '../Context/UserCartContext'

export default function CartSummary() {
  const { userCart, setUserCart } = useContext(UserCartContext)
  const isDisabledCheckoutBtn = userCart.length === 0
  const subTotal = userCart.reduce((total, item) => {
    return (total += parseFloat(item.price * item.qty))
  }, 0)
  return (
    <div className="cart-summary">
      <div className="cart-summary-price">
        <p className="all-caps">Subtotal</p>
        <p>$ {subTotal.toFixed(2)}</p>
      </div>
      <Link to={'/checkout'}>
        <button
          className={`btn cart-summary-btn all-caps 
            ${isDisabledCheckoutBtn ? 'grey-out' : ''}`}
          disabled={isDisabledCheckoutBtn}
          onClick={() => {
            setUserCart([])
          }}
        >
          Checkout
        </button>
      </Link>
    </div>
  )
}
