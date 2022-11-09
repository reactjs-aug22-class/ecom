import React from 'react'
import styles from './marketPlaceCard.stylesheet.css'

export default function MarketPlaceCard() {
  return (
    <div className="marketplace-card">
      <img
        className="marketplace-card-img"
        src="https://via.placeholder.com/150"
      />
      <p>Lorem ipsum dolor</p>
      <p>$22.0</p>
      <button className="btn marketplace-btn">Add to cart</button>
    </div>
  )
}
