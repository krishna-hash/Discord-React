import React from "react";
import {useDispatch} from "react-redux"
import "./Sidebarchannel.css";
import  {channelinfo} from "../src/features/appSlice"

function Sidebarchannel({ id, channel }) {
  const dispatch=useDispatch()
  return (
    <div className="channels" onClick={()=>dispatch(channelinfo({
      channelId:id,
      channelName:channel
    }))} >
      <h4>
        <span className="channel_hash">#</span> {channel}
      </h4>
    </div>
  );
}

export default Sidebarchannel;
