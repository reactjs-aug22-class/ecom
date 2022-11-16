import React, { useEffect, useMemo, useState } from 'react'

import UserCartContext from './UserCartContext'

export default function UserCartProvider({ children }) {
  const [userCart, setCart] = useState([])

  useEffect(() => {
    const savedUserCart = JSON.parse(localStorage.getItem('cart'))
    if (savedUserCart && Array.isArray(savedUserCart)) {
      setCart(savedUserCart)
    }
  }, [])

  const setUserCart = value => {
    setCart(value)
    localStorage.setItem('cart', JSON.stringify(value))
  }

  const value = {
    userCart,
    setUserCart
  }

  return (
    <UserCartContext.Provider value={value}>
      {children}
    </UserCartContext.Provider>
  )
}
