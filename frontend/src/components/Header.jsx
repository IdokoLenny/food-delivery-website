import React from "react";

const Header = () => {
  return (
    <div className="h-[33vw] my-4 mx-auto header-bg z-[-1]">
      <div className="fade-in absolute flex flex-col items-start gap-2 max-w-[50%] bottom-[10%] left-[6vw] text-white">
        <h2 className="font-medium text-sm md:text-3xl lg:text-5xl">Order your <br /> favourite food here</h2>
        <p className="hidden lg:block">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui rerum ab
          officia dolorem natus, atque cum fuga iure modi error dicta commodi
          reprehenderit, earum voluptatum.
        </p>
        <button className="border-none font-base bg-white text-xs py-1 px-2 md:py-2 md:px-5 rounded-full text-[#0B192C]">View menu</button>
      </div>
    </div>
  );
};

export default Header;
