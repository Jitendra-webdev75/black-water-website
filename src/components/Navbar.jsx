import React from "react";
import logo from "./assets/logo.png";

function Navbar() {
  return (
    <>
      <div className="nav h-[10vh] w-full flex justify-between items-center  absolute top-0 p-2 select-none text-white">
        <div
          className="logo  flex items-center  bg-cover object-cover
        h-[8vh] w-[9vw]  ml-3 mt-1 text-2xl  "
        >
          <img
            src={logo}
            className="sm:scale-200  md:scale-200 lg:scale-110 scale-200
              p-2"
          />
        </div>

        <div
          className="menubar flex sm:flex md:hidden lg:hidden
          text-3xl p-3 sm:text-3xl sm:p-3"
        >
          <i className="ri-menu-fill"></i>
        </div>

        <div
          className="navSect hidden gap-10 mr-10 text-xl font-[font1] 
          sm:hidden   md:flex lg:flex  z-20 "
        >
          <h1 className="sm:text-2xl md:text-2xl lg:text-xl hover:text-green-400 cursor-pointer ">
            Home
          </h1>
          <h1 className="sm:text-2xl md:text-2xl lg:text-xl hover:text-green-400 cursor-pointer">
            Product
          </h1>
          <h1 className="sm:text-2xl md:text-2xl lg:text-xl hover:text-green-400 cursor-pointer">
            Services
          </h1>
          <h1 className="sm:text-2xl md:text-2xl lg:text-xl hover:text-green-400 cursor-pointer">
            About
          </h1>
        </div>
      </div>
    </>
  );
}

export default Navbar;
