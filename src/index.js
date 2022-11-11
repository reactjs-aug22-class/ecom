import './index.css'

import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'

import App from './App'
import Cart from './routes/Cart'
import FakeCheckout from './routes/Checkout'
import MarketPlace from './routes/MarketPlace'
import NoMatch from './routes/NoMatch'
import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="marketplace" element={<MarketPlace />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<FakeCheckout />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
