import React from 'react'
import logoimg from "./LogoImg.png";
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux"

const Logo = () => {
  const authStatusAdmin = useSelector((state) => state.auth.isAdminLoggedIn);
  return (
    <div>
      {!authStatusAdmin ? (<Link
          className="navbar-brand text-info"
          style={{
            fontSize: "25px",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
         to="/"
        >
          <img height={60} src={logoimg} alt="" /> Adopt
        </Link>) : (
          <Link
          className="navbar-brand text-info"
          style={{
            fontSize: "25px",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
         to="/HomeDashboard"
        >
          <img height={60} src={logoimg} alt="" /> Adopt
        </Link>)}
        
    </div>
  )
}

export default Logo
