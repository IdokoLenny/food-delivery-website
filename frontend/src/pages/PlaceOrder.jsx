import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

const PlaceOrder = () => {

  const {getCartAmount} = useContext(StoreContext)
  const inputStyle = "mb-[15px] w-[100%] p-2 border-2 border-gray rounded-[4px]";
  return (
    <form className='flex flex-col sm:flex-row items-start justify-even gap-[50px] mt-[80px] font-outfit w-[80%] mx-auto text-[#0B192C]'>
      <div>
        <p className='mb-[20px] font-bold lg:text-lg'>Delivery Information</p>
        <div className="flex gap-[10px]">
          <input type="text" placeholder='First Name' className={inputStyle} />
          <input type="text" placeholder='Last Name' className={inputStyle} />
        </div>
          <input type="email" placeholder='Email Address' className={inputStyle} />
          <input type="text" placeholder='Street' className={inputStyle} />
        <div className="flex gap-[10px]">
          <input type="text" placeholder='City' className={inputStyle} />
          <input type="text" placeholder='State' className={inputStyle} />
        </div>
        <div className="flex gap-[10px]">
          <input type="text" placeholder='Zip Code' className={inputStyle} />
          <input type="text" placeholder='Country' className={inputStyle} />
        </div>
        <input type="text" placeholder='Phone' className={inputStyle} />
      </div>
      <div className='flex-1 w-[100%]'>
      <div className="flex-1 flex flex-col gap-[20px] text-sm sm:text-base">
          <h2 className='font-bold lg:text-lg '>Cart Total</h2>
          <div>
            <div className="flex justify-between">
              <p>SubTotal</p>
              <p>{getCartAmount()}</p>
            </div>
            <hr className="my-2"/>
            <div className="flex justify-between">
              <p>Delivery Fee</p>
              <p>${2}</p>
            </div>
            <hr className="my-2"/>
            <div className="flex justify-between">
              <p className='font-medium lg:text-lg'>Total</p>
              <p>${getCartAmount() + 2}</p>
            </div>
          </div>
          <button className="text-white text-xs sm:text-sm bg-[#FF6500] sm:w-[18vw] py-2 rounded-[4px] cursor-pointer">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder