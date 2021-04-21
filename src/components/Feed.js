import React from "react";
import MessageSender from "./MessageSender";
import StoryReel from "./StoryReel";
import "./feed.css";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      <Post
        profilePic="https://avatars.githubusercontent.com/u/64411872?s=400&u=02f4b9010fe64fbc859389f1df24a4713cd2ce26&v=4"
        message="yoo this is a message"
        timestamp="1618881556"
        imgName="imgName"
        userName="tejendra"
      />
    </div>
  );
}

export default Feed;
