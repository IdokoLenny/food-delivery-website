import React, { useContext} from "react";
import { assets } from "../assets/frontend_assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, description, price, image }) => {

  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext)

  return (
    <div className="sm:w-[44%] md:w-[23%] shadow-md fade-in">
      <div className="relative">
        <img src={image} alt="" className="border-2 rounded-[15px] w-[100%]" />
        {!cartItems[id] ? <img className="w-[25px] absolute bottom-[15px] right-[15px]" onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" /> : <div className="absolute bottom-[15px] right-[15px] flex items-center gap-[10px] px-[6px] bg-white rounded-[50px]"><img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" className="w-[20px]" /> <p>{cartItems[id]}</p><img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" className="w-[20px]"/> </div>}
      </div>
      <div className="p-3">
        <div className="flex justify-between items-center mb-[10px]">
          <p className="text-sm md:text-sm font-bold">{name}</p>
          <img src={assets.rating_starts} alt="" className="w-[25%]" />
        </div>
        <p className="text-xs md:text-sm">{description}</p>
        <p className="text-sm font-bold m-2 text-[#FF6500]">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
