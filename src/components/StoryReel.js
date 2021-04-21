import React from "react";
import Story from "./Story";
import "./storyreel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
        profileSrc="https://avatars.githubusercontent.com/u/64411872?s=400&u=02f4b9010fe64fbc859389f1df24a4713cd2ce26&v=4"
        title="tejendra"
      />
      <Story
        image="https://i.pinimg.com/236x/34/25/9d/34259d8b6b60a94f5e43bde242ecc26e.jpg"
        profileSrc="https://avatars.githubusercontent.com/u/64411872?s=400&u=02f4b9010fe64fbc859389f1df24a4713cd2ce26&v=4"
        title="kshama"
      />
      <Story
        image="https://artforum.com/uploads/upload.002/id16263/article00_1064x.jpg"
        profileSrc="https://avatars.githubusercontent.com/u/64411872?s=400&u=02f4b9010fe64fbc859389f1df24a4713cd2ce26&v=4"
        title="preeti"
      />
    </div>
  );
}

export default StoryReel;
