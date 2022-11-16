import './cartCard.stylesheet.css'

import React, { useContext } from 'react'

import UserCartContext from '../Context/UserCartContext'

export default function CartCard({ product }) {
  const { userCart, setUserCart } = useContext(UserCartContext)

  const handleRemove = () => {
    const userCartCopy = [...userCart]
    const index = userCart.findIndex(item => item.id === product.id)
    if (index !== -1) {
      userCartCopy.splice(index, 1)
      setUserCart(userCartCopy)
    }
  }
  const increment = () => {
    const index = userCart.findIndex(item => item.id === product.id)
    if (index !== -1 && userCart[index].qty < 10) {
      const userCartCopy = [...userCart]
      const cartItemCopy = { ...userCartCopy[index] }
      cartItemCopy.qty++
      userCartCopy[index] = cartItemCopy
      setUserCart(userCartCopy)
    }
  }
  const decrement = () => {
    const index = userCart.findIndex(item => item.id === product.id)
    if (index !== -1 && userCart[index].qty > 0) {
      const userCartCopy = [...userCart]
      const cartItemCopy = { ...userCartCopy[index] }
      cartItemCopy.qty--
      userCartCopy[index] = cartItemCopy
      setUserCart(userCartCopy)
    }
  }

  const isMaxQty = product.qty === 10
  const isZeroQty = product.qty === 0

  return (
    <div className="cart-card box-shadow">
      <button className="close-btn cart-card-remove" onClick={handleRemove}>
        <span className="material-symbols-outlined">close</span>
      </button>
      <div className="cart-card-content">
        <img src={product.image} alt="" />
        <div>
          <p>{product.title}</p>
          <p>{product.category}</p>
          <p>
            Quantity: {product.qty}{' '}
            {isMaxQty ? (
              <span className="qty-warning">max qty achieved</span>
            ) : null}
          </p>
        </div>
        <div className="cart-card-price">
          <p>{product.price}</p>
          <button
            className={`btn cart-card-btn ${isMaxQty ? 'grey-out' : ''}`}
            onClick={increment}
            disabled={isMaxQty}
          >
            <span className="material-symbols-outlined">add</span>
          </button>
          <button
            className={`btn cart-card-btn ${isZeroQty ? 'grey-out' : ''}`}
            disabled={isZeroQty}
          >
            <span className="material-symbols-outlined" onClick={decrement}>
              remove
            </span>
          </button>
          {isZeroQty ? (
            <button className="bin-btn" onClick={handleRemove}>
              <span className="material-symbols-outlined">delete_forever</span>
            </button>
          ) : null}
        </div>
      </div>
    </div>
  )
}
