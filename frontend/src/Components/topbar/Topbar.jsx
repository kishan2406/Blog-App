import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/Context';
import "./topbar.css"
export default function Topbar() {
    const {user,dispatch}= useContext(Context)



const handleLogout=()=>{
    dispatch({type:"LOGOUT"})
}


  return (
   
    <div className="top">
    <div className="topLeft">
    <i className="topIcon fa-brands fa-facebook"></i>
    <i className="topIcon fa-brands fa-twitter"></i>
    <i className="topIcon fa-brands fa-instagram"></i>
    </div>
<div className="topCenter">
    <ul className='topList'>
        <li className='topListItem'>
            {/* //is link classname ki styling index.html page mein globally kar di hai  */}
            <Link to="/" className='link'>HOME</Link>
        </li>
        <li className='topListItem'>
        <Link to="/" className='link'>ABOUT</Link>
        </li>
        <li className='topListItem'>
        <Link to="/" className='link'>CONTACT</Link></li>
        <li className='topListItem'>
        <Link to="/write" className='link'>WRITE</Link>
        </li>
        <li className='topListItem' onClick={handleLogout}>{user && "LOGOUT"} </li>
    </ul>
</div>
<div className="topRight">
    {user?(
        <Link to="/setting">
        <img className="topimg" src='https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg' alt='broke img'/>
        </Link>
            
        ):(
   
        <ul className='topList'>
            <li className='topListItem'>
                <Link className='link' to ="/login">LOGIN</Link>
            </li>
            <li className='topListItem'>
                <Link className='link' to ="/register">REGISTER</Link>
            </li>
        </ul>
            
        )
    }
   
    <i className="searchIcon fa-solid fa-magnifying-glass"></i>
</div>
    </div>
    
  );
}
