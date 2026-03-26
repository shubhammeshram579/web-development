import React from "react";
import {Link} from "react-router-dom"
import { useAuth } from "..//../Context/AuthContext";

const MainHeader = () => {
    const { logout } = useAuth();
  return (
    <div>
      <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between">
        <h1 className="font-bold">My App</h1>
        <div className="flex item-center justify-center gap-2">
          <div className="flex item-center justify-center gap-2">
          <Link to="/home">Home</Link>
          <Link to="/product">Product</Link>
          <Link to="/about">About</Link>
          </div>
          <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default MainHeader;
