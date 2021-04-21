import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import "./messagesender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

function MessageSender() {
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="messageSender">
      <div className="messageSender_header">
        <Avatar src="https://avatars.githubusercontent.com/u/64411872?s=400&u=02f4b9010fe64fbc859389f1df24a4713cd2ce26&v=4" />
        <form>
          <input
            type="text"
            className="messageSender_input"
            placeholder="Whats on your mind, Tejendra"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            type="file"
            className="messageSender_fileSelector"
            onChange={handleChange}
          />
          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>
      <div class="messageSender_footer">
        <div className="messageSender_option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>LiveVideo</h3>
        </div>
        <div className="messageSender_option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender_option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feelings/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
