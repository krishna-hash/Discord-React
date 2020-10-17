import React from 'react'
import {Button} from "@material-ui/core";
import "./Login.css"
import {auth,provider} from "./Firebase"

function Login() {
    const signin=()=>{
        auth.signInWithPopup(provider).catch((err)=>alert(err.message))
    }
    return (
        <div className="login">

        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FGwmRbvWX_Hs%2Fmaxresdefault.jpg&f=1&nofb=1"  alt="discord"  height="400px"></img>

        <Button  className="button" onClick={signin}>Login</Button>
    </div>
    )
}

export default Login
