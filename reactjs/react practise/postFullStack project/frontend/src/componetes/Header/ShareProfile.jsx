import React from "react";
import { SharePost } from "..//../componetes/index.js";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import { Link } from "react-router-dom";

const ShareProfile = ({ postTitle }) => {
  const postUrl = window.location.href;
  // const postUrl = `http://localhost:5173/getPost/${userId}`;
  const shareMessage = `I found someone who you should follow on our platform! Check out my profile: ${postUrl}`;

  const emailSubject = `Check out this profile: ${postTitle}`;
  const emailBody = `I found someone you should follow! Check out this profile: ${postUrl}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareMessage).then(
      () => alert("Link copied to clipboard!"),
      (err) => alert("Failed to copy the link")
    );
  };

  return (
    <div className="w-[22vw] h-[85vh] bg-gray-200 rounded-xl fixed z-50">
      <div className="flex items-center justify-between pr-5 pt-5 font-semibold text-2xl">
        <h1></h1>
        <Link to="/"><h1>Inbox</h1></Link>
        <i class="fa-solid fa-ellipsis"></i>
      </div>
      <div className="text-center font-semibold text-xl mt-10">
        <h1>Find inspiration together</h1>
      </div>
      <div className="ml-5 mt-10">
        <ol type="1">
          <li className="flex items-start mt-5 flex-col font-semibold text-xl">
            1. Share your link{" "}
            <span className="font-normal text-[19px]">
              Your friends need to follow you using your link to message you
            </span>
          </li>
          <li className="flex items-start mt-5 flex-col font-semibold text-xl">
            2. Your friends follow you{" "}
            <span className="font-normal text-[19px]">
              Each link works for a few friends at a time but you can get as
              many as you need
            </span>
          </li>
          <li className="flex items-start mt-5 flex-col font-semibold text-xl">
            3. Follow back!
            <span className="font-normal text-[19px]">
              Once you’re following each other, you can share ideas, goals and
              more via direct messages
            </span>
          </li>
        </ol>
      </div>
      <div>
        <div className="flex justify-center items-center gap-20 flex-wrap mt-10">
          <div className="flex items-center justify-center flex-col gap-1">
            <FacebookShareButton url={postUrl} quote={postTitle}>
              <FacebookIcon size={60} round/>
            </FacebookShareButton>
            <h1>Facebook</h1>
          </div>
          <div className="flex items-center justify-center flex-col gap-1">
            <WhatsappShareButton url={postUrl} title={postTitle}>
              <WhatsappIcon size={60} round />
            </WhatsappShareButton>
            <h1>Whatsapp</h1>
          </div>
          <div className="flex items-center justify-center flex-col gap-1">
            <TwitterShareButton url={postUrl} title={postTitle}>
              <TwitterIcon size={60} round />
            </TwitterShareButton>
            <h1>X</h1>
          </div>
          <div className="flex items-center justify-center flex-col gap-1">
            <a
              href={`mailto:?subject=${encodeURIComponent(
                emailSubject
              )}&body=${encodeURIComponent(emailBody)}`}
              className="text-xl"
            >
             <i class="fa-solid fa-envelope text-2xl bg-red-500 py-3 px-4 rounded-full"></i>
            </a>
            Email
          </div>
          <div className="flex items-center justify-center flex-col gap-1">
          <button onClick={copyToClipboard} className="text-xl">
          <i class="fa-solid fa-copy text-2xl  bg-gray-300 py-3 px-4 rounded-full"></i>
          </button>
          <h1 className="flex flex-row">Copy Link</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareProfile;
