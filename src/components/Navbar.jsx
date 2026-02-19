import React from "react";

function Navbar() {
  return (
    <>
      <div className="nav h-8vh w-full flex justify-between items-center  absolute top-0 p-2 bg-black text-white">
        <div className="logo  flex items-center h-[8vh] w-[8vw] ml-3 mt-1 text-2xl ">
          <img src="./src/assets/logo.png" alt="" />
        </div>
        <div className="navSect flex gap-10 mr-10 text-xl font-[font1]">
          <h1>Home</h1>
          <h1>Product</h1>
          <h1>Services</h1>
          <h1>About</h1>
        </div>
      </div>
    </>
  );
}

export default Navbar;
