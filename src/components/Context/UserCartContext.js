import React, { createContext } from 'react'

const state = {
  userCart: [],
  setUserCart: () => {}
}
const UserCartContext = createContext(state)

export default UserCartContext
