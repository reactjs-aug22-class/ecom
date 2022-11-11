import React, { useContext } from 'react'

import CartItemsCount from './Cart/CartItemsCount'
import { Link } from 'react-router-dom'
import UserCartContext from './Context/UserCartContext'
export default function Header() {
  const { userCart } = useContext(UserCartContext)
  return (
    <header className="spacer-3">
      <nav className="header-nav">
        <Link to={'/marketplace'}>MarketPlace</Link>
        <div style={{ position: 'relative', width: '3rem' }}>
          <Link to={'/cart'}>Cart</Link>
          <CartItemsCount count={userCart.length} />
        </div>
        <Link to={'/checkout'}>Checkout</Link>
      </nav>
    </header>
  )
}
