import React from "react";
import "./widget.css";

function Widget() {
  return (
    <div className="widgets">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=288593762129901"
        width="340"
        height="1500"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        title="widget"
        frameborder="0"
        allowTransparency="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default Widget;
