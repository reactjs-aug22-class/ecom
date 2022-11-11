import './marketplace.stylesheet.css'

import Header from '../components/Header'
import MarketPlaceCards from '../components/MarketPlace/MarketPlaceCards'
import React from 'react'

export default function MarketPlace() {
  return (
    <>
      <h3 className="marketplace-title">MarketPlace</h3>
      <MarketPlaceCards />
    </>
  )
}
