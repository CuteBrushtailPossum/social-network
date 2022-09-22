import React from "react";
import avatar from '../../../img/avatar.png'
import Post from "./post";
function Posts() {
    return(
        <div className='posts'>
        <h2 className='myposts'>My posts</h2>
        <input placeholder='Enter the post.'/>
        <button>Add post</button>
        <Post message="Hello"></Post>
        <Post message="How are you"></Post>
        <Post message="Yes"></Post>
    </div>
)}
export default Posts