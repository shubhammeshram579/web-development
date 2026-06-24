import React from "react";
import Header from "./header";
import Sidebarheader from "./sidebarheader";
import { Outlet, Link } from "react-router-dom";
import Footer from "../footer/footer";

const Mainheader = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex">
        <Sidebarheader />
        <div className="min-h-screen w-full bg-gray-50">
          <div className="p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainheader;
