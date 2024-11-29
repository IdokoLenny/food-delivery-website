import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const AppDownload = () => {
  return (
    <div className='mt-[80px] mx-auto font-base text-center font-medium' id='app-download'>
        <p className='text-medium md:text-4xl md:leading-[3rem] mb-3'>For Better Experience Download <br /> Lenny App</p>
        <div className='flex justify-center items-center mt-5 gap-[20px]'>
            <img src={assets.play_store} alt="" className='w-[15vw] cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' />
            <img src={assets.app_store} alt="" className='w-[15vw] cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' />
        </div>
    </div>
  )
}

export default AppDownload