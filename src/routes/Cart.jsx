import './cart.stylesheet.css'

import React, { useState } from 'react'

import CartCards from '../components/Cart/CartCards'
import CartSummary from '../components/Cart/CartSummary'
import CartTitle from '../components/Cart/CartTitle'
import Header from '../components/Header'

export default function Cart() {
  return (
    <>
      <div className="spacer-3">
        <CartTitle />
      </div>
      <CartCards />
      <CartSummary />
    </>
  )
}
