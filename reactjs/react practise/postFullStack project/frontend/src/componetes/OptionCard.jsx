import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const OptionsCard = ({ onDownload, onHide, visible }) => {
  const { postId } = useParams();
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const accessToken = useSelector((state) => state.auth.user?.accessToken);

  // get post
  useEffect(() => {
    const fatchgetpost = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/posts/getPostByID/${postId}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        setPost(response.data.data.getPostbyId);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fatchgetpost();
  }, [postId, accessToken]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!post) return <div>No post found</div>;

  return (
    <div
      className={`transition-opacity duration-500 z-20 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white shadow-md rounded-lg p-4 absolute z-20">
        <a
          href={post.postImg}
          target="target"
          className="block w-full text-left text-[15px] px-4 py-2 text-gray-700 hover:bg-gray-200"
        >
          Download Post Image
        </a>
        {/* <button onClick={onDownload} className="block w-full text-left text-[15px] px-4 py-2 text-gray-700 hover:bg-gray-200">Download Post Image</button> */}
        <button
          onClick={onHide}
          className="block w-full text-left text-[15px] px-4 py-2 text-gray-700 hover:bg-gray-200"
        >
          Hide Post Image
        </button>
      </div>
    </div>
  );
};

export default OptionsCard;
