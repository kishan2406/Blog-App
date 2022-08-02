import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import Header from "../../header/Header";
import Posts from "../../Posts/Posts";
import axios from "axios"
import Sidebar from "../../Sidebar/Sidebar";
import "./Home.css";

export default function Home() {
  //use hook 
  const [posts, setPosts] = useState([]);

  //user search and show username on url box

 const {search}=useLocation()
//  console.log(location)

  //FECTH DATA 
  useEffect(() => {
  const fetchPosts=async()=>{
   const res =await axios.get("/posts"+search)
   setPosts(res.data)
  }
fetchPosts()

  }, [search]);
 
  return (
    <>
      <Header />
      <div className="home">
        <Posts  posts={posts}/>
        <Sidebar />
      </div>
    </>
  );
}