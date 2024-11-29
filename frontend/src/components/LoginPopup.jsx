import React, { useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currentState, setCurrentState] = useState("Sign Up")
  return (
    <div className='absolute z-1 w-[100%] h-[100%] bg-[#00000090] grid'>
        <form action="" className='place-self-center w-[25vw] text-[#808080] bg-white flex flex-col gap-[25px] py-[25px] rounded-[8px] text-sm fade-in px-[30px]'>
            <div className='flex justify-between items-center text-black'>
                <h2 className='font-bold text-lg'>{currentState}</h2>
                <img className='w-[16px] cursor-pointer' onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className='flex flex-col gap-[20px]'>
                {currentState === "Login" ? <></> : <input className='border-2 border-[#c9c9c9] p-[10px] rounded-[4px]' type="text" placeholder='Your name' required />}              
                <input className='border-2 border-[#c9c9c9] p-[10px] rounded-[4px]' type="email" placeholder='Your email' required/>
                <input className='border-2 border-[#c9c9c9] p-[10px] rounded-[4px]' type="password" placeholder='Password' required/>
                <button className='p-[10px] rounded-[4px] text-white bg-[#FF6500] cursor-pointer'>{currentState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className='flex items-start gap-[8px] mt-[-5px]'>
                    <input type="checkbox" className='mt-3' required/>
                    <p className='text-xs sm:text-sm'>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                {currentState === "Login" ? <p>Create a new account? <span className='text-[#FF6500] font-bold cursor-pointer' onClick={() => setCurrentState("Sign Up")}>Click here</span></p> : <p>Already have an account? <span className='text-[#FF6500] font-bold cursor-pointer' onClick={() => setCurrentState("Login")}>Login here</span></p>}               
            </div>
        </form>
    </div>
  )
}

export default LoginPopup