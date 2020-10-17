import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Messages.css"

function Messages({message,timestamp,user}) {

    console.log("hdhd>>>>>>><<<",message,user,timestamp)
    return (
        <div className="messages">
            <Avatar src= {user.userimage} />

            <div className="messages_info">
                <h4>{user.username}<span className="timestamp">{new Date(timestamp?.toDate()).toUTCString()}</span></h4>

                <p>{message}</p>
            </div>
        </div>
    )
}

export default Messages
