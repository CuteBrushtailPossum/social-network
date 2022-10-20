import React from "react";
import avatar from '../../../img/avatar.png'
import Post from "./post";
function Posts(props) {
    return(
        <div className='posts'>
        <h2 className='myposts'>My posts</h2>
        <input placeholder='Enter the post.'/>
        <button>Add post</button>
        {props.post.map((e)=><Post id={e.id} message={e.text}/>)}
    </div>
)}
export default Posts