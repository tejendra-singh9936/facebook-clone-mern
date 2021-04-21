import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo-500x313.png"
          alt="facebook logo"
        />
      </div>
      <div className="header_input">
        <SearchIcon />
        <input placeholder="search facebook" type="text" />
      </div>
      <div className="header_center">
        <div className="header_option header_option--active">
          <HomeIcon fontsize="large" />
        </div>
        <div className="header_option">
          <FlagIcon fontsize="large" />
        </div>
        <div className="header_option">
          <SubscriptionsOutlinedIcon fontsize="large" />
        </div>
        <div className="header_option">
          <StorefrontOutlinedIcon fontsize="large" />
        </div>
        <div className="header_option">
          <SupervisedUserCircleIcon fontsize="large" />
        </div>
      </div>
      <div className="header_right">
        <div class="header_info">
          <Avatar />
          <h4>tejendra singh</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
