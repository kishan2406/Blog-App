// import axios from "axios";
// import { useContext, useRef } from "react";
// import { Link } from "react-router-dom";

// import { Context } from "../../../Context/Context";
// import "./Login.css";

// export default function Login() {
//  const userref = useRef();
//  const passref = useRef();

//  const{user,dispatch,isFetching}=useContext(Context)


// const SubmitLoginForm= async(e)=>{
// e.preventDefault();
// dispatch({type:"LOGINSTART"});
// try{
// const  res=axios.post("/auth/login",{
// username:userref.current.value,
// password:passref.current.value,

// })
// dispatch({type:"LOGIN_SUCCESS",payload:res.data})
// }catch(err){
//   dispatch({type:"LOGIN_FAILURE"})
// }
// }

// console.log(user)
//   return (
//     <div className="login">
//       <span className="loginTitle">Login</span>


//       <form className="loginForm"  onSubmit={SubmitLoginForm}>
//         <label>Username</label>
//         <input className="loginInput" type="text" placeholder="Enter your username..."  ref={userref} />
//         <label>Password</label>
//         <input className="loginInput" type="password" placeholder="Enter your password..."  ref={passref}/>
//         <button className="loginButton">Login</button>
//       </form>


//         <button className="loginRegisterButton">
//           <Link  className="link" to="/register">Register</Link>
//         </button>
//     </div>
//   );
// }



import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../Context/Context";

import "./Login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const {user, dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      console.log(err)
    }
  };
console.log(user)
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}