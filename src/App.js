import React,{useEffect} from "react";
import {useSelector,useDispatch} from "react-redux"
import "./App.css";
import Login from "./Login"
import Main from "./Main";
import Siderbar from "./Siderbar";
import { selectCount} from "../src/features/counterSlice"
import {auth} from "./Firebase"
import {login,logout} from "../src/features/counterSlice"

function App() {
  const dispatch=useDispatch()
  const user= useSelector(selectCount)

  useEffect(()=>{
    auth.onAuthStateChanged((changer)=>{
      if(changer){
   console.log("changer>>>>>>>",changer)
   dispatch(login({
     userid:changer.uid,
     userimage:changer.photoURL,
     useremail:changer.email,
     username:changer.displayName
   }))
      }else{
    dispatch(logout())
      }
    })
  },[dispatch])
  return (
    <div className="app">
      {
        user ? (
          <>
           <Siderbar />
      <Main />
          </>
        ):(
          <Login/>
        )
      }
     
    </div>
  );
}

export default App;
