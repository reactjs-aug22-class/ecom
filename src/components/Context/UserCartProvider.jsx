import React, { useMemo, useState } from 'react'

import UserCartContext from './UserCartContext'

export default function UserCartProvider({ children }) {
  const [userCart, setUserCart] = useState([])

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
