import React, { useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import ExploreMenu from '../components/ExploreMenu'

const Home = () => {
  const [category, setCategory] = useState("All")
  return (
    <div className='font-outfit w-[80%] mx-auto'>
      <Navbar />
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
    </div>
  )
}

export default Home