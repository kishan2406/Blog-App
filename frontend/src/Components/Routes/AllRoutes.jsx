import React, { useContext } from "react"
import { Route, Routes } from "react-router-dom"
import { Context } from "../../Context/Context"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"
import Settings from "../Pages/Settings/Settings"
import Write from "../Pages/write/Write"
import Registration from "../Registred/Registration"
import SinglePost from "../singlepost/singlePost"

function AllRoutes(){
    const {user}= useContext(Context)
    return(
        <Routes>
            <Route path="/"  element={<Home/>}/>

            <Route path="/register"  element={user?<Home/>:<Registration/>}/>

            <Route path="/login"  element={user?<Home/>:<Login/>}/>

            <Route path="/write"  element={user?<Write/>:<Registration/>}/>
           
            <Route path="/setting"  element={user?<Settings/>:<Registration/>}/>
            
            <Route path="/post/:postId"  element={<SinglePost/>}/>
        </Routes>
    )
}

export default AllRoutes