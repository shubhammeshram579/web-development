import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import { Contenier, SharePost } from "..//../index.js";
import CreatedPosts from "./CreatedPosts.jsx";
import SavePosts from "./SavePosts.jsx";

const OwnerPost = ({ userId }) => {
  const scrollRef2 = useRef(null);
  const scrollInstance = useRef(null); // Keep track of Locomotive Scroll instance
  const [currentUser, setCurrentUser] = useState([]);
  const [activeSection, setActiveSection] = useState("created");
  const accessToken = useSelector((state) => state.auth.user?.accessToken);
  const [loading, setLoading] = useState(true);
  const postUrl = window.location.href;

  // Initialize Locomotive Scroll
  useEffect(() => {
    if (scrollRef2.current) {
      scrollInstance.current = new LocomotiveScroll({
        el: scrollRef2.current,
        smooth: true,
        smoothMobile: true, // Enable smooth scrolling on mobile
        inertia: 1, // Inertia-based smooth scrolling
        getDirection: true, // Track scroll direction
        getSpeed: true, // Track scroll speed
        multiplier: 1.5, // Scroll speed multiplier
      });

      // Clean up Locomotive Scroll on component unmount
      return () => {
        if (scrollInstance.current) {
          scrollInstance.current.destroy();
        }
      };
    }
  }, []);

  // Fetch current user data
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const userData = await axios.get(
          "http://localhost:8000/api/users/current-user",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setCurrentUser(userData.data.data.curentUser);
        setLoading(false);

        // Refresh Locomotive Scroll after content loads
        if (scrollInstance.current) {
          scrollInstance.current.update();
        }
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };

    fetchCurrentUser();
  }, [accessToken]);

  const handleSectionChange = (section) => {
    setActiveSection(section);

    // Update Locomotive Scroll when section changes
    if (scrollInstance.current) {
      setTimeout(() => {
        scrollInstance.current.update();
      }, 100); // Add a slight delay to ensure content has rendered
    }
  };

  if (loading) return <div className="py-[90vh]">Loading...</div>;
  if (!currentUser.fullname) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-auto w-full py-40 bg-gray-100 " ref={scrollRef2}>
      <div className="flex items-center justify-center flex-col">
        <h1 className="w-10 h-10 p-16 rounded-full bg-gray-400 flex items-center justify-center font-bold text-xl mb-5">
          {currentUser.fullname[0]}
        </h1>
        <h1 className="font-bold text-4xl mb-2">{currentUser.fullname}</h1>
        <h2>@{currentUser.username}</h2>
        <div className="flex items-center justify-between gap-5 font-bold">
          <h2 className="mt-2">{currentUser.followers.length} Followers</h2>
          <h2 className="mt-2">{currentUser.following.length} Following</h2>
        </div>
        <div className="flex items-center justify-center gap-3 mt-5">
          <h1 className="px-10 flex items-center justify-center py-1 rounded-3xl bg-gray-400 hover:bg-green-500">
            <SharePost postUrl={postUrl} />
            Share
          </h1>
          <Link to="/UpdateUser">
            <h1 className="rounded-3xl py-3 px-10 bg-gray-400 hover:bg-red-500 hover:text-white">
              Edit profile
            </h1>
          </Link>
        </div>

        {/* Section buttons */}
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
  );
};

export default OwnerPost;
