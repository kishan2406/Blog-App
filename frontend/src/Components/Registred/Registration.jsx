import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom"
import "./Registration.css"

export default function Registration() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const [error, seterror] = useState(false);

  const formsubmit=async(e)=>{
        e.preventDefault()
         seterror(false)
        try{
            //user register wi the help of axios 
           
        const res=await axios.post("/auth/register",{
          username,email,password
        })
        console.log(res)
        res.data && window.location.replace("/login")
        }catch(err){
          //yeh error jab show hoga tab hum same username se dobara apne aap 
          // ko register kar rahe ho
          seterror(true)
        }
      
  }
    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={formsubmit}>
        <label>Username</label>
        <input className="registerInput"  onChange={e=>setUsername(e.target.value)} type="text" placeholder="Enter your username..." />
        <label>Email</label>
        <input className="registerInput" onChange={e=>setEmail(e.target.value)} type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="registerInput" onChange={e=>setPassword(e.target.value)} type="password" placeholder="Enter your password..." />
        <button type="submit" className="registerButton">Register</button>
      </form>
        <button className="registerLoginButton">
          <Link  claseName ="link" to="/login">Login</Link>
        </button>
        {error &&<span style={{color:"yellow"}}>something wentwrong</span>}
    </div>
    )
}