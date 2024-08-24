import React, { useState } from "react";
import Contenier from "../contenier/Contenier.jsx";
import Logo from "../Logo.jsx";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LogoutBtn from "./LogoutBtn.jsx";
// import PostsList from "..//../componetes/pages/SearchPost/SearchPost.jsx"
import ChatSearchBar from "../ChatSearchbar.jsx";


function Header({
  showNotifications,
  setShowNotifications,
  showMassage,
  setShowMassage,
  setShereProfile,
}) {
  const [showMessages, setShowMessages] = useState(false);
  const authStatus = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  // const [loading, setLoading] = useState(true);

  const handleNotificationsClick = () => {
    setShowNotifications((prev) => !prev);
    setShowMassage(false); // Hide messages when showing notifications
  };

  const handleMessagesClick = () => {
    setShowMassage((prev) => !prev);
    setShowNotifications(false); // Hide notifications when showing messages
    setShereProfile(false)
  };

  const handleMessagesClick2 = () => {
    setShowMessages(prevState => {
      const newState = !prevState;
      if (newState) {
        navigate('/message');
      } else {
        navigate('/');
      }
      return newState;
    });
  };






  
  // const navigate = useNavigate();

  const navItems = [
    // {
    //   name: "Home",
    //   slug: "/",
    //   active: true,
    // },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Register",
      slug: "/Register",
      active: !authStatus,
    },
    {
      name: authStatus ? <h1 className="font-semibold uppercase bg-green-400 px-4 py-2 rounded-full hover:bg-slate-300">{user.user.fullname[0]}</h1> : "null",
      slug: authStatus ? `/getPost/${user.user._id}` : "/getPost/null",
      active: authStatus,
    },
    // {
    //   name: "AddPost",
    //   slug: "/addpost",
    //   active: authStatus,
    // },
    // {
    //     name: "Search post",
    //     slug: "/posts/getAllpost/search",
    //     active: authStatus,
    // },
  ];

  // if(!user.user.fullname){
  //   return <div>loading...</div>
  // }

  return (
    <header className={"bg-gray-500 p-7 fixed w-full z-[100]"}>
      <Contenier>
        <nav className={"flex items-center justify-between"}>
          <div className="flex items-center justify-around gap-20">
            <Link to="/">
              <Logo />
            </Link>

            <div>
          <Link to="/" active={true} className="inline-block px-2 py-2 duration-200 hover:bg-blue-100 rounded-full">Home</Link>
          </div>
          </div>
          

          {authStatus && (
            <div>
                <Link to="/addpost" active={authStatus} className="inline-block px-2 py-3 duration-200 hover:bg-blue-100 rounded-full">Create</Link>
            </div>
          )}

          {authStatus && (
            <div>
              <ChatSearchBar />
            </div>
          )}

          {authStatus && (
              <button onClick={handleNotificationsClick}>
                {showNotifications ? (
                  "Hide Notifications"
                ) : (
                  <i class="fa-solid fa-bell text-xl inline-block px-2 py-2 duration-200 hover:bg-blue-100 rounded-full"></i>
                )}
              </button>
          )}

          {authStatus && (
              <button onClick={handleMessagesClick2}>
                {showMassage ? (
                  "Hide Massage"
                ) : (
                    <i class="fa-solid fa-comment-dots text-xl inline-block px-2 py-2 duration-200 hover:bg-blue-100 rounded-full"></i>
                )}
              </button>
          )}

          <ul className={"flex items-center justify-between gap-5"}>
            {/* {
                        navItems.map((item)=>
                            item.active ? (
                                <li key={item.name}>
                                    <button onClick={() => navigate(item.slug)}
                                        className={'inline-block px-2 duration-200 hover:bg-blue-100 rounded-full'}> {item.name}
                                    </button>
                                </li>
                            ) : null )
                    } */}
            {navItems
              .filter((item) => item.active)
              .map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className={
                      "inline-block px-auto duration-200 hover:bg-blue-100 rounded-full"
                    }
                  >
                    {item.name}
                  </button>
                </li>
              ))}

            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Contenier>
    </header>
  );
}

export default Header;
