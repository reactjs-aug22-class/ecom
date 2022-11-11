import './cartTitle.stylesheet.css'

import React, { useContext } from 'react'

import CartItemsCount from './CartItemsCount'
import UserCartContext from '../Context/UserCartContext'

export default function CartTitle() {
  const { userCart } = useContext(UserCartContext)
  return (
    <div className="cart-title box-shadow">
      <div className="cart-title-icon">
        <span class="material-symbols-outlined">shopping_cart</span>
        <CartItemsCount count={userCart.length} />
      </div>
      <span className="cart-title-heading">Cart</span>
    </div>
  )
}
