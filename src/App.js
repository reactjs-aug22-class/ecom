import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Cart from './routes/Cart'
import FakeCheckout from './routes/Checkout'
import MarketPlace from './routes/MarketPlace'
import NoMatch from './routes/NoMatch'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MarketPlace />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<FakeCheckout />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
