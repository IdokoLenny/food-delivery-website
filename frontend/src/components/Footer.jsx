import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {

  // Smooth scroll to top
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div
      id="footer"
      className="flex bg-[#1E3E62] text-white items-center text-center sm:text-left gap-[10px] flex-col pt-5 pt-[20px] font-outfit mt-5"
    >
      <div className="flex flex-col sm:flex-row gap-[30px] w-[80%] mx-auto">
        <div className="flex-2 p-5">
          <img
            src={assets.my_logo}
            alt=""
            className="w-[40px] h-[20px] mx-auto sm:ml-0"
          />
          <p className="mt-4 text-justify md:text-start text-sm lg:text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, unde.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
            laborum, eveniet corporis in nihil repellendus reiciendis illo
            facere aut nesciunt alias laboriosam nulla dolor quod!
          </p>
          <div className="flex mt-4 gap-3 justify-center sm:justify-start">
            <img
              src={assets.facebook_icon}
              alt=""
              className="w-[20px] sm:w-[30px]"
            />
            <img
              src={assets.twitter_icon}
              alt=""
              className="w-[20px] sm:w-[30px]"
            />
            <img
              src={assets.linkedin_icon}
              alt=""
              className="w-[20px] sm:w-[30px]"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col sm:flex-row gap-[30px]">
          <div className="flex-1 p-3">
            <h2 className="font-bold text-sm lg:text-lg text-[#FF6500]">COMPANY</h2>
            <ul className="pb-4 mt-4 text-sm lg:text-base">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">About us</li>
              <li className="cursor-pointer">Delivery</li>
              <li className="cursor-pointer">Privacy Policy</li>
            </ul>
          </div>
          <div className="flex-1 p-3">
            <h2 className="font-bold text-sm lg:text-lg text-[#FF6500]">GET IN TOUCH</h2>
            <ul className="pb-4 mt-4 text-sm lg:text-base">
              <li>+234 807 617 6345</li>
              <li>contact:dummy@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="w-[80%] h-[2px] mt-[20px] bg-grey" />
      <div className="relative">
        <p className="pb-3 text-xs sm:text-base">
          Copyright {new Date().getFullYear()} &reg; Lenny.com - All Rights
          Reserved.
        </p>
        <button
          onClick={() => scrollToTop()}
          id="scroll-to-top" class="absolute sm:right-[-10rem] sm:bottom-2 bottom-12 right-[-0.5rem] bg-gray-800 text-white rounded-full transition duration-300 hover:bg-gray-700 hover:text-gray-200"
        >
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20240227155250/up.png"
            className="w-8 h-8 rounded-full bg-white"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default Footer;
