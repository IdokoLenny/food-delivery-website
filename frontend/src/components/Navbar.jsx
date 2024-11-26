import React, { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";

const Navbar = () => {

  const [menu, setMenu] = useState("home")

  return (
    <div className="flex justify-between items-center h-[3rem] py-2">
      <img src={assets.my_logo} alt="" className="h-[100%] w-[150px]" />
      <ul className="flex gap-5 font-sm sm:font-base">
        <li onClick={() => setMenu("home")} className={menu === "home" ? "pb-[4px] cursor-pointer border-b-[2px] border-[#FF6500]" : ""}>Home</li>
        <li onClick={() => setMenu("menu")} className={menu === "menu" ? "pb-[4px] cursor-pointer border-b-[2px] border-[#FF6500]" : ""}>Menu</li>
        <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "pb-[4px] cursor-pointer border-b-[2px] border-[#FF6500]" : ""}>Mobile app</li>
        <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "pb-[4px] cursor-pointer border-b-[2px] border-[#FF6500]" : ""}>Contact us</li>

      </ul>
      <div className="flex items-center gap-6 pt-3">
        <img src={assets.search_icon} alt="" />
        <div className="relative">
          <img src={assets.basket_icon} alt="" />
          <div className="absolute min-w-[10px] min-h-[10px] bg-[#FF6500] border-[1px] rounded-[5px] top-[-8px] right-[-8px]">
            
          </div>
        </div>
        <button className="bg-transparent font-base py-2 px-4 border-[1px] border-[#FF6500] rounded-2xl cursor-pointer hover:bg-[#FF6500] transition ease-in-out delay-80">Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
