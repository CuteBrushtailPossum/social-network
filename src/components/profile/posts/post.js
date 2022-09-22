import React from "react";
import avatar from '../../../img/avatar.png'
function Post(props){
    return(
        <div className='post'>
            <img src={avatar}alt='Avatarmini'/>
            <span>Username</span>
            <p>{props.message}</p>
        </div>
)}
export default Post