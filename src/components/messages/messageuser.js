import React from "react";
import avatar from '../../img/avatar.png'
import {NavLink} from 'react-router-dom'
function Messageuser(props) {
    return(
    <div className="usermessage">
        <img src={avatar}alt='Avatar' className="messageava"/>
        <NavLink to={`/messages/${props.id}`}>{props.username}</NavLink>
    </div>
)}
export default Messageuser