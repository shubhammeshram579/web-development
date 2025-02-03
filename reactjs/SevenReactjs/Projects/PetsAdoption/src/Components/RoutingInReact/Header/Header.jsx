import React from "react";
import { Link } from "react-router-dom";
import "..//..//../App.css";

const Header = () => {
  return (
    <div style={{position:"fixed", top:"0" ,zIndex:"99999" ,padding:"10px 40px" ,width:"100%" ,backgroundColor:"#191919"}}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link
          className="navbar-brand text-info"
          style={{ fontSize: "25px", fontWeight: "600" }}
          to="/"
        >
          Adopt.me
        </Link>
        <button
          className="navbar-toggler bg-info"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link
              id="navItemss"
                className="nav-link "
                style={{ fontSize: "20px"}}
                to="/"
              >
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                id="navItemss"
                className="nav-link"
                style={{ fontSize: "20px" }}
                to="/Shelters"
              >
                Shelters
              </Link>
            </li>
            <li className="nav-item">
              <Link
                id="navItemss"
                className="nav-link"
                style={{ fontSize: "20px" }}
                to="/Product"
              >
                Shop
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
              id="navItemss"
              style={{fontSize:"20px"}}
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
              Menu
              </a>
              <div className="dropdown-menu bg-dark">
                <Link
                  id="navItemss"
                  className="nav-link"
                  style={{ fontSize: "20px" }}
                  to="/about"
                >
                  About
                </Link>
                <Link
                  id="navItemss"
                  className="nav-link"
                  style={{ fontSize: "20px" }}
                  to="/Contract"
                >
                  Contract
                </Link>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item text-white" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search product"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-info my-2 my-sm-0"
              type="submit"
            >
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
          <Link
            className="nav-link text-white"
            style={{ fontSize: "20px" }}
            to="/Addcard"
          >
            <i id="navItemss" className="fa-solid fa-cart-plus"></i>
          </Link>
          <Link
            className="nav-link text-white"
            style={{ fontSize: "20px" }}
            to="/Login"
          >
            <i id="navItemss" class="fa-solid fa-user"></i>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
