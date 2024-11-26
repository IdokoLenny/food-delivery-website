import React from "react";

const Header = () => {
  return (
    <div className="h-[33vw] my-4 mx-auto header-bg">
      <div className="fade-in absolute flex flex-col items-start gap-2 max-w-[50%] bottom-[10%] left-[6vw] text-white">
        <h2 className="font-medium text-5xl">Order your <br /> favourite food here</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui rerum ab
          officia dolorem natus, atque cum fuga iure modi error dicta commodi
          reprehenderit, earum voluptatum.
        </p>
        <button className="border-none font-base bg-white py-2 px-5 rounded-full text-[#0B192C]">View Menu</button>
      </div>
    </div>
  );
};

export default Header;
