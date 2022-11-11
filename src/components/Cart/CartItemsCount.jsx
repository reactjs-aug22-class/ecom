import React from 'react'

export default function CartItemsCount({ count = 0 }) {
  return <p className="cart-title-counter">{count}</p>
}
