import React, { useContext } from 'react'

import UserCartContext from '../Context/UserCartContext'
import styles from './marketPlaceCard.stylesheet.css'

export default function MarketPlaceCard({ product }) {
  const { userCart, setUserCart } = useContext(UserCartContext)

  const handleAddToCart = () => {
    const index = userCart.findIndex(item => item.id === product.id)
    if (index === -1) {
      const userCartCopy = [...userCart, { ...product, qty: 1 }]
      setUserCart(userCartCopy)
    }
  }

  const handleRemoveFromCart = () => {
    const index = userCart.findIndex(item => item.id === product.id)
    if (index !== -1) {
      const userCartCopy = [...userCart]
      userCartCopy.splice(index, 1)
      setUserCart(userCartCopy)
    }
  }

  const isInCart = userCart.findIndex(item => item.id === product.id) !== -1

  return (
    <div className="marketplace-card">
      <img className="marketplace-card-img" src={product.image} />
      <p className="product-title">{product.title}</p>
      <p className="marketplace-card-price">$ {product.price}</p>

      {isInCart ? (
        <button onClick={handleRemoveFromCart} className="btn marketplace-btn">
          Remove From cart
        </button>
      ) : (
        <button onClick={handleAddToCart} className="btn marketplace-btn">
          Add to cart
        </button>
      )}
    </div>
  )
}
