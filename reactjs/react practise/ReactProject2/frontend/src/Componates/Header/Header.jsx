import React from "react";
import Logo from "../Logo";

function Header() {
  return (
    <div className="header flex items-center justify-between gap-5 h-20 px-10 w-full bg-gray-700">
      <div className="logo">
        <Logo />
      </div>
      <div className="navitems flex items-center justify-between gap-10">
        <a className="text-white text-lg uppercase hover:text-yellow-700" href="#">Home</a>
        <a className="text-white text-lg uppercase hover:text-yellow-700" href="#">About Us</a>
        <a className="text-white text-lg uppercase hover:text-yellow-700" href="#">Services/Products</a>
        <a className="text-white text-lg uppercase hover:text-yellow-700" href="#">Blog</a>
        <a className="text-white text-lg uppercase hover:text-yellow-700" href="#">Contact Us</a>
      </div>
    </div>
  );
}

export default Header;
