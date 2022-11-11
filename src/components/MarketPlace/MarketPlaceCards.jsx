import './marketPlaceCards.stylesheet.css'

import React, { useEffect, useState } from 'react'

import MarketPlaceCard from './MarketPlaceCard'

export default function MarketPlaceCards() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then(res => res.json())
      .then(json => setProducts(json))
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className="marketplace-cards">
      {products.map(product => (
        <MarketPlaceCard key={product.id} product={product} />
      ))}
    </div>
  )
}
