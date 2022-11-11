import './cartCards.stylesheet.css'

import React, { useContext } from 'react'

import CartCard from './CartCard'
import UserCartContext from '../Context/UserCartContext'

export default function CartCards() {
  const { userCart, setUserCart } = useContext(UserCartContext)
  return (
    <div className="marketplace-cards ">
      {userCart.map(product => (
        <CartCard key={product.id} product={product} />
      ))}
    </div>
  )
}
