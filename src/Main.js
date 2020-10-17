import { Button, Input } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Main.css";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
import Mainheader from "./Mainheader";
import CardGiftcardRoundedIcon from "@material-ui/icons/CardGiftcardRounded";
import GifRoundedIcon from "@material-ui/icons/GifRounded";
import EmojiEmotionsRoundedIcon from "@material-ui/icons/EmojiEmotionsRounded";
import Messages from "./Messages"
import {useSelector} from "react-redux"
import {selectchannelId,selectchannelName} from "../src/features/appSlice";
import firebase from"firebase"

import { selectCount} from "../src/features/counterSlice"
import db from "./Firebase";

function Main() {
  const user= useSelector(selectCount)
   const id=useSelector(selectchannelId);
   const name=useSelector(selectchannelName);
   const [messages,setmessage]=useState([])
   const [input,setinput]=useState("")
   console.log("name>>>>>",name)
   console.log("message>>>>>",messages.message)
   console.log("user>>>>>",messages.timestamp)


   useEffect(()=>{

    if(id){
      db.collection("channels").doc(id).collection("messages").orderBy("timestamp","desc").onSnapshot(snap=>{
        setmessage(snap.docs.map(doc=>
          doc.data()
        ))
      })
      
    }

   },[id])
   const sendmesage=(e)=>{
     e.preventDefault()
     db.collection("channels").doc(id).collection("messages").add({
       message:input,
       timestamp:firebase.firestore.FieldValue.serverTimestamp(),
       user:user
     })
     setinput("")
   }
  return (
    <div className="main">
      <Mainheader  name={name}  />

      <div className="main_messages">
{
  messages.map((mess)=>(
    <Messages   message={mess.message} timestamp={mess.timestamp} user={mess.user}  />
  ))
}
 
      
      </div>
      <div className="main_input">
        <AddCircleOutlineRoundedIcon className="Icon" />
        <form>
          <Input type="text" disabled={!id} placeholder={`Message  #${name}`} value={input}  onChange={(e)=>setinput(e.target.value)}  />
          <Button type="submit"   onClick={sendmesage}>send message</Button>
        </form>
        <div className="main_icons">
          <CardGiftcardRoundedIcon />
          <GifRoundedIcon />
          <EmojiEmotionsRoundedIcon />
        </div>
      </div>
    </div>
  );
}

export default Main;
