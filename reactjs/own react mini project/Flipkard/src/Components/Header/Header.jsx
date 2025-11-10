import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [showdrop, setShowdrop] = useState(false);
  const [showdrop2, setShowdrop2] = useState(false);

  const handelButne = () => {
    setShowdrop((prev) => !prev);
  };

  const handelButne2 = () => {
    setShowdrop2((prev) => !prev);
  };

  const mouseleve = () => {
    setShowdrop2(false);
  }
  
  return (
    <>
      <div>
        <nav className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-5">
            <a href="/"><img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_plus-055f80.svg"
              alt=""
            /></a>
            <div className="flex items-center justify-center gap-3">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                className="w-[36vw] border border-black rounded"
                type="text"
                placeholder="search product"
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-5">
            <a onClick={handelButne} className="userselect" href="#">
              <i className="fa-solid fa-user"></i>UserName{" "}
            </a>
            <a
              href="/card"
            >
              <i className="fa-solid fa-cart-plus"></i>Card
            </a>
            <a href="/products">
              <i className="fa-solid fa-store"></i>Become a Seller
            </a>
            <a href="/editProduct">
              <i className="fa-solid fa-store"></i>Edit Product
            </a>
            <a href="/crudCard">
              <i className="fa-solid fa-store"></i>Add card
            </a>
            <i
              onMouseEnter={handelButne2}
              className="fa-solid fa-ellipsis-vertical"
            ></i>
          </div>
        </nav>
        {showdrop && (
          <div className="dropdown bg-gray-200 px-2 py-2 w-20 rounded  ml-[76%] absolute">
            <ul>
              <Link to="/card"><li>UserCard</li></Link>
              <li>UserCard</li>
              <li>UserCard</li>
              <li>UserCard</li>
              <li>UserCard</li>
              <li>UserCard</li>
            </ul>
          </div>
        )}

        {showdrop2 && (
          <div onMouseLeave={mouseleve} className="action bg-gray-200 px-2 py-2 w-20 rounded  ml-[93%] absolute">
            <ul>
              <li>Actions</li>
              <li>Actions</li>
              <li>Actions</li>
              <li>Actions</li>
              <li>Actions</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
