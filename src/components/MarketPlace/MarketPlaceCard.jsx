import React from 'react'
import styles from './marketPlaceCard.stylesheet.css'

export default function MarketPlaceCard() {
  return (
    <div className="market-place-card">
      <img
        style={{ width: '100px', height: '100px' }}
        src="https://via.placeholder.com/150"
      />
      <p>Lorem ipsum dolor</p>
      <p>$22.0</p>
      <button>Add to cart</button>
    </div>
  )
}
