import React, { useContext } from 'react'

import UserCartContext from '../Context/UserCartContext'
import styles from './marketPlaceCard.stylesheet.css'

export default function MarketPlaceCard({ product }) {
  const { userCart, setUserCart } = useContext(UserCartContext)
  const handleAddToCart = () => {
    const index = userCart.findIndex(item => item.id === product.id)
    if (index === -1) {
      setUserCart(prevUserCart => [...prevUserCart, { ...product, qty: 1 }])
    }
  }
  return (
    <div className="marketplace-card">
      <img className="marketplace-card-img" src={product.image} />
      <p>{product.title}</p>
      <p className="marketplace-card-price">$ {product.price}</p>
      <button onClick={handleAddToCart} className="btn marketplace-btn">
        Add to cart
      </button>
    </div>
  )
}
