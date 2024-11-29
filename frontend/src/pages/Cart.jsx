import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
  return (
    <div className="font-outfit w-[80%] mx-auto mt-[100px] text-[#0B192C]">
      <div>
        <div className="grid grid-cols-6 font-bold text-center">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className="border-[1px] my-3" />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div
                  key={index}
                  className="grid grid-cols-6 my-[10px] text-center"
                >
                  <img src={item.image} alt="" className="w-[50px] mx-auto" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    onClick={() => removeFromCart(item._id)}
                    className="cursor-pointer"
                  >
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="mt-[50px] flex justify-between gap-[20px]">
        <div className="flex-1 flex flex-col gap-[20px]">
          <h2>Cart Total</h2>
          <div>
            <div className="flex justify-between">
              <p>SubTotal</p>
              <p>{0}</p>
            </div>
            <hr className="my-2"/>
            <div className="flex justify-between">
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div>
            <hr className="my-2"/>
            <div className="flex justify-between">
              <p>Total</p>
              <p>{0}</p>
            </div>
          </div>
          <button className="text-white text-sm bg-[#FF6500] w-[18vw] py-2 rounded-[4px] cursor-pointer">PROCEED TO CHECKOUT</button>
        </div>
        <div className="flex-1 ">
          <div>
            <p className="text-[#555]">If you have a promo code, Enter it here</p>
            <div className="flex justisfy-between items-center mt-5 rounded-[4px] bg-[#eaeaea] p-0">
              <input type="text" placeholder="Promo code" className="border-2 bg-transparent pl-2 m-0" />
              <button className="w-[10vw] p-2 bg-black text-white rounded-[4px]">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
