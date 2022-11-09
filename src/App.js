import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Cart from './routes/Cart'
import FakeCheckout from './routes/Checkout'
import MarketPlace from './routes/MarketPlace'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<MarketPlace />} />
          <Route path="cart" element={<Cart />}>
            <Route path="checkout" element={<FakeCheckout />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
