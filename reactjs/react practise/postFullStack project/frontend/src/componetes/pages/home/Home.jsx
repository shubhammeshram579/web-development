import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Contenier } from "..//../index.js";
import { Link } from "react-router-dom";
import "..//..//../App.css";
import {
  SharePost,
  SavePostButton,
  OptionsCard,
  Footer,
} from "..//../index.js";
import Homepage from "..//../HomePage/Homepage.jsx";
import "..//..//../Responsive.css"

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [visible, setVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const accessToken = useSelector((state) => state.auth.user?.accessToken);
  const user = useSelector((state) => state.auth.user?.user);
  const authStatus = useSelector((state) => state.auth.isLoggedIn);
  // console.log(user);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "/api/posts/getAllpost",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        // console.log(response.data.data.getPosts)
        setPosts(response.data.data.getPosts);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  //post image hide
  const handleHide = () => {
    setIsHidden(!isHidden);
  };


  // postUrl copy
  const postUrl = window.location.href;
  // console.log("url",`${postUrl}getPostByID2`)

  // Function to randomly decide if a margin should be applied
  const shouldApplyMargin = () => Math.random() < 0.5; // 50% chance to apply margin

  if (loading) return <div className="py-[90vh]">Loading...</div>;
  if (!posts) {
    return <div>Loading...</div>;
  }
  // if (error) return <div className='font-bold text-5xl py-[27vh] text-green-900'>Login to read posts</div>;

  if (!authStatus) {
    return (
      <Contenier>
        <div className="text-center">
          <Homepage />
        </div>
      </Contenier>
    );
  }

  return (
    <Contenier>
      <div className="w-full h-full relative z-40 pt-32 bg-slate-100 flex items-center justify-between flex-col">
        <ul id="homePost" className="flex flex-row items-center justify-between flex-wrap pb-24  px-20">
          {posts.map((post, index) => {
            // Use a random function to decide margin for every other card
            const randomMargin = index % 2 !== 0 ? "70px" : "0px"; // Stagger every second post card with a margin of 30px
            // const margingbuttem = index %  2 === 0 ? '30vh' : '0px'; // Stagger every second post card with a margin of 30px
            // const butten = index % 2 !== 0 ? '--70px' : ''; // Stagger every second post card with a margin of 30px

            return (
              <li
             
                key={post._id}
                className="card relative mb-[-55px] rounded-2xl"
                style={{ marginTop: randomMargin }} // Apply staggered top margin
                onMouseEnter={() => setHoveredIndex(index)} // Set hover state on mouse enter
                onMouseLeave={() => setHoveredIndex(null)} // Reset hover state on mouse leave
                id="postCard"
              >
                <Link
                  to={`/getPostByID2/${post._id}`}
                  className="relative group"
                >
                  <img
                    className={`cardImg  w-[14vw] h-[50vh] object-cover object-center transition duration-300 rounded-3xl ${
                      hoveredIndex === index ? "opacity-50" : "opacity-100"
                    }`}
                    src={post.postImg}
                    alt="image"
                  />
                  {/* Overlay for light dark effect on hover */}
                  {hoveredIndex === index && (
                    <div className="absolute inset-0 bg-black opacity-45 rounded-3xl transition-opacity duration-300"></div>
                  )}
                </Link>

                {/* Save button with conditional opacity */}
                <h1
                id="SavebtnId"
                  className={`SaveBtn absolute ml-[7vw] mt-[-22vw] mb-[5vw] py-1 px-2 bg-red-500 rounded-3xl transition-opacity duration-300 text-white ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <SavePostButton userId={user._id} postId={post._id} />
                </h1>

                {/* Icons with conditional opacity */}
                <div
                  className={`selectbtn flex items-center justify-between absolute mt-[-5vw] pl-4 mb-14 transition-opacity duration-300 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                    // index % 2 !== 0 ? 'mt-[-70px]' : ''
                  }`}
                  id="btnsitems"
                >
                  <i id="webLink" class="ri-arrow-right-up-line bg-white flex items-center justify-center px-3 py-[0.5vw] rounded-3xl gap-2 text-[1vw]">
                    {" "}
                    behance
                  </i>
                  <div id="shrePost" className="flex items-center justify-center gap-2 ml-[1vw]">
                    <div className="bg-white rounded-full mt-1]">
                      <SharePost postUrl={`${postUrl}getPostByID2/${post._id}`} postTitle={post.title} />
                    </div>

                    <i id="treedot"
                      className="fa-solid fa-ellipsis cursor-pointer mr-7 text-[1.2vw] bg-white px-[0.6vw] py-[0.5vw] mt-[0.1vw] rounded-full"
                      onClick={() => setVisible(!visible)}
                    ></i>
                    <OptionsCard
                      onHide={handleHide}
                      visible={visible}
                      postId={post._id}
                    />
                  </div>
                </div>

                <h2 id="text1" className="text-center mt-5 font-bold">{post.title}</h2>
                <p id="text1" className="text-center">{post.description}</p>
              </li>
            );
          })}
        </ul>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </Contenier>
  );
};

export default Home;

// postUrl copy
// const postUrl = window.location.href;

//post image hide
// const handleHide = () => {
//   setIsHidden(!isHidden);
// };

// console.log(posts);

// donload butten and hide butten
// const [visible, setVisible] = useState(false);
// const [isHidden, setIsHidden] = useState(false);

{
  /* <div className="hoverEffect flex items-end justify-between flex-col text-white">
                <div>
                  <h1 className="SaveBtn mr-5 mt-5 bg-green-500 py-2 px-5 rounded-lg">
                    <SavePostButton userId={user._id} postId={post._id} />
                  </h1>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <i className="ri-share-2-line cursor-pointer text-[30px] mr-2"></i>
                  <i className="fa-solid fa-ellipsis cursor-pointer mr-5 text-2xl "></i>
                </div>
              </div> */
}

// useEffect(() => {
//   // Adding an event listener directly to the button element
//   const buttonElement = buttonRef.current;
//   console.log("buttonElement",buttonElement.childNodes[0].childNodes[2])

//   const buttonElement2 = buttonElement.childNodes[0];
//   console.log("buttonElement2",buttonElement2.childNodes[3])

//   const handleClick = () => {
//     alert("Button clicked!");
//     buttonElement2.childNodes[3].style.color = "red";
//   };

//   if (buttonElement2.childNodes[3]) {
//     buttonElement2.childNodes[3].addEventListener("click", handleClick);
//   }

//   // Cleanup function to remove the event listener when the component unmounts
//   return () => {
//     if (buttonElement2.childNodes[3]) {
//       buttonElement2.childNodes[3].removeEventListener("click", handleClick);
//     }
//   };
// }, []); // Empty dependency array ensures this effect runs only once after the initial render

{
  /* <ul className="flex flex-row items-center justify-around flex-wrap">
          {posts.map((post) => (
            <li key={post._id} className="card py-10 px-2 rounded-lg">
              
                <Link to={`/getPostByID2/${post._id}`}>
                  {" "}
                  <img className="cardImg" src={post.postImg} alt="image" />
                </Link>
                
                <h1 className="SaveBtn ml-[160px] mt-[-530px] mb-[500px] py-2 px-5 rounded-lg">
                  <SavePostButton userId={user._id} postId={post._id} />
                </h1>
                <div className="selectbtn flex items-center gap-4 mt-[-100px] ml-[180px] mb-14">
                  <i className="ri-share-2-line cursor-pointer text-[30px] mr-2 text-white"></i>
                  <i className="fa-solid fa-ellipsis cursor-pointer mr-5 text-2xl text-white "></i>
                </div>

                <h2 className="text-center mt-5 font-bold">{post.title}</h2>
                <p className="text-center">{post.description}</p>
            </li>
          ))}
        </ul> */
}
