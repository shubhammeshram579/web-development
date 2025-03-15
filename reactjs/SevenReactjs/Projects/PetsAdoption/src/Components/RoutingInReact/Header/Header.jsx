import React from "react";
import { Link } from "react-router-dom";
import "..//..//../App.css";
import Logo from "../Logo/Logo.jsx";
import { useSelector } from "react-redux";
import UserLogut from "..//User/UserLogut.jsx";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.isLoggedIn);
  const authStatusAdmin = useSelector((state) => state.auth.isAdminLoggedIn);
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        zIndex: "99999",
        padding: "0px 70px",
        width: "100%",
        backgroundColor: "#191919",
      }}
    >
      {!authStatusAdmin ? (
      <nav className="navbar navbar-expand-lg navbar-light" >
        <Logo />
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
         <ul className="navbar-nav ml-auto pr-5">
            <li className="nav-item active">
              <Link
                id="navItemss"
                className="nav-link "
                style={{ fontSize: "20px" }}
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
          </ul>
          <div className=" d-flex rounded">
            <Link
              className="nav-link text-white"
              style={{ fontSize: "20px" }}
              to="/Addcard/:postId"
            >
              <i id="navItemss" className="fa-solid fa-cart-plus text-info"></i>
            </Link>

            <div className="nav-item dropdown">
              <a
                id="navItemss"
                style={{ fontSize: "20px" }}
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="ri-menu-3-line text-info" ></i>
              </a>
              <div className="dropdown-menu bg-dark">
                <Link
                  id="navItemss"
                  className="nav-link"
                  style={{ fontSize: "20px" }}
                  to="/PetsAdoptionApprowR"
                >
                  ARequiest
                </Link>
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
                {!authStatus == !authStatusAdmin ? (
                  <Link
                    id="navItemss"
                    className="nav-link"
                    style={{ fontSize: "20px" }}
                    to="/Login"
                  >
                    Login <i id="navItemss" className="fa-solid fa-user"></i>
                  </Link>
                ) : (
                  <div className="d-flex align-content-center pl-2">
                    <UserLogut />{" "}
                    <i id="navItemss" className="fa-solid fa-user pt-2"></i>
                  </div>
                )}
                <div className="dropdown-divider"></div>
                <a className="dropdown-item text-white" href="#">
                  Something else here
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      ) : (

      <nav style={{display:"flex",alignItems:"center",justifyContent:"space-between" ,height:"90px"}}>
        <div>
          <Logo />
        </div>

        <div className="nav-item dropdown">
              <a
                id="navItemss"
                style={{ fontSize: "20px" }}
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="ri-menu-3-line text-info" ></i>
              </a>
              <div className="dropdown-menu bg-dark">
                {!authStatus == !authStatusAdmin ? (
                  <Link
                    id="navItemss"
                    className="nav-link"
                    style={{ fontSize: "20px" }}
                    to="/Login"
                  >
                    Login <i id="navItemss" className="fa-solid fa-user"></i>
                  </Link>
                ) : (
                  <div className="d-flex align-content-center pl-2">
                    <UserLogut />{" "}
                    <i id="navItemss" className="fa-solid fa-user pt-2"></i>
                  </div>
                )}
                <div className="dropdown-divider"></div>
                <a className="dropdown-item text-white" href="#">
                  Something else here
                </a>
              </div>
            </div>
      </nav>)}
    </div>
  );
};

export default Header;




    {/* <form className="form-inline my-2 my-lg-0">
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
          </form> */}

          {/* <li className="nav-item">
              <Link
                id="navItemss"
                className="nav-link"
                style={{ fontSize: "20px" }}
                to="/PetsAdoptionApprowR"
              >
                Pets Adoption Requiest
              </Link>
            </li> */}
