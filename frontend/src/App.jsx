import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder'
import Home from "./pages/Home"
import Cart from "./pages/Cart"

const App = () => {
  return (

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
      </Routes>
  )
}

export default App