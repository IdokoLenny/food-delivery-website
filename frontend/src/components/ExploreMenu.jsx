import React from 'react'
import { menu_list } from '../assets/frontend_assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='flex flex-col gap-[15px] pt-3' id='explore-menu'>
        <h1 className='font-bold text-xl md:text-4xl text-[#0B192C]'>Explore our menu</h1>
        <p className='text-justify text-sm sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim pariatur, commodi nostrum placeat reprehenderit aperiam perferendis. Porro deleniti qui quae!</p>
        <div className='w-[100%] flex justify-between items-center gap-[30px] text-center my-5 overflow-x-scroll sm:overflow-x-hidden overflow-y-hidden'>
            {menu_list.map((menu, index) => {
                return (
                    <div className='flex-auto w-[30%] h-[20vh]' onClick={() => setCategory(prev => prev === menu.menu_name ? "All" : menu.menu_name)} key={index}>
                        <img src={menu.menu_image} alt="" className={category === menu.menu_name ? "border-2 border-[#FF6500] rounded-[50%] p-[1px] h-[50%] w-[100%]" : "h-[50%] w-[100%]"} />
                        <p className='mt-2 text-xs md:text-base cursor-pointer'>{menu.menu_name}</p>
                    </div>
                )
            })}

        </div>
        <hr className='mt-[2px] bg-black-400 mb-5 border-[1px]' />
    </div>
  )
}

export default ExploreMenu