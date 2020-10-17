import React, { useState,useEffect } from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import { Avatar, Button } from "@material-ui/core";
import Sidebarchannel from "./Sidebarchannel";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CallOutlinedIcon from "@material-ui/icons/CallOutlined";
import SignalCellular4BarOutlinedIcon from "@material-ui/icons/SignalCellular4BarOutlined";
import MicOutlinedIcon from "@material-ui/icons/MicOutlined";
import HeadsetOutlinedIcon from "@material-ui/icons/HeadsetOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import {useSelector} from"react-redux"
import  {selectCount} from "../src/features/counterSlice"
import db, {auth} from "./Firebase"

function Siderbar() {
  const [channel,setchannel]=useState([])
  const user= useSelector(selectCount);
  useEffect(()=>{
  db.collection("channels").onSnapshot(snap=>{
    setchannel(snap.docs.map(doc=>({
      id:doc.id,
      data:doc.data()
    })))
  })
  },[])
  const handlechange=()=>{
     const name=prompt("Enter Channel name");
     if(name){
       db.collection("channels").add({
         channelName:name
       })
     }
  }

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <h2>krishna team</h2>
        <Button>
          <ExpandMoreIcon />
        </Button>
      </div>
      <div className="sidebar_main">
        <div className="siderbarmain_header">
          <div className="sidebar_header">
            <Button>
              <ExpandMoreIcon />
            </Button>
            <h2>Text Channel</h2>
          </div>

          <Button>
            <AddIcon className="addicon" onClick={handlechange}></AddIcon>
          </Button>
        </div>
        <div className="sidebar_channels">
          {
            channel.map(({id,data})=>(
              <Sidebarchannel id={id} key={id} channel={data.channelName}  />
            ))
          }

    
         
        </div>
      </div>

      <div className="sidebar_footer">
        <SignalCellular4BarOutlinedIcon className="icons" />

        <div className="footer_info">
          <h2>Voice Connected</h2>
          <p>stream</p>
        </div>
        <div className="footer_icon">
          <InfoOutlinedIcon className="icon" />
          <CallOutlinedIcon className="icon" />
        </div>
      </div>

      <div className="sidebar_profile">
        <Button> <Avatar src={user.userimage} onClick={()=>auth.signOut()} /></Button>
       
        <div className="profile_info">
  <h2>{user.username}</h2>
  <p>#{user.userid.substring(0,5)}</p>
        </div>
        <div className="profile_icons">
          <MicOutlinedIcon />
          <HeadsetOutlinedIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
}

export default Siderbar;
