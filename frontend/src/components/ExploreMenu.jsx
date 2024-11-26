import React from 'react'
import { menu_list } from '../assets/frontend_assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='flex flex-col gap-[20px]'>
        <h1 className='font-bold text-4xl text-[#0B192C]'>Explore our menu</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim pariatur, commodi nostrum placeat reprehenderit aperiam perferendis. Porro deleniti qui quae!</p>
        <div className='flex justify-between items-center gap-[30px] text-center my-5'>
            {menu_list.map((menu, index) => {
                return (
                    <div onClick={() => setCategory(prev => prev === menu.menu_name ? "All" : menu.menu_name)} key={index}>
                        <img src={menu.menu_image} alt="" />
                        <p className='mt-2 cursor-pointer'>{menu.menu_name}</p>
                    </div>
                )
            })}

        </div>
        <hr className='mt-[10px] bg-black-400 mb-5 border-[1px]' />
    </div>
  )
}

export default ExploreMenu