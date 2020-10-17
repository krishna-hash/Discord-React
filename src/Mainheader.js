import React from "react";
import "./Mainheader.css";
import { Input } from "@material-ui/core";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import EditLocationIcon from "@material-ui/icons/EditLocation";
import PeopleIcon from "@material-ui/icons/People";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import HelpOutlineRoundedIcon from "@material-ui/icons/HelpOutlineRounded";

function Mainheader({name}) {
  return (
    <div className="header">
      <div className="header_left">
        <h3>
  <span className="hash">#</span>{name}
        </h3>
      </div>
      <div className="header_right">
        <NotificationImportantIcon />
        <EditLocationIcon />
        <PeopleIcon />

        <div className="header_input">
          <Input type="text" placeholder="search" />
          <SearchOutlinedIcon />
        </div>
        <SendRoundedIcon />
        <HelpOutlineRoundedIcon />
      </div>
    </div>
  );
}

export default Mainheader;
