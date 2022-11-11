import './App.css'

import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import UserCartProvider from './components/Context/UserCartProvider'

function App() {
  return (
    <div className="route-main">
      <UserCartProvider>
        <Header />
        <Outlet />
      </UserCartProvider>
    </div>
  )
}

export default App
