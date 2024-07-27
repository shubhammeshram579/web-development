import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Contenier ,SharePost} from "..//../index.js";
import CreatedPosts from "./CreatedPosts.jsx";
import SavePosts from "./SavePosts.jsx";

const PostsByOwner = ({userId}) => {
  const [activeSection, setActiveSection] = useState("created");

  const accessToken = useSelector((state) => state.auth.user?.accessToken);
  const user = useSelector((state) => state.auth.user);

  const postUrl = window.location.href;

  // console.log(user.user.savePosts)

  // useEffect(() =>{
  //   const fatchCurrentUser = async () => {
  //     try {

  //       const userData = await axios.get("http://localhost:8000/api/users/current-user",{
  //         headers: {
  //           "Authorization":`Bearer ${accessToken}`
  //         }
  //       })
  //       // console.log("savePost currentuser",userData.data.data.curentUser)
  //       setSavePost(userData.data.data.curentUser.savePosts)

  //       setLoading(false);
  //     } catch (error) {
  //       setError(error.message);
  //       setLoading(false);
  //     }

  //   };

  //   fatchCurrentUser()
  // },[]);


  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <Contenier>
      <div className="flex items-center justify-center flex-col">
        <h1 className="w-10 h-10 p-16 rounded-full bg-gray-400 flex items-center justify-center font-bold text-xl mb-5">
          {user.user.fullname[0]}
        </h1>
        <h1 className="font-bold text-4xl mb-2">{user.user.fullname}</h1>
        <h2>@ {user.user.username}</h2>
        <div className="flex items-center justify-between gap-5 font-bold">
        <h2 className="mt-2">{user.user.followers.length} Followers</h2>
        <h2 className="mt-2">{user.user.following.length} Follwing</h2>
        </div>
        <div className="flex items-center justify-center gap-3 mt-5">
          <h1 className="px-10 flex items-center justify-center py-1 rounded-3xl bg-slate-400 hover:bg-green-500"><SharePost postUrl={postUrl} />Share</h1>
          <Link to="/UpdateUser">
            <h1 className=" rounded-3xl py-3 px-10 bg-slate-400">
              Edit profile
            </h1>
          </Link>
        </div>

        {/* button */}
        <div>
          <div className="button-group flex items-center justify-center gap-5 font-bold mt-[150px]">
           <button
              onClick={() => handleSectionChange("created")}
              className={
                activeSection === "created"
                  ? "border-b-4 border-blue-500"
                  : "border-b-4 border-transparent"
              }
            >
              Created
            </button>
            <button
              onClick={() => handleSectionChange("saved")}
              className={
                activeSection === "saved"
                  ? "border-b-4 border-blue-500"
                  : "border-b-2 border-transparent"
              }
            >
              Saved
            </button>
          </div>

          <div className="content">
            {activeSection === "created" && (
              <div className="created-posts">
                <CreatedPosts />
              </div>
            )}

            {activeSection === "saved" && (
              <div className="saved-posts">
                <SavePosts />
              </div>
            )}
          </div>
        </div>
      </div>
    </Contenier>
  );
};

export default PostsByOwner;
