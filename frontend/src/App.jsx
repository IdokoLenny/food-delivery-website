import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder'
import Navbar from './components/Navbar'
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Footer from './components/Footer'
import LoginPopup from './components/LoginPopup'

const App = () => {

  const [showLogin, setShowLogin] =useState(false)

  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div>
        <Navbar setShowLogin={setShowLogin} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/order' element={<PlaceOrder />} />
          </Routes>
          <Footer />
      </div>      
    </>
  )
}

export default App