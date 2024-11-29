import React, { useState } from "react";
import {Link} from "react-router-dom"
import { assets } from "../assets/frontend_assets/assets";

const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("home")

  return (
    <div className="w-[80%] mx-auto flex justify-between items-center py-2 font-outfit text-[#0B192C]">
      <Link to="/"> <img src={assets.my_logo} alt="" className="h-[50%] w-[50px] lg:w-[80px]" /></Link>
      <ul className="sm:flex gap-[20px] sm:gap-5 hidden sm:font-sm">
        <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "pb-[4px] cursor-pointer border-b-[2px] border-[#FF6500]" : ""}>Home</Link>
        <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "pb-[4px] cursor-pointer border-b-[2px] border-[#FF6500]" : ""}>Menu</a>
        <a href="#app-download" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "pb-[4px] cursor-pointer border-b-[2px] border-[#FF6500]" : ""}>Mobile app</a>
        <a href="#footer" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "pb-[4px] cursor-pointer border-b-[2px] border-[#FF6500]" : ""}>Contact us</a>
      </ul>
      <div className="flex items-center gap-[12px] lg:gap-6 pt-3">
        <img src={assets.search_icon} alt="" className="w-[15px] sm:w-[20px]" />
        <div className="relative">
          <Link to="/cart"><img src={assets.basket_icon} alt="" className="w-[15px] sm:w-[20px]" /></Link> 
          <div className="absolute min-w-[5px] min-h-[5px] sm:min-w-[8px] sm:min-h-[8px] bg-[#FF6500] border-[1px] rounded-[5px] top-[-8px] right-[-8px]">
            
          </div>
        </div>
        <button onClick={() => setShowLogin(true)} className="bg-transparent text-xs md:text-base lg:font-base py-[3px] px-[7px] lg:py-2 lg:px-4 border-[1px] border-[#FF6500] rounded-2xl cursor-pointer hover:bg-[#FF6500] transition ease-in-out delay-80">Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
